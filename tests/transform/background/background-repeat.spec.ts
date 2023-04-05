import { transformProperty } from '~/transform'

test('Keyword values', () => {
  expect(transformProperty('backgroundRepeat', 'repeat-x'))
    .toBe('bg-repeat-x')
  expect(transformProperty('backgroundRepeat', 'repeat-y'))
    .toBe('bg-repeat-y')
  expect(transformProperty('backgroundRepeat', 'repeat'))
    .toBe('bg-repeat')
  expect(transformProperty('backgroundRepeat', 'space'))
    .toBe('bg-repeat-space')
  expect(transformProperty('backgroundRepeat', 'round'))
    .toBe('bg-repeat-round')
  expect(transformProperty('backgroundRepeat', 'no-repeat'))
    .toBe('bg-no-repeat')
})

test.skip('Two-value syntax: horizontal | vertical', () => {
  expect(transformProperty('backgroundRepeat', 'repeat space'))
    .toBe('bg-[repeat_space]')
  expect(transformProperty('backgroundRepeat', 'repeat repeat'))
    .toBe('bg-[repeat_repeat]')
  expect(transformProperty('backgroundRepeat', 'round space'))
    .toBe('bg-[round_space]')
  expect(transformProperty('backgroundRepeat', 'no-repeat round'))
    .toBe('bg-[no-repeat_round]')
})
