import type { Rule } from '~/types'
import { parseColor, parseLength } from '~/utils'

export const outlineRules: Rule[] = [
  // outline-width
  [
    /^outline-width: (.+)$/,
    (_, p1) => `outline-${parseLength(p1)}`,
  ],

  // outline-color
  [/^outline-color: (.+)$/, (_, p1) => `outline-${parseColor(p1)}`],

  // outline-style
  [/^outline-style: (.+)$/, 'outline-$1'],

  // outline-offset
  [/^outline-offset: (.+)$/, 'outline-offset-$1'],
]
