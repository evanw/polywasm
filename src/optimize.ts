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

type Match =
  | [OpWithoutPayload | OpWithoutPayload[], ...(Match | Expr)[]]
  | [OpWithPayload | OpWithPayload[], ...(Match | Expr)[], Payload]

type Replace =
  | Expr
  | [OpWithoutPayload, ...Replace[]]
  | [OpWithPayload, ...Replace[], ReplacePayload]

const enum Edit {
  i64_to_i32 = -1,
  i64_and = -2,
}

type ReplacePayload =
  | Payload
  | [Edit.i64_to_i32, ReplacePayload]
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
          match_: [[Op.i64_load8_s, Op.i64_load8_u, Op.i64_load16_s, Op.i64_load16_u, Op.i64_load32_s, Op.i64_load32_u, Op.i64_load], 'z', 'Q'],
          replace_: [Op.i32_store8, 'x', [Op.i32_load8_u, 'z', 'Q'], 'P'],
        },
        {
          match_: [[Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'z'],
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
          match_: [[Op.i64_load16_s, Op.i64_load16_u, Op.i64_load32_s, Op.i64_load32_u, Op.i64_load], 'z', 'Q'],
          replace_: [Op.i32_store16, 'x', [Op.i32_load16_u, 'z', 'Q'], 'P'],
        },
        {
          match_: [[Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'z'],
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
          match_: [[Op.i64_load32_s, Op.i64_load32_u, Op.i64_load], 'z', 'Q'],
          replace_: [Op.i32_store, 'x', [Op.i32_load, 'z', 'Q'], 'P'],
        },
        {
          match_: [[Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'z'],
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
          match_: [[Op.i64_load8_s, Op.i64_load8_u], 'y', 'P'],
          replace_: [Op.i32_eqz, [Op.i32_load8_u, 'y', 'P']],
        },
        {
          match_: [[Op.i64_load16_s, Op.i64_load16_u], 'y', 'P'],
          replace_: [Op.i32_eqz, [Op.i32_load16_u, 'y', 'P']],
        },
        {
          match_: [[Op.i64_load32_s, Op.i64_load32_u], 'y', 'P'],
          replace_: [Op.i32_eqz, [Op.i32_load, 'y', 'P']],
        },
        {
          match_: [[Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'y'],
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
          match_: [[Op.i64_load32_s, Op.i64_load32_u, Op.i64_load], 'y', 'P'],
          replace_: [Op.i32_load, 'y', 'P'],
        },
        {
          match_: [[Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'y'],
          replace_: 'y',
        },
        {
          match_: [Op.i64_add, [[Op.i64_extend_i32_s, Op.i64_extend_i32_u], 'y'], [Op.i64_const, 'P']],
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
const compileRules = (): (ast: Int32Array, constants: bigint[], allocateNode: (node: number, length: number) => number, ptr: number) => number => {
  interface ReusableNode {
    ptr_: string
    operands_: (Expr | Payload | null)[]
  }

  let nextVar = 0
  const newVarName = () => 'v' + nextVar++

  const compileOperand = (ptr: string, index: number, operands: (Match | Expr | Payload)[], reusableNodes: ReusableNode[], then: (reusableNodes: ReusableNode[]) => void): void => {
    if (index < operands.length) {
      const operand = operands[index]
      if (typeof operand === 'string') {
        placeholderExprs[operand] = `${ast}[${ptr}+${index + 1}]`
        compileOperand(ptr, index + 1, operands, reusableNodes, then)
      } else {
        const childPtr = newVarName()
        const childOp = newVarName()
        code += `var ${childPtr}=${ast}[${ptr}+${index + 1}],${childOp}=${ast}[${childPtr}]&${Pack.OpMask};`
        compileMatch(childPtr, childOp, operand, reusableNodes, reusableNodes => {
          compileOperand(ptr, index + 1, operands, reusableNodes, then)
        })
      }
    } else {
      then(reusableNodes)
    }
  }

  const compileMatch = (ptr: string, op: string, [pattern, ...operands]: Match, reusableNodes: ReusableNode[], then: (reusableNodes: ReusableNode[]) => void): void => {
    const sorted = (typeof pattern === 'number' ? [pattern] : pattern).sort((a, b) => a - b)
    const parts: string[] = []

    // Collapse runs of nodes into range expressions
    for (let i = 0; i < sorted.length; i++) {
      let run = 1
      while (i + run < sorted.length && sorted[i + run - 1] + 1 === sorted[i + run]) run++
      parts.push(run > 2 ? `${op}>=${sorted[i]}&&${op}<=${sorted[i += run - 1]}` : `${op}===${sorted[i]}`)
    }

    // Remember this node so we can possibly reuse it later
    reusableNodes = reusableNodes.concat({
      ptr_: ptr,
      operands_: operands.map(x => typeof x === 'string' ? x : null),
    })

    code += `if(${parts.join('||')}){`
    compileOperand(ptr, 0, operands, reusableNodes, then)
    code += '}'
  }

  const compileRules = (ptr: string, op: string, rules: Rule[], reusableNodes: ReusableNode[], placeholderVarsFromParent: Partial<Record<Expr | Payload, string>>): void => {
    for (const { match_: match, nested_: nested, replace_: replace, onlyIf_: onlyIf } of rules) {
      compileMatch(ptr, op, match, reusableNodes, reusableNodes => {
        const placeholderVars: Partial<Record<Expr | Payload, string>> = Object.create(placeholderVarsFromParent)

        compileOnlyIf(onlyIf, placeholderVars, () => {
          // Handle nested rules
          if (nested) {
            for (const operand in nested) {
              // Store this because we'll use it multiple times
              storePlaceholderExprToVar(operand as Expr, placeholderVars)
            }
            for (const operand in nested) {
              const childPtr = placeholderVars[operand as Expr]!
              const childOp = newVarName()
              code += `var ${childOp}=${ast}[${childPtr}]&${Pack.OpMask};`
              compileRules(childPtr, childOp, nested[operand as Expr]!, reusableNodes, placeholderVars)
            }
          }

          // Replace the root subtree with another subtree
          if (replace) {
            // Make sure to preserve the output stack slot of the root node in
            // case this expression isn't inlined and we need to emit an
            // assignment to that stack slot.
            const replacePtr = constructReplacement(replace, placeholderVars, reusableNodes.slice(), `|${ast}[${rootPtr}]&${~0 << Pack.OutSlotShift}`)
            code += 'return ' + replacePtr
          }
        })
      })
    }
  }

  const compileOnlyIf = (onlyIf: Check | undefined, placeholderVars: Partial<Record<Expr | Payload, string>>, then: () => void): void => {
    if (onlyIf) {
      const compileCheck = (onlyIf: Check): string => {
        if (typeof onlyIf === 'string') return `${constants}[${placeholderVars[onlyIf] || placeholderExprs[onlyIf]}]`
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

  const storePlaceholderExprToVar = (operand: Expr | Payload, placeholderVars: Partial<Record<Expr | Payload, string>>): void => {
    if (!(operand in placeholderVars)) {
      const childPtr = newVarName()
      code += `var ${childPtr}=${placeholderExprs[operand]};`
      placeholderVars[operand] = childPtr
    }
  }

  const constructReplacement = (replace: Replace | ReplacePayload, placeholderVars: Partial<Record<Expr | Payload, string>>, reusableNodes: ReusableNode[], outStackSlot = ''): string => {
    if (typeof replace === 'string') return placeholderVars[replace] || placeholderExprs[replace]!

    if (replace[0] === Edit.i64_and) {
      const replace1 = replace[1]
      if (typeof replace1 === 'string') {
        // Store this because we'll use it twice
        storePlaceholderExprToVar(replace1, placeholderVars)
      }
      const operand1 = constructReplacement(replace1, placeholderVars, reusableNodes)
      const operand2 = constructReplacement(replace[2], placeholderVars, reusableNodes)
      code += `${constants}[${operand1}]&=${constants}[${operand2}];`
      return operand1
    }

    if (replace[0] === Edit.i64_to_i32) {
      const operand = constructReplacement(replace[1], placeholderVars, reusableNodes)
      return `Number(${constants}[${operand}]&0xFFFFFFFFn)`
    }

    // Compute the value of the AST node itself
    const [op, ...operands] = replace
    const last = operands[operands.length - 1]
    const hasPayload = typeof last === 'string' ? last === 'P' || last === 'Q' : last[0] < 0
    const childCount = hasPayload ? operands.length - 1 : operands.length
    const astNode = `${op | (childCount << Pack.ChildCountShift)}${outStackSlot}`

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
          newPtr = reusableNode.ptr_
          existingOperands = reusableNode.operands_
        }
      }
    }
    if (newPtr) {
      reusableNodes.splice(bestIndex!, 1) // Take this node so we don't accidentally reuse the same node twice
      code += `${ast}[${newPtr}]=${astNode};`
    } else {
      newPtr = newVarName()
      code += `var ${newPtr}=${allocateNode}(${astNode},${replace.length});`
    }
    for (let i = 0; i < operands.length; i++) {
      if (existingOperands && operands[i] !== existingOperands[i]) {
        const value = constructReplacement(operands[i], placeholderVars, reusableNodes)
        code += `${ast}[${newPtr}+${i + 1}]=${value};`
      }
    }
    return newPtr
  }

  const placeholderExprs: Partial<Record<Expr | Payload, string>> = {}
  const ast = newVarName()
  const constants = newVarName()
  const allocateNode = newVarName()
  const rootPtr = newVarName()
  const rootOp = newVarName()
  let code = ''
  code += `var ${rootOp}=${ast}[${rootPtr}]&${Pack.OpMask};`
  compileRules(rootPtr, rootOp, rules, [], {})
  code += 'return ' + rootPtr
  return new Function(ast, constants, allocateNode, rootPtr, code) as any
}

export const optimizeNode = compileRules()
