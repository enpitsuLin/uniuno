import type { DataType } from 'csstype'
import { transformProperty } from '~/transform'

const styles: DataType.LineStyle[] = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']

test('keyword values', () => {
  styles.forEach((style) => {
    expect(transformProperty('outlineStyle', style))
      .toBe(`outline-${style}`)
  })
})
