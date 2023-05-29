// This file contains a declarative set of optimization rules that optimize
// WebAssembly bytecode before it's converted into JavaScript. The declarative
// rules are translated into code once when this library is loaded.
//
// These optimizations are tuned for the Go compiler's WebAssembly output,
// which does a lot of unnecessary 64-bit math. That's mostly fine when running
// WebAssembly natively but is pretty expensive when running WebAssembly via JS
// using BigInts. Avoiding unnecessary BigInts gives a decent performance boost
// (~50% faster).

import { Op, Pack } from './compile'

const enum Enable {
  Stats = 0, // Set this to 1 to enable statistics
}

type OpWithPayload =
  | Op.i32_const
  | Op.i64_const

  | Op.i32_load
  | Op.i64_load
  | Op.f32_load
  | Op.f64_load
  | Op.i32_load8_s
  | Op.i32_load8_u
  | Op.i32_load16_s
  | Op.i32_load16_u
  | Op.i64_load8_s
  | Op.i64_load8_u
  | Op.i64_load16_s
  | Op.i64_load16_u
  | Op.i64_load32_s
  | Op.i64_load32_u

  | Op.i32_store
  | Op.i64_store
  | Op.f32_store
  | Op.f64_store
  | Op.i32_store8
  | Op.i32_store16
  | Op.i64_store8
  | Op.i64_store16
  | Op.i64_store32

type OpWithoutPayload =
  | Op.i32_eqz
  | Op.i32_eq
  | Op.i32_ne
  | Op.i32_lt_s
  | Op.i32_lt_u
  | Op.i32_gt_s
  | Op.i32_gt_u
  | Op.i32_le_s
  | Op.i32_le_u
  | Op.i32_ge_s
  | Op.i32_ge_u

  | Op.i64_eqz
  | Op.i64_eq
  | Op.i64_ne
  | Op.i64_lt_s
  | Op.i64_lt_u
  | Op.i64_gt_s
  | Op.i64_gt_u
  | Op.i64_le_s
  | Op.i64_le_u
  | Op.i64_ge_s
  | Op.i64_ge_u

  | Op.i32_clz
  | Op.i32_ctz
  | Op.i32_popcnt
  | Op.i32_add
  | Op.i32_sub
  | Op.i32_mul
  | Op.i32_div_s
  | Op.i32_div_u
  | Op.i32_rem_s
  | Op.i32_rem_u
  | Op.i32_and
  | Op.i32_or
  | Op.i32_xor
  | Op.i32_shl
  | Op.i32_shr_s
  | Op.i32_shr_u
  | Op.i32_rotl
  | Op.i32_rotr

  | Op.i64_clz
  | Op.i64_ctz
  | Op.i64_popcnt
  | Op.i64_add
  | Op.i64_sub
  | Op.i64_mul
  | Op.i64_div_s
  | Op.i64_div_u
  | Op.i64_rem_s
  | Op.i64_rem_u
  | Op.i64_and
  | Op.i64_or
  | Op.i64_xor
  | Op.i64_shl
  | Op.i64_shr_s
  | Op.i64_shr_u
  | Op.i64_rotl
  | Op.i64_rotr

  | Op.i32_wrap_i64
  | Op.i64_extend_i32_s
  | Op.i64_extend_i32_u

// AST nodes consist of a leading opcode, zero or more child expressions, and
// an optional trailing payload. The payload is separated out because it isn't
// included in the AST node's child count (which allows for generic traversal).
type Expr = 'x' | 'y' | 'z'
type Payload = 'P' | 'Q'
type OneOfWithoutPayload = '@'
type OneOfWithPayload = '$'

type Match =
  | [OpWithoutPayload | [OneOfWithoutPayload, ...OpWithoutPayload[]], ...(Match | Expr)[]]
  | [OpWithPayload | [OneOfWithPayload, ...OpWithPayload[]], ...(Match | Expr)[], Payload]

type Replace =
  | Expr
  | [OpWithoutPayload | OneOfWithoutPayload, ...Replace[]]
  | [OpWithPayload | OneOfWithPayload, ...Replace[], ReplacePayload]

const enum Edit {
  i64_to_i32 = -1,
  i32_add = -2,
  i64_and = -3,
}

type ReplacePayload =
  | Payload
  | [Edit.i64_to_i32, ReplacePayload]
  | [Edit.i32_add, ReplacePayload, ReplacePayload]
  | [Edit.i64_and, ReplacePayload, ReplacePayload]

