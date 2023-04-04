import { transformProperty } from './transform'
import type { CSSProperties, CSSProperty } from './types'

export function propertiesToUnocss(css: CSSProperties): string {
  return Object.entries(css)
    .map(([property, value]) =>
      transformProperty(property as CSSProperty, value),
    )
    .join(' ')
}
