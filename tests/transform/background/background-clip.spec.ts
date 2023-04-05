import { transformProperty } from '~/transform'

test('Keyword value', () => {
  expect(transformProperty('backgroundClip', 'border-box'))
    .toBe('bg-clip-border')

  expect(transformProperty('backgroundClip', 'padding-box'))
    .toBe('bg-clip-padding')

  expect(transformProperty('backgroundClip', 'content-box'))
    .toBe('bg-clip-content')

  expect(transformProperty('backgroundClip', 'text'))
    .toBe('bg-clip-text')
})
