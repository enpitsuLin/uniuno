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
    .toBe('border-4')

  expect(transformProperty('borderWidth', '1.2rem'))
    .toBe('border-1.2rem')

  expect(transformProperty('borderWidth', '2px 1.5rem'))
    .toBe('border-[2px_1.5rem]')

  const spy = vi.spyOn(console, 'error')
  transformProperty('borderWidth', 'var(--border-width)')
  expect(spy).toHaveBeenCalledTimes(1)
})

test('Longhand on every sides', () => {
  Object.entries(directionMap).forEach(([key, value]) => {
    const property = `border${capitalize(key)}Width` as `border${Capitalize<Sides>}Width`

    expect(transformProperty(property, 'thin'))
      .toBe(`border-${value}-thin`)

    expect(transformProperty(property, '0'))
      .toBe(`border-${value}-0`)

    expect(transformProperty(property, '1px'))
      .toBe(`border-${value}-1`)

    expect(transformProperty(property, '1rem 1rem 1rem 1rem'))
      .toBe(`border-${value}-[width:1rem_1rem_1rem_1rem]`)
  })
})
