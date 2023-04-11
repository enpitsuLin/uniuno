import type { Rule } from '~/types'
import { bracketWithHint } from '~/utils'

const functionTypes = ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end']

export const transitionPropertRules: Rule[] = [
  [/^transition-property: (.+)$/, (_, p1) => {
    if (p1.includes(','))
      return `transition-property-${bracketWithHint(p1)}`
    return `transition-property-${p1}`
  }],
]

export const transitionDurationRules: Rule[] = [
  [/^transition-duration: (.+)$/, 'duration-$1'],
]

export const transitionTimingFunctionRules: Rule[] = [
  [/^transition-timing-function: (.+)$/, (_, p1) => {
    if (functionTypes.includes(p1)) {
      if (p1 === 'linear')
        return 'ease-linear'
      return p1
    }
    return `ease-${bracketWithHint(p1)}`
  }],
]
