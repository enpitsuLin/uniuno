import { transformProperty } from '~/transform'

test('keyword values', () => {
  expect(transformProperty('animationTimingFunction', 'ease'))
    .toBe('animate-ease')
  expect(transformProperty('animationTimingFunction', 'ease-in'))
    .toBe('animate-ease-in')
  expect(transformProperty('animationTimingFunction', 'ease-out'))
    .toBe('animate-ease-out')
  expect(transformProperty('animationTimingFunction', 'ease-in-out'))
    .toBe('animate-ease-in-out')
  expect(transformProperty('animationTimingFunction', 'linear'))
    .toBe('animate-ease-linear')

  it.skip('NOT in unocss', () => {
    expect(transformProperty('animationTimingFunction', 'step-start'))
      .toBe('animate-ease-step-start')
    expect(transformProperty('animationTimingFunction', 'step-end'))
      .toBe('animate-ease-step-end')
  })
})

test('function values', () => {
  expect(transformProperty('animationTimingFunction', 'steps(4, jump-end)'))
    .toBe('animate-ease-[steps(4,_jump-end)]')
  expect(transformProperty('animationTimingFunction', 'cubic-bezier(0.1, 0.7, 1, 0.1)'))
    .toBe('animate-ease-[cubic-bezier(0.1,_0.7,_1,_0.1)]')
})

test('steps function keywords', () => {
  expect(transformProperty('animationTimingFunction', 'steps(4, jump-start)'))
    .toBe('animate-ease-[steps(4,_jump-start)]')
  expect(transformProperty('animationTimingFunction', 'steps(10, jump-end)'))
    .toBe('animate-ease-[steps(10,_jump-end)]')
  expect(transformProperty('animationTimingFunction', 'steps(20, jump-none)'))
    .toBe('animate-ease-[steps(20,_jump-none)]')
  expect(transformProperty('animationTimingFunction', 'steps(5, jump-both)'))
    .toBe('animate-ease-[steps(5,_jump-both)]')
  expect(transformProperty('animationTimingFunction', 'steps(6, start)'))
    .toBe('animate-ease-[steps(6,_start)]')
  expect(transformProperty('animationTimingFunction', 'steps(8, end)'))
    .toBe('animate-ease-[steps(8,_end)]')
})

test('multiple timing functions', () => {
  expect(transformProperty('animationTimingFunction', 'ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1)'))
    .toBe('animate-ease-[ease,_step-start,_cubic-bezier(0.1,_0.7,_1,_0.1)]')
})
