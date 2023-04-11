import type { Rule } from '~/types'
import { bracketWithHint } from '~/utils'

export const transitionPropertRules: Rule[] = [
  [/^transition-property: (.+)$/, (_, p1) => {
    if (p1.includes(','))
      return `transition-property-${bracketWithHint(p1)}`
    return `transition-property-${p1}`
  }],
]
