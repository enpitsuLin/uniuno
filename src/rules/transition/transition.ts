import type { Rule } from '~/types'
import { bracketWithHint, timingFunctions } from '~/utils'

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
    if (timingFunctions.includes(p1)) {
      if (p1 === 'linear')
        return 'ease-linear'
      return p1
    }
    return `ease-${bracketWithHint(p1)}`
  }],
]

export const transitionDelayRules: Rule[] = [
  [/^transition-delay: (.+)$/, 'delay-$1'],
]
