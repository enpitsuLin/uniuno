import { transformProperty } from '~/transform'

test('<time> values', () => {
  expect(transformProperty('transitionDelay', '200ms'))
    .toBe('delay-200ms')
  expect(transformProperty('transitionDelay', '800ms'))
    .toBe('delay-800ms')
  expect(transformProperty('transitionDelay', '1000ms'))
    .toBe('delay-1000ms')

  expect(transformProperty('transitionDelay', '2s'))
    .toBe('delay-2s')
  expect(transformProperty('transitionDelay', '.5s'))
    .toBe('delay-.5s')
  expect(transformProperty('transitionDelay', '1.2s'))
    .toBe('delay-1.2s')
})
