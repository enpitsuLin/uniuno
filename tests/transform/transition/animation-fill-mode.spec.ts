import { transformProperty } from '~/transform'

test('single values', () => {
  expect(transformProperty('animationFillMode', 'none'))
    .toBe('animate-fill-mode-none')
  expect(transformProperty('animationFillMode', 'forwards'))
    .toBe('animate-fill-mode-forwards')
  expect(transformProperty('animationFillMode', 'backwards'))
    .toBe('animate-fill-mode-backwards')
  expect(transformProperty('animationFillMode', 'both'))
    .toBe('animate-fill-mode-both')
})
