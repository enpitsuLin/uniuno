import { transformProperty } from '~/transform'

test('<alpha-value> value', () => {
  expect(transformProperty('opacity', '0'))
    .toBe('opacity-0')

  expect(transformProperty('opacity', '5'))
    .toBe('opacity-0.05')

  expect(transformProperty('opacity', '55'))
    .toBe('opacity-0.55')

  expect(transformProperty('opacity', '100'))
    .toBe('opacity-1')
})

test('<percentage> value', () => {
  expect(transformProperty('opacity', '0%'))
    .toBe('opacity-0%')

  expect(transformProperty('opacity', '5%'))
    .toBe('opacity-5%')

  expect(transformProperty('opacity', '55%'))
    .toBe('opacity-55%')

  expect(transformProperty('opacity', '100%'))
    .toBe('opacity-100%')
})
