import camelCase from 'camelcase'
import type { Rule } from '~/types'
import { bracketWithHint, cornersMap, directionMap, parseColor, parseLength } from '~/utils'

export const borderRules: Rule[] = [
  // border-radius
  [/^border-radius: var\(--(.+)\)$/, (_, p1) => `rounded-$${p1}`],
  [
    /^border-radius: (.+)$/,
    (_, p1) => {
      if (p1 === '9999px')
        return 'rounded-full'
      if (p1 === '0')
        return 'rounded-none'
      if (p1.includes(' '))
        return `rounded-${bracketWithHint(p1)}`
      return `rounded-${p1}`
    },
  ],
  [
    /^border-(.+)-radius: var\(--(.+)\)$/,
    (_, p1, p2) => {
      const corner = cornersMap[camelCase(p1)]
      return `rounded-${corner}-$${p2}`
    },
  ],
  [
    /^border-(.+)-radius: (.+)$/,
    (_, p1, p2) => {
      const corner = cornersMap[camelCase(p1)]
      if (p2 === '9999px')
        return `rounded-${corner}-full`
      if (p2 === '0')
        return `rounded-${corner}-none`
      if (p2.includes(' '))
        return `rounded-${corner}-${bracketWithHint(p2)}`
      return `rounded-${corner}-${p2}`
    },
  ],

  // border-width
  [
    /^border-width: var\(--(.+)\)$/,
    (_, p1) => `border-[length:$${p1}]`,
  ],
  [
    /^border-width: (.+)$/,
    (_, p1) => {
      const ret = `border-${parseLength(p1, 'length')}`
      return ret
    },
  ],
  [
    /^border-(.+)-width: (.+)$/,
    (_, p1, p2) => {
      const direction = directionMap[camelCase(p1)]
      if (p2.includes(' '))
        return `border-${direction}-${bracketWithHint(p2, 'length')}`
      return `border-${direction}-${p2}`
    },
  ],

  // border-color
  [/^border-color: var\(--(.+)\)$/, (_, p1) => `border-$${p1}`],
  [/^border-color: (.+)$/, (_, p1) => `border-${parseColor(p1)}`],
  [
    /^border-(.+)-color: var\(--(.+)\)$/,
    (_, p1, p2) => {
      const direction = directionMap[camelCase(p1)]
      return `border-${direction}-$${p2}`
    },
  ],
  [
    /^border-(.+)-color: (.+)$/,
    (_, p1, p2) => {
      const direction = directionMap[camelCase(p1)]
      return `border-${direction}-${parseColor(p2)}`
    },
  ],

  // border-style
  [/^border-style: (.+)$/, 'border-$1'],
  [
    /^border-(.+)-style: (.+)$/,
    (_, p1, p2) => {
      const direction = directionMap[camelCase(p1)]
      return `border-${direction}-${p2}`
    },
  ],
]
