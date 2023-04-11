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
    const matched = CSSValue.match(regexp)

    if (matched) {
      if (replaceTo instanceof Error) {
        // log the error message and output empty
        console.error(replaceTo.message)
        ret = ''
      }
      else {
        // eslint-disable-next-line max-statements-per-line
        if (typeof replaceTo === 'string') { ret = CSSValue.replace(regexp, replaceTo) }
        else {
          ret = CSSValue.replace(regexp, (substring, ...args: string[]) => {
            const replaced = replaceTo(substring, ...args)
            if (replaced instanceof Error) {
              console.error(replaced.message)
              return ''
            }
            return replaced
          })
        }
      }
    }

    return matched
  })
  if (typeof ret === 'undefined')
    return `${kebabCase(property)}-${value}`
  return ret
}
