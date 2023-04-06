import type { DataType } from 'csstype'
import { transformProperty } from '~/transform'
import type { Sides } from '~/types'
import { capitalize, directionMap } from '~/utils'

const styles: DataType.LineStyle[] = ['none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset']

test('Shorthand with keyword values', () => {
  styles.forEach((style) => {
    expect(transformProperty('borderStyle', style))
      .toBe(`border-${style}`)
  })
})

test('Longhand with keyword values on every sides', () => {
  Object.entries(directionMap).forEach(([key, value]) => {
    const property = `border${capitalize(key)}Style` as `border${Capitalize<Sides>}Style`

    styles.forEach((style) => {
      expect(transformProperty(property, style))
        .toBe(`border-${value}-${style}`)
    })
  })
})
