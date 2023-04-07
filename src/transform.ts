import kebabCase from 'kebab-case'
import type { CSSProperties, CSSProperty } from './types'
import rules from '~/rules'

export function transformProperty<P extends CSSProperty>(
  property: P,
  value: CSSProperties[P],
): string {
  let ret: string | undefined
  if (property.match(/^(Webkit|Moz)/)) {
    console.error('vendor property not support')
    return ''
  }
  rules.some(([regexp, replaceTo]) => {
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
