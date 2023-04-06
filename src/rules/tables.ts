import type { Rule } from '~/types'

export const tablesRules: Rule[] = [
  // border-collapse
  [/^border-collapse: (.+)$/, 'border-$1'],

  // border-spacing
  [/^border-spacing: (.+)$/, (_, p1) => {
    const [x, y] = p1.match(/\w+\([^\)]+\)|[^\s]+/g)
    if (x && y)
      return `border-spacing-x-${x} border-spacing-y-${y}`
    return `border-spacing-${x}`
  }],

  // table-layout
  [/^table-layout: (.+)$/, 'table-$1'],

  // caption-side
  [/^caption-side: (.+)$/, 'caption-$1'],
]
