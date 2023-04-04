import camelCase from 'camelcase'
import type { Rule } from '../types'
import { bracketWithHint, directionMap } from '../utils'

export const spacingRules: Rule[] = [
  // padding
  [
    /^padding-?(-?.+)?: (.+)$/,
    (_, p1, p2: string) => {
      if (p1) {
        const direction = directionMap[camelCase(p1)]
        if (p2.includes(' '))
          return `p-${direction}-${bracketWithHint(p2)}`
        return `p-${direction}-${p2}`
      }
      if (p2.includes(' '))
        return `p-${bracketWithHint(p2)}`
      return `p-${p2}`
    },
  ],

  // margin
  [
    /^margin?(-?.+)?: (.+)$/,
    (_, p1, p2: string) => {
      if (p1) {
        const direction = directionMap[camelCase(p1)]
        if (p2.includes(' '))
          return `m-${direction}-${bracketWithHint(p2)}`
        return `m-${direction}-${p2}`
      }
      if (p2.includes(' '))
        return `m-${bracketWithHint(p2)}`
      return `m-${p2}`
    },
  ],
]
