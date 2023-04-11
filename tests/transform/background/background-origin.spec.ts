import { transformProperty } from '~/transform'

test('Keyrod values', () => {
  expect(transformProperty('backgroundOrigin', 'border-box'))
    .toBe('bg-origin-border')

  expect(transformProperty('backgroundOrigin', 'padding-box'))
    .toBe('bg-origin-padding')

  expect(transformProperty('backgroundOrigin', 'content-box'))
    .toBe('bg-origin-content')
})
