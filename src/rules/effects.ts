import type { Rule } from '~/types'
import { bracketWithHint } from '~/utils'

export const boxShadowRules: Rule[] = [
  [/^box-shadow: (.+)$/, (_, p1) => `shadow-${bracketWithHint(p1)}`],
]

export const opacityRules: Rule[] = [
  [/^opacity: (\d{1,3})$/, (_, p1) => {
    if (p1.match(/^.+%$/))
      return `opacity-${p1}%`
    return `opacity-${p1 / 100}`
  }],
]

export const mixBlendModeRules: Rule[] = [
  [/^mix-blend-mode: (.+)$/, 'mix-blend-$1'],
]

export const backgroundBlendModeRules: Rule[] = [
  [/^background-blend-mode: (.+)$/, 'bg-blend-$1'],
]
