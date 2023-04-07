import type { Rule } from '~/types'

export const displayRules: Rule[] = [
  [/^display: none$/, 'hidden'],
  [/^display: (.+)$/, '$1'],
]
