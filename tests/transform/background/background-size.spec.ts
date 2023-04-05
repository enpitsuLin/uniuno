import { transformProperty } from '~/transform'

test('Keyword value', () => {
  expect(transformProperty('backgroundSize', 'cover'))
    .toBe('bg-cover')

  expect(transformProperty('backgroundSize', 'contain'))
    .toBe('bg-contain')
})

test('One-value syntax ', () => {
  expect(transformProperty('backgroundSize', '50%'))
    .toBe('bg-50%')

  expect(transformProperty('backgroundSize', '3.2em'))
    .toBe('bg-3.2em')

  expect(transformProperty('backgroundSize', '12px'))
    .toBe('bg-12px')

  expect(transformProperty('backgroundSize', 'auto'))
    .toBe('bg-auto')
})

test('Two-value syntax', () => {
  expect(transformProperty('backgroundSize', '50% auto'))
    .toBe('bg-[length:50%_auto]')

  expect(transformProperty('backgroundSize', '3em 25%'))
    .toBe('bg-[length:3em_25%]')
})

// which unocss doesn't support right now
test.skip('Multiple backgrounds', () => {
  expect(transformProperty('backgroundSize', 'auto, auto'))
    .toBe('bg-[length:auto,auto]')
})
