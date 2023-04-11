import { transformProperty } from '~/transform'

test('single animation', () => {
  expect(transformProperty('animationName', 'none'))
    .toBe('animate-name-none')
  expect(transformProperty('animationName', 'test_05'))
    .toBe('animate-name-test_05')
  expect(transformProperty('animationName', '-specific'))
    .toBe('animate-name--specific')
  expect(transformProperty('animationName', 'sliding-vertically'))
    .toBe('animate-name-sliding-vertically')

  expect(transformProperty('animationName', 'var(--name)'))
    .toBe('animate-name-$name')
})
