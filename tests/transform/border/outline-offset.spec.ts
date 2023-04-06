import { transformProperty } from '~/transform'

test('<length> values', () => {
  expect(transformProperty('outlineOffset', '3px'))
    .toBe('outline-offset-3px')

  expect(transformProperty('outlineOffset', '0.2em'))
    .toBe('outline-offset-0.2em')
})
