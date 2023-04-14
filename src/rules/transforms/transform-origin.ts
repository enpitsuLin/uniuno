import type { Rule } from '~/types'
import { bracketWithHint } from '~/utils'

export const transformOriginRules: Rule[] = [
  [/^transform-origin: (.+)$/, (_, p1) => {
    const args = p1.split(' ')
    if (args.every(item => ['left', 'right', 'top', 'bottom', 'center'].includes(item))) {
      const dir = args.map(i => i.substring(0, 1)).join('')
      return `transform-origin-${dir}`
    }
    return `transform-origin-${bracketWithHint(p1)}`
  }],
]
