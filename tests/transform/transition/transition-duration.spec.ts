import { transformProperty } from '~/transform'

test('<time> values', () => {
  expect(transformProperty('transitionDuration', '200ms'))
    .toBe('duration-200ms')
  expect(transformProperty('transitionDuration', '800ms'))
    .toBe('duration-800ms')
  expect(transformProperty('transitionDuration', '1000ms'))
    .toBe('duration-1000ms')

  expect(transformProperty('transitionDuration', '2s'))
    .toBe('duration-2s')
  expect(transformProperty('transitionDuration', '.5s'))
    .toBe('duration-.5s')
  expect(transformProperty('transitionDuration', '1.2s'))
    .toBe('duration-1.2s')
})
