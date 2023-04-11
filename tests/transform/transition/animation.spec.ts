import { transformProperty } from '~/transform'

test('keyword values', () => {
  expect(transformProperty('animation', 'none'))
    .toBe('animate-none')
})

test('full syntax value', () => {
  // `@keyframes duration | easing-function | delay | iteration-count | direction | fill-mode | play-state | name`
  expect(transformProperty('animation', '3s ease-in 1s 2 reverse both paused slidein'))
    .toBe('animate-[3s_ease-in_1s_2_reverse_both_paused_slidein]')
})

test('less properties value', () => {
  // `@keyframes duration | easing-function | delay | name`
  expect(transformProperty('animation', '3s linear 1s slidein'))
    .toBe('animate-[3s_linear_1s_slidein]')
})
