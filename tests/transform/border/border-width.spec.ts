import { transformProperty } from '~/transform'
import type { Sides } from '~/types'
import { capitalize, directionMap } from '~/utils'

test('Shorthand with Keyword values', () => {
  expect(transformProperty('borderWidth', 'thin'))
    .toBe('border-thin')

  expect(transformProperty('borderWidth', 'medium'))
    .toBe('border-medium')

  expect(transformProperty('borderWidth', 'thick'))
    .toBe('border-thick')
})

test('Shorthand with <length> values', () => {
  expect(transformProperty('borderWidth', '4px'))
    .toBe('border-4px')

  expect(transformProperty('borderWidth', '1.2rem'))
    .toBe('border-1.2rem')

  expect(transformProperty('borderWidth', '2px 1.5rem'))
    .toBe('border-[length:2px_1.5rem]')

  expect(transformProperty('borderWidth', 'var(--border-width)'))
    .toBe('border-[length:$border-width]')
})

test('Longhand on every sides', () => {
  Object.entries(directionMap).forEach(([key, value]) => {
    const property = `border${capitalize(key)}Width` as `border${Capitalize<Sides>}Width`

    expect(transformProperty(property, 'thin'))
      .toBe(`border-${value}-thin`)

    expect(transformProperty(property, '0'))
      .toBe(`border-${value}-0`)

    expect(transformProperty(property, '1px'))
      .toBe(`border-${value}-1px`)

    expect(transformProperty(property, 'calc(1px + 1px)'))
      .toBe(`border-${value}-[length:calc(1px_+_1px)]`)
  })
})
