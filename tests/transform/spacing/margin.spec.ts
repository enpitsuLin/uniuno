import { transformProperty } from '~/transform'
import type { Sides } from '~/types'
import { capitalize, directionMap } from '~/utils'

test('Shorthand with <length> values', () => {
  expect(transformProperty('margin', '1px'))
    .toBe('m-1px')

  expect(transformProperty('margin', '1rem'))
    .toBe('m-1rem')

  expect(transformProperty('margin', '1rem 1rem'))
    .toBe('m-[1rem_1rem]')
})

test('Shorthand with precentage values', () => {
  expect(transformProperty('margin', '5%'))
    .toBe('m-5%')

  expect(transformProperty('margin', '10%'))
    .toBe('m-10%')

  expect(transformProperty('margin', '5% 10%'))
    .toBe('m-[5%_10%]')
})

test('Longhand with <length> values', () => {
  Object.entries(directionMap).forEach(([key, value]) => {
    const property = `margin${capitalize(key)}` as `margin${Capitalize<Sides>}`

    expect(transformProperty(property, '1px'))
      .toBe(`m-${value}-1px`)

    expect(transformProperty(property, '1rem'))
      .toBe(`m-${value}-1rem`)

    expect(transformProperty(property, '1rem 1rem'))
      .toBe(`m-${value}-[1rem_1rem]`)
  })
})

test('Longhand with precentage values', () => {
  Object.entries(directionMap).forEach(([key, value]) => {
    const property = `margin${capitalize(key)}` as `margin${Capitalize<Sides>}`

    expect(transformProperty(property, '5%'))
      .toBe(`m-${value}-5%`)

    expect(transformProperty(property, '10%'))
      .toBe(`m-${value}-10%`)

    expect(transformProperty(property, '5% 10%'))
      .toBe(`m-${value}-[5%_10%]`)
  })
})
