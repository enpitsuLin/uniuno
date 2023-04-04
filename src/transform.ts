import kebabCase from 'kebab-case'
import { backgroundRules } from './rules/background'
import type { Rule, StandardProperties, StandardProperty } from './types'
import { borderRules, outlineRules } from './rules/border'
import { sizingRules } from './rules/sizing'
import { spacingRules } from './rules/spacing'

export const shortcutPropertiesRules: Rule[] = [
  ...backgroundRules,
  ...borderRules,
  ...outlineRules,
  ...sizingRules,
  ...spacingRules,
]

export function transformProperty<P extends StandardProperty>(
  property: P,
  value: StandardProperties[P],
): string {
  let ret: string | undefined
  shortcutPropertiesRules.some(([regexp, replaceTo]) => {
    const CSSValue = `${kebabCase(property)}: ${value}`

    if (CSSValue.match(regexp)) {
      if (replaceTo instanceof Error) {
        // log the error message and output empty
        console.error(replaceTo.message)
        ret = ''
      }
      else {
        // @ts-expect-error: as its overload but error
        ret = CSSValue.replace(regexp, replaceTo)
      }
    }

    return CSSValue.match(regexp)
  })
  if (typeof ret === 'undefined')
    return `${kebabCase(property)}-${value}`
  return ret
}
