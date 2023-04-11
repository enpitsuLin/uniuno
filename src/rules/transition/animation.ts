import type { Rule } from '~/types'
import { bracketWithHint, timingFunctions } from '~/utils'

export const animationRules: Rule[] = [
  [/^animation: none$/, 'animate-none'],
  [/^animation: (.+)$/, (_, p1) => `animate-${bracketWithHint(p1)}`],
]

export const animationNameRules: Rule[] = [
  [/^animation-name: var\(--(.+)\)$/, (_, p1) => `animate-name-$${p1}`],
  [/^animation-name: (.+)/, 'animate-name-$1'],
]

export const animationDurationRules: Rule[] = [
  [/^animation-duration: var\(--(.+)\)$/, (_, p1) => `animate-duration-$${p1}`],
  [/^animation-duration: (.+)/, 'animate-duration-$1'],
]

export const animationDelayRules: Rule[] = [
  [/^animation-delay: var\(--(.+)\)$/, (_, p1) => `animate-delay-$${p1}`],
  [/^animation-delay: (.+)/, 'animate-delay-$1'],
]

export const animationEaseRules: Rule[] = [
  [/^animation-timing-function: (.+)/, (_, p1) => {
    if (timingFunctions.includes(p1)) {
      if (p1 === 'linear')
        return 'animate-ease-linear'
      return `animate-${p1}`
    }
    return `animate-ease-${bracketWithHint(p1)}`
  }],
]

export const animationFillModeRules: Rule[] = [
  [/^animation-fill-mode: (.+)$/, 'animate-fill-mode-$1'],
]
