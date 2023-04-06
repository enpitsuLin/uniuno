import { transformProperty } from '~/transform'
import type { Sides } from '~/types'
import { capitalize, directionMap } from '~/utils'

test('Shorthand with <color> values', () => {
  expect(transformProperty('borderColor', 'red'))
    .toBe('border-red')

  expect(transformProperty('borderColor', '#f015ca'))
    .toBe('border-#f015ca')

  expect(transformProperty('borderColor', 'rgb(255,255,255)'))
    .toBe('border-[rgb(255,255,255)]')
})

test('Longhand with <color> values on every sides', () => {
  Object.entries(directionMap).forEach(([key, value]) => {
    const property = `border${capitalize(key)}Color` as `border${Capitalize<Sides>}Color`

    expect(transformProperty(property, 'red'))
      .toBe(`border-${value}-red`)

    expect(transformProperty(property, '#f015ca'))
      .toBe(`border-${value}-#f015ca`)

    expect(transformProperty(property, 'rgb(255,255,255)'))
      .toBe(`border-${value}-[rgb(255,255,255)]`)
  })
})
