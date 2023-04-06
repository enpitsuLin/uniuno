import { transformProperty } from '~/transform'
import type { Sides } from '~/types'
import { capitalize, directionMap } from '~/utils'

test('Shorthand with <length> values', () => {
  expect(transformProperty('padding', '1px'))
    .toBe('p-1px')

  expect(transformProperty('padding', '1rem'))
    .toBe('p-1rem')

  expect(transformProperty('padding', '1rem 1rem'))
    .toBe('p-[1rem_1rem]')
})

test('Shorthand with precentage values', () => {
  expect(transformProperty('padding', '5%'))
    .toBe('p-5%')

  expect(transformProperty('padding', '10%'))
    .toBe('p-10%')

  expect(transformProperty('padding', '5% 10%'))
    .toBe('p-[5%_10%]')
})

test('Longhand with <length> values', () => {
  Object.entries(directionMap).forEach(([key, value]) => {
    const property = `padding${capitalize(key)}` as `padding${Capitalize<Sides>}`

    expect(transformProperty(property, '1px'))
      .toBe(`p-${value}-1px`)

    expect(transformProperty(property, '1rem'))
      .toBe(`p-${value}-1rem`)

    expect(transformProperty(property, '1rem 1rem'))
      .toBe(`p-${value}-[1rem_1rem]`)
  })
})

test('Longhand with precentage values', () => {
  Object.entries(directionMap).forEach(([key, value]) => {
    const property = `padding${capitalize(key)}` as `padding${Capitalize<Sides>}`

    expect(transformProperty(property, '5%'))
      .toBe(`p-${value}-5%`)

    expect(transformProperty(property, '10%'))
      .toBe(`p-${value}-10%`)

    expect(transformProperty(property, '5% 10%'))
      .toBe(`p-${value}-[5%_10%]`)
  })
})
