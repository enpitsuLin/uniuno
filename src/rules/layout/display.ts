import type { Rule } from '~/types'
import { bracketWithHint } from '~/utils'

export const displayRules: Rule[] = [
  [/^display: none$/, 'hidden'],
  [/^display: (.+)$/, (_, p1) => {
    if (p1.includes(' '))
      return `display-${bracketWithHint(p1)}`
    return p1
  }],
]
