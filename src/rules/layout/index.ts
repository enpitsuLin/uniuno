import type { Rule } from '~/types'

export * from './display'

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
  [/^overflow: (.+)$/, (_, p1) => {
    if (p1.match(/ /)) {
      const [x, y] = p1.split(' ')
      return `overflow-x-${x} overflow-y-${y}`
    }
    return `overflow-${p1}`
  }],
]

export const objectFitRules: Rule[] = [
  [/^object-fit: (.+)$/, 'object-$1'],
]

export const objectPositionRules: Rule[] = [
  [/^object-position: (.+)$/, (_, p1) => {
    return `object-${p1.replace(' ', '-')}`
  }],
]
