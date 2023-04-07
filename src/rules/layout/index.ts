import type { Rule } from '~/types'
import { parseLength } from '~/utils'

export * from './display'
export * from './columns'

export const aspectRatioRules: Rule[] = [
  [/^aspect-ratio: (.+)$/, (_, p1) => {
    const ratio = p1.replace(/ /g, '')
    if (ratio === '1/1')
      return 'aspect-square'
    if (ratio === '16/9')
      return 'aspect-video'
    return `aspect-${ratio}`
  }],
]

export const breakRules: Rule[] = [
  // there is no rules just kebabCase the property
]

export const boxDecorationBreakRules: Rule[] = [
  [/^box-decoration-break: (.+)$/, 'box-decoration-$1'],
]

export const boxSizingRules: Rule[] = [
  [/^box-sizing: (.+)-box$/, 'box-$1'],
]

export const floatRules: Rule[] = [
  // there is no rules just kebabCase the property
]

export const clearRules: Rule[] = [
  // there is no rules just kebabCase the property
]

export const isolationRules: Rule[] = [
  // there is no rules just kebabCase the property
]

export const overflowRules: Rule[] = [
  [/^overflow: ([\S]+)$/, 'overflow-$1'],
  [/^overflow: ([\S]+) ([\S]+)$/, 'overflow-x-$1 overflow-y-$2'],
]

export const objectFitRules: Rule[] = [
  [/^object-fit: (.+)$/, 'object-$1'],
]

export const objectPositionRules: Rule[] = [
  [/^object-position: (.+)$/, (_, p1) => {
    return `object-${p1.replace(' ', '-')}`
  }],
]

export const overscrollBehaviorRules: Rule[] = [
  [/^overscroll-behavior: ([\S]+)$/, 'overscroll-$1'],
  [/^overscroll-behavior: ([\S]+) ([\S]+)$/, 'overscroll-x-$1 overscroll-y-$2'],
]

export const positionRules: Rule[] = [
  [/^position: (.+)$/, '$1'],
]

export const positionedRules: Rule[] = [
  [/^(top|right|bottom|left): (-?)(.+)$/, (_, p1, p2, p3) => `${p2 === '' ? '' : '-'}${p1}-${parseLength(p3)}`],
]

export const visibilityRules: Rule[] = [
  [/^visibility: (.+)$/, '$1'],
]

export const zIndexRules: Rule[] = [
  [/^z-index: (-?)(\d+|auto)$/, (_, p1, p2) => `${p1 === '' ? '' : '-'}z-${p2}`],
]
