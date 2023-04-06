import kebabCase from 'kebab-case'
import { backgroundRules } from './rules/background'
import type { CSSProperties, CSSProperty, Rule } from './types'
import { borderRules, outlineRules } from './rules/border'
import { sizingRules } from './rules/sizing'
import { spacingRules } from './rules/spacing'
import { tablesRules } from './rules/tables'

export const shortcutPropertiesRules: Rule[] = [
  ...backgroundRules,
  ...borderRules,
  ...outlineRules,
  ...sizingRules,
  ...spacingRules,
  ...tablesRules,
]

export function transformProperty<P extends CSSProperty>(
  property: P,
  value: CSSProperties[P],
): string {
  let ret: string | undefined
  shortcutPropertiesRules.some(([regexp, replaceTo]) => {
    const CSSValue = `${kebabCase(property)}: ${value}`

    if (property.match(/Webkit|Moz/)) {
      console.error('vendor property not support')
      return ''
    }

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
