import { transformProperty } from '~/transform'

test('single value', () => {
  expect(transformProperty('transitionProperty', 'none'))
    .toBe('transition-property-none')

  expect(transformProperty('transitionProperty', 'all'))
    .toBe('transition-property-all')

  expect(transformProperty('transitionProperty', 'opacity'))
    .toBe('transition-property-opacity')

  expect(transformProperty('transitionProperty', 'box-shadow'))
    .toBe('transition-property-box-shadow')

  expect(transformProperty('transitionProperty', 'transform'))
    .toBe('transition-property-transform')
})

test('multiple value', () => {
  expect(transformProperty('transitionProperty', 'color, background-color'))
    .toBe('transition-property-[color,_background-color]')

  expect(transformProperty('transitionProperty', 'outline-color, border-color'))
    .toBe('transition-property-[outline-color,_border-color]')

  expect(transformProperty('transitionProperty', 'fill, stroke'))
    .toBe('transition-property-[fill,_stroke]')
})
