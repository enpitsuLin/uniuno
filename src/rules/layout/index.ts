import type { Rule } from '~/types'

export * from './display'

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
