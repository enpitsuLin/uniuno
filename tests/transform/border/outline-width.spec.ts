import { transformProperty } from '~/transform'

test('keyword values', () => {
  expect(transformProperty('outlineWidth', 'thin'))
    .toBe('outline-thin')

  expect(transformProperty('outlineWidth', 'medium'))
    .toBe('outline-medium')

  expect(transformProperty('outlineWidth', 'thick'))
    .toBe('outline-thick')
})

test('<length> values', () => {
  expect(transformProperty('outlineWidth', '1px'))
    .toBe('outline-1')

  expect(transformProperty('outlineWidth', '0.1em'))
    .toBe('outline-0.1em')
})