type Check =
  | Payload
  | bigint
  | [Check, '===' | '&', Check]

interface Rule {
  match_: Match
  nested_?: Partial<Record<Expr, Rule[]>>
  replace_?: Replace
  onlyIf_?: Check
}

const rules: Rule[] = [
  // load of (addr + constant) => merge constant into load's offset
  {
    match_: [
      ['$',
        Op.i32_load, Op.i64_load, Op.f32_load, Op.f64_load,
        Op.i32_load8_s, Op.i32_load8_u, Op.i32_load16_s, Op.i32_load16_u,
        Op.i64_load8_s, Op.i64_load8_u, Op.i64_load16_s, Op.i64_load16_u, Op.i64_load32_s, Op.i64_load32_u,
      ],
      [Op.i32_add, 'x', [Op.i32_const, 'Q']],
      'P',
    ],
    replace_: ['$', 'x', [Edit.i32_add, 'P', 'Q']],
  },

  // store of (addr + constant) => merge constant into store's offset
  {
    match_: [
      ['$',
        Op.i32_store, Op.i64_store, Op.f32_store, Op.f64_store,
        Op.i32_store8, Op.i32_store16,
        Op.i64_store8, Op.i64_store16, Op.i64_store32,
      ],
      [Op.i32_add, 'x', [Op.i32_const, 'Q']],
      'y',
      'P',
    ],
    replace_: ['$', 'x', 'y', [Edit.i32_add, 'P', 'Q']],
  },

  // i64_store8 => i32_store8
  {
    match_: [Op.i64_store8, 'x', 'y', 'P'],
    nested_: {
      'y': [
        {
          match_: [Op.i64_const, 'Q'],
          replace_: [Op.i32_store8, 'x', [Op.i32_const, [Edit.i64_to_i32, 'Q']], 'P'],
        },
        {
          match_: [
            ['$',
              Op.i64_load8_s, Op.i64_load8_u,
              Op.i64_load16_s, Op.i64_load16_u,
              Op.i64_load32_s, Op.i64_load32_u,
              Op.i64_load,
            ],
            'z',
            'Q',
          ],
          replace_: [Op.i32_store8, 'x', [Op.i32_load8_u, 'z', 'Q'], 'P'],
        },
        {
          match_: [['@', Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'z'],
          replace_: [Op.i32_store8, 'x', 'z', 'P'],
        },
      ],
    },
  },

  // i64_store16 => i32_store16
  {
    match_: [Op.i64_store16, 'x', 'y', 'P'],
    nested_: {
      'y': [
        {
          match_: [Op.i64_const, 'Q'],
          replace_: [Op.i32_store16, 'x', [Op.i32_const, [Edit.i64_to_i32, 'Q']], 'P'],
        },
        {
          match_: [Op.i64_load8_s, 'z', 'Q'],
          replace_: [Op.i32_store16, 'x', [Op.i32_load8_s, 'z', 'Q'], 'P'],
        },
        {
          match_: [Op.i64_load8_u, 'z', 'Q'],
          replace_: [Op.i32_store16, 'x', [Op.i32_load8_u, 'z', 'Q'], 'P'],
        },
        {
          match_: [
            ['$',
              Op.i64_load16_s, Op.i64_load16_u,
              Op.i64_load32_s, Op.i64_load32_u,
              Op.i64_load,
            ],
            'z',
            'Q',
          ],
          replace_: [Op.i32_store16, 'x', [Op.i32_load16_u, 'z', 'Q'], 'P'],
        },
        {
          match_: [['@', Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'z'],
          replace_: [Op.i32_store16, 'x', 'z', 'P'],
        },
      ],
    },
  },

  // i64_store32 => i32_store
  {
    match_: [Op.i64_store32, 'x', 'y', 'P'],
    nested_: {
      'y': [
        {
          match_: [Op.i64_const, 'Q'],
          replace_: [Op.i32_store, 'x', [Op.i32_const, [Edit.i64_to_i32, 'Q']], 'P'],
        },
        {
          match_: [Op.i64_load8_s, 'z', 'Q'],
          replace_: [Op.i32_store, 'x', [Op.i32_load8_s, 'z', 'Q'], 'P'],
        },
        {
          match_: [Op.i64_load8_u, 'z', 'Q'],
          replace_: [Op.i32_store, 'x', [Op.i32_load8_u, 'z', 'Q'], 'P'],
        },
        {
          match_: [Op.i64_load16_s, 'z', 'Q'],
          replace_: [Op.i32_store, 'x', [Op.i32_load16_s, 'z', 'Q'], 'P'],
        },
        {
          match_: [Op.i64_load16_u, 'z', 'Q'],
          replace_: [Op.i32_store, 'x', [Op.i32_load16_u, 'z', 'Q'], 'P'],
        },
        {
          match_: [
            ['$',
              Op.i64_load32_s, Op.i64_load32_u,
              Op.i64_load,
            ],
            'z',
            'Q',
          ],
          replace_: [Op.i32_store, 'x', [Op.i32_load, 'z', 'Q'], 'P'],
        },
        {
          match_: [['@', Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'z'],
          replace_: [Op.i32_store, 'x', 'z', 'P'],
        },
      ],
    },
  },

  // i64_eqz => i32_eqz
  {
    match_: [Op.i64_eqz, 'x'],
    nested_: {
      'x': [
        {
          match_: [['$', Op.i64_load8_s, Op.i64_load8_u], 'y', 'P'],
          replace_: [Op.i32_eqz, [Op.i32_load8_u, 'y', 'P']],
        },
        {
          match_: [['$', Op.i64_load16_s, Op.i64_load16_u], 'y', 'P'],
          replace_: [Op.i32_eqz, [Op.i32_load16_u, 'y', 'P']],
        },
        {
          match_: [['$', Op.i64_load32_s, Op.i64_load32_u], 'y', 'P'],
          replace_: [Op.i32_eqz, [Op.i32_load, 'y', 'P']],
        },
        {
          match_: [['@', Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'y'],
          replace_: [Op.i32_eqz, 'y'],
        },
      ],
    },
  },

  // i32_wrap_i64 removal
  {
    match_: [Op.i32_wrap_i64, 'x'],
    nested_: {
      'x': [
        {
          match_: [Op.i64_const, 'P'],
          replace_: [Op.i32_const, [Edit.i64_to_i32, 'P']],
        },
        {
          match_: [Op.i64_load8_s, 'y', 'P'],
          replace_: [Op.i32_load8_s, 'y', 'P'],
        },
        {
          match_: [Op.i64_load8_u, 'y', 'P'],
          replace_: [Op.i32_load8_u, 'y', 'P'],
        },
        {
          match_: [Op.i64_load16_s, 'y', 'P'],
          replace_: [Op.i32_load16_s, 'y', 'P'],
        },
        {
          match_: [Op.i64_load16_u, 'y', 'P'],
          replace_: [Op.i32_load16_u, 'y', 'P'],
        },
        {
          match_: [['$', Op.i64_load32_s, Op.i64_load32_u, Op.i64_load], 'y', 'P'],
          replace_: [Op.i32_load, 'y', 'P'],
        },
        {
          match_: [['@', Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'y'],
          replace_: 'y',
        },
        {
          match_: [Op.i64_add, [['@', Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'y'], [Op.i64_const, 'P']],
          replace_: [Op.i32_add, 'y', [Op.i32_const, [Edit.i64_to_i32, 'P']]],
        },
      ],
    },
  },

  // i64_and
  {
    match_: [Op.i64_and, 'x', [Op.i64_const, 'P']],
    nested_: {
      'x': [
        {
          match_: [Op.i64_and, 'y', [Op.i64_const, 'Q']],
          replace_: [Op.i64_and, 'y', [Op.i64_const, [Edit.i64_and, 'P', 'Q']]],
        },
        {
          match_: [Op.i64_load8_u, 'y', 'Q'],
          replace_: [Op.i64_load8_u, 'y', 'Q'],
          onlyIf_: [['P', '&', 0xFFn], '===', 0xFFn],
        },
        {
          match_: [Op.i64_load8_s, 'y', 'Q'],
          replace_: [Op.i64_load8_u, 'y', 'Q'],
          onlyIf_: ['P', '===', 0xFFn],
        },
        {
          match_: [Op.i64_load16_u, 'y', 'Q'],
          replace_: [Op.i64_load16_u, 'y', 'Q'],
          onlyIf_: [['P', '&', 0xFFFFn], '===', 0xFFFFn],
        },
        {
          match_: [Op.i64_load16_s, 'y', 'Q'],
          replace_: [Op.i64_load16_u, 'y', 'Q'],
          onlyIf_: ['P', '===', 0xFFFFn],
        },
        {
          match_: [Op.i64_load32_u, 'y', 'Q'],
          replace_: [Op.i64_load32_u, 'y', 'Q'],
          onlyIf_: [['P', '&', 0xFFFF_FFFFn], '===', 0xFFFF_FFFFn],
        },
        {
          match_: [Op.i64_load32_s, 'y', 'Q'],
          replace_: [Op.i64_load32_u, 'y', 'Q'],
          onlyIf_: ['P', '===', 0xFFFF_FFFFn],
        },
      ],
    },
  },
]

// This function compiles the declarative set of optimization rules above into
// code that does the subtree matching and replacement. This only needs to be
// done once. The rules are compiled instead of interpreted to improve compile
// speed, as these rules are applied to every node that the compiler generates.
//
// Note: If this function returns a negative number, then the returned pointer
// is the 2's complement of the number and the optimization function should be
// called again. Optimizations are iterated until a fixed point is reached.
export const compileOptimizations = (): (ast: Int32Array, constants: bigint[], allocateNode: (node: number, length: number) => number, ptr: number) => number => {
  type PlaceholderMap = Partial<Record<Expr | Payload, string>>

  interface ReusableNode {
    ptrVar_: string
    operands_: (Expr | Payload | null)[]
  }

  let nextVar = 0
  const newVarName = () => 'v' + nextVar++

  const compileOperand = (ptrVar: string, index: number, operands: (Match | Expr | Payload)[], reusableNodes: ReusableNode[], then: (reusableNodes: ReusableNode[]) => void): void => {
    if (index < operands.length) {
      const operand = operands[index]
      if (typeof operand === 'string') {
        placeholderExprs[operand] = `${astVar}[${ptrVar}+${index + 1}]`
        compileOperand(ptrVar, index + 1, operands, reusableNodes, then)
      } else {
        const childPtr = newVarName()
        const childOp = newVarName()
        code += `var ${childPtr}=${astVar}[${ptrVar}+${index + 1}],${childOp}=${astVar}[${childPtr}]&${Pack.OpMask};`
        compileMatch(childPtr, childOp, operand, reusableNodes, reusableNodes => {
          compileOperand(ptrVar, index + 1, operands, reusableNodes, then)
        })
      }
    } else {
      then(reusableNodes)
    }
  }

  const compileMatch = (ptrVar: string, opVar: string, [pattern, ...operands]: Match, reusableNodes: ReusableNode[], then: (reusableNodes: ReusableNode[]) => void): void => {
    const parts: string[] = []

    // Match with a single opcode
    if (typeof pattern === 'number') {
      parts.push(`${opVar}===${pattern}`)
    }

    // Match with one of a set of opcodes
    else {
      const [name, ...oneOf] = pattern
      oneOf.sort((a, b) => a - b)

      // Remember this opcode match in case the replacement references it
      oneOfOps[name] = {
        ptrVar_: ptrVar,
        opVar_: opVar,
        canBeOptimized_: oneOf.some(x => opCanBeOptimized.has(x)),
      }

      // Collapse runs of nodes into range expressions
      for (let i = 0; i < oneOf.length; i++) {
        let run = 1
        while (i + run < oneOf.length && oneOf[i + run - 1] + 1 === oneOf[i + run]) run++
        parts.push(run > 2 ? `${opVar}>=${oneOf[i]}&&${opVar}<=${oneOf[i += run - 1]}` : `${opVar}===${oneOf[i]}`)
      }
    }

    // Remember this node so we can possibly reuse it later
    reusableNodes = reusableNodes.concat({
      ptrVar_: ptrVar,
      operands_: operands.map(x => typeof x === 'string' ? x : null),
    })

    code += `if(${parts.join('||')}){`
    compileOperand(ptrVar, 0, operands, reusableNodes, then)
    code += '}'
  }

  const compileRules = (
    ptrVar: string,
    opVar: string,
    rules: Rule[],
    buildStatName: ((match: Match) => string) | null,
    reusableNodes: ReusableNode[],
    placeholderVarsFromParent: PlaceholderMap,
  ): void => {
    for (const { match_: match, nested_: nested, replace_: replace, onlyIf_: onlyIf } of rules) {
      compileMatch(ptrVar, opVar, match, reusableNodes, reusableNodes => {
        const placeholderVars: PlaceholderMap = Object.create(placeholderVarsFromParent)

        compileOnlyIf(onlyIf, placeholderVars, () => {
          // Handle nested rules
          if (nested) {
            for (const operand in nested) {
              // Store this because we'll use it multiple times
              storePlaceholderExprToVar(operand as Expr, placeholderVars)
            }
            for (const operand in nested) {
              const childPtrVar = placeholderVars[operand as Expr]!
              const childOpVar = newVarName()
              code += `var ${childOpVar}=${astVar}[${childPtrVar}]&${Pack.OpMask};`
              compileRules(
                childPtrVar,
                childOpVar,
                nested[operand as Expr]!,
                Enable.Stats ? subMatch => buildStatName!(substituteMatch(match, operand as Expr, subMatch)) : null,
                reusableNodes,
                placeholderVars,
              )
            }
          }

          // Replace the root subtree with another subtree
          if (replace) {
            // Make sure to preserve the output stack slot of the root node in
            // case this expression isn't inlined and we need to emit an
            // assignment to that stack slot.
            if (Enable.Stats) code += `${recordStatsVar}(${JSON.stringify(buildStatName!(match))});`
            const replacePtr = constructReplacement(replace, placeholderVars, reusableNodes.slice(), `|${astVar}[${rootPtrVar}]&${~0 << Pack.OutSlotShift}`)

            // If we know how to optimize the resulting node, then return the
            // 2's complement of the node pointer to tell the caller to run the
            // optimizer again. This will cause a loop that will continue to
            // optimize the node until no further optimizations are made. We
            // don't call the current function ourselves as we don't have a
            // reference to it (since we're using "new Function" to make it).
            const optimizeAgain = typeof replace !== 'string' && (typeof replace[0] === 'string'
              ? oneOfOps[replace[0]]!.canBeOptimized_
              : opCanBeOptimized.has(replace[0]))
            code += 'return' + (optimizeAgain ? '~' : ' ') + replacePtr
          }
        })
      })
    }
  }

  const compileOnlyIf = (onlyIf: Check | undefined, placeholderVars: PlaceholderMap, then: () => void): void => {
    if (onlyIf) {
      const compileCheck = (onlyIf: Check): string => {
        if (typeof onlyIf === 'string') return `${constantsVar}[${placeholderVars[onlyIf] || placeholderExprs[onlyIf]}]`
        if (typeof onlyIf === 'bigint') return onlyIf + 'n'
        return `(${compileCheck(onlyIf[0])})${onlyIf[1]}(${compileCheck(onlyIf[2])})`
      }
      code += `if(${compileCheck(onlyIf)}){`
      then()
      code += '}'
    } else {
      then()
    }
  }

  const storePlaceholderExprToVar = (operand: Expr | Payload, placeholderVars: PlaceholderMap): void => {
    if (!(operand in placeholderVars)) {
      const childPtr = newVarName()
      code += `var ${childPtr}=${placeholderExprs[operand]};`
      placeholderVars[operand] = childPtr
    }
  }

  const constructReplacement = (replace: Replace | ReplacePayload, placeholderVars: PlaceholderMap, reusableNodes: ReusableNode[], outStackSlot = ''): string => {
    if (typeof replace === 'string') return placeholderVars[replace] || placeholderExprs[replace]!

    if (replace[0] === Edit.i64_to_i32) {
      const operand = constructReplacement(replace[1], placeholderVars, reusableNodes)
      return `Number(${constantsVar}[${operand}]&0xFFFFFFFFn)`
    }

    if (replace[0] === Edit.i32_add) {
      const operand1 = constructReplacement(replace[1], placeholderVars, reusableNodes)
      const operand2 = constructReplacement(replace[2], placeholderVars, reusableNodes)
      return `${operand1}+${operand2}`
    }

    if (replace[0] === Edit.i64_and) {
      const replace1 = replace[1]
      if (typeof replace1 === 'string') {
        // Store this because we'll use it twice
        storePlaceholderExprToVar(replace1, placeholderVars)
      }
      const operand1 = constructReplacement(replace1, placeholderVars, reusableNodes)
      const operand2 = constructReplacement(replace[2], placeholderVars, reusableNodes)
      code += `${constantsVar}[${operand1}]&=${constantsVar}[${operand2}];`
      return operand1
    }

    // Compute the value of the AST node itself
    const [op, ...operands] = replace
    const last = operands[operands.length - 1]
    const hasPayload = typeof last === 'string' ? last === 'P' || last === 'Q' : typeof last[0] !== 'string' && last[0] < 0
    const shiftedChildCount = (hasPayload ? operands.length - 1 : operands.length) << Pack.ChildCountShift

    // Try to reuse part of the old subtree for efficiency
    let bestScore = -1
    let bestIndex: number | undefined
    let newPtr: string | undefined
    let existingOperands: (Expr | Payload | null)[] | undefined
    for (let i = 0; i < reusableNodes.length; i++) {
      const reusableNode = reusableNodes[i]
      if (reusableNode.operands_.length === operands.length) {
        let score = 0
        for (let i = 0; i < operands.length; i++) {
          if (operands[i] === reusableNode.operands_[i]) {
            score++
          }
        }
        if (score > bestScore) {
          bestScore = score
          bestIndex = i
          newPtr = reusableNode.ptrVar_
          existingOperands = reusableNode.operands_
        }
      }
    }

    // Assign to the node itself
    if (typeof op === 'string' && oneOfOps[op]!.ptrVar_ === newPtr) {
      // The node that this opcode came from is being reused and that node's
      // opcode isn't changing because the replacement references the original
      // opcode. In that case, we don't need to reassign the node at all.
    } else {
      const node = (typeof op === 'string'
        ? `${oneOfOps[op]!.opVar_}|${shiftedChildCount}`
        : `${op | shiftedChildCount}`
      ) + outStackSlot
      if (newPtr) {
        // Handle when we can reuse an existing node
        reusableNodes.splice(bestIndex!, 1) // Take this node so we don't accidentally reuse the same node twice
        code += `${astVar}[${newPtr}]=${node};`
      } else {
        // Handle when we need to allocate a new node
        newPtr = newVarName()
        code += `var ${newPtr}=${allocateNode}(${node},${replace.length});`
      }
    }

    // Copy over the operands (but skip no-ops when reusing a node)
    for (let i = 0; i < operands.length; i++) {
      if (existingOperands && operands[i] !== existingOperands[i]) {
        const value = constructReplacement(operands[i], placeholderVars, reusableNodes)
        code += `${astVar}[${newPtr}+${i + 1}]=${value};`
      }
    }

    return newPtr
  }

  interface OneOfOp {
    ptrVar_: string
    opVar_: string
    canBeOptimized_: boolean
  }

  const placeholderExprs: PlaceholderMap = {}
  const oneOfOps: Partial<Record<OneOfWithoutPayload | OneOfWithPayload, OneOfOp>> = {}
  const recordStatsVar = newVarName()
  const astVar = newVarName()
  const constantsVar = newVarName()
  const allocateNode = newVarName()
  const rootPtrVar = newVarName()
  const rootOpVar = newVarName()
  const opCanBeOptimized = new Set<Op>()
  for (const { match_: [pattern] } of rules) {
    if (typeof pattern === 'number') {
      opCanBeOptimized.add(pattern)
    } else {
      const [, ...oneOf] = pattern
      for (const op of oneOf) opCanBeOptimized.add(op)
    }
  }
  let code = ''
  code += `var ${rootOpVar}=${astVar}[${rootPtrVar}]&${Pack.OpMask};`
  compileRules(rootPtrVar, rootOpVar, rules, Enable.Stats ? matchToStatName : null, [], {})
  code += 'return ' + rootPtrVar
  return Enable.Stats
    ? new Function(recordStatsVar, `return(${astVar},${constantsVar},${allocateNode},${rootPtrVar})=>{${code}}`)(recordStats)
    : new Function(astVar, constantsVar, allocateNode, rootPtrVar, code)
}

let stats: Record<string, number> | undefined
let statsTimeout = 0

const matchToStatName = ([pattern, ...operands]: Match): string => {
  let text = '['
  if (typeof pattern === 'number') {
    text += Op[pattern]
  } else {
    const [, ...oneOf] = pattern
    text += oneOf.map(op => Op[op]).join('|')
  }
  for (const operand of operands) text += ', ' + (typeof operand === 'string' ? operand : matchToStatName(operand))
  return text + ']'
}

const substituteMatch = ([pattern, ...operands]: Match, operand: Expr, replaceWith: Match): Match => {
  const result: any = [pattern]
  for (const x of operands) result.push(x === operand ? replaceWith : x)
  return result
}

const recordStats = (statName: string): void => {
  stats ||= {}
  stats[statName] = (stats[statName] || 0) + 1
  if (!statsTimeout) statsTimeout = setTimeout(() => {
    statsTimeout = 0
    console.log('stats:' + Object.keys(stats!).sort().map(x => `\n${x}: ${stats![x]}`).join(''))
  })
}
