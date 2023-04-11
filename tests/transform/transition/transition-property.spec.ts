import { transformProperty } from '~/transform'

test('single value', () => {
  expect(transformProperty('transitionProperty', 'none'))
    .toBe('transition-none')

  expect(transformProperty('transitionProperty', 'all'))
    .toBe('transition-all')

  expect(transformProperty('transitionProperty', 'opacity'))
    .toBe('transition-opacity')

  expect(transformProperty('transitionProperty', 'box-shadow'))
    .toBe('transition-shadow')

  expect(transformProperty('transitionProperty', 'transform'))
    .toBe('transition-transform')
})

describe('multiple value', () => {
  it('transition-property value more than two and both are colors', () => {
    expect(transformProperty('transitionProperty', 'color, background-color'))
      .toBe('transition-colors')

    expect(transformProperty('transitionProperty', 'outline-color, border-color'))
      .toBe('transition-colors')

    expect(transformProperty('transitionProperty', 'fill, stroke'))
      .toBe('transition-colors')
  })

  it('transition-property value more than two and both are default properties', () => {
    expect(transformProperty('transitionProperty', 'color, box-shadow'))
      .toBe('transition')

    expect(transformProperty('transitionProperty', 'color, background-color, opacity'))
      .toBe('transition')

    expect(transformProperty('transitionProperty', 'fill, filter, transform'))
      .toBe('transition')
  })
})
