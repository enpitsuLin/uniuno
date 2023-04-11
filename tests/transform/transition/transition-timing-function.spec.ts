import { transformProperty } from '~/transform'

test('keyword values', () => {
  expect(transformProperty('transitionTimingFunction', 'ease'))
    .toBe('ease')
  expect(transformProperty('transitionTimingFunction', 'ease-in'))
    .toBe('ease-in')
  expect(transformProperty('transitionTimingFunction', 'ease-out'))
    .toBe('ease-out')
  expect(transformProperty('transitionTimingFunction', 'ease-in-out'))
    .toBe('ease-in-out')
  expect(transformProperty('transitionTimingFunction', 'linear'))
    .toBe('ease-linear')

  it.skip('NOT in unocss', () => {
    expect(transformProperty('transitionTimingFunction', 'step-start'))
      .toBe('ease-step-start')
    expect(transformProperty('transitionTimingFunction', 'step-end'))
      .toBe('ease-step-end')
  })
})

test('function values', () => {
  expect(transformProperty('transitionTimingFunction', 'steps(4, jump-end)'))
    .toBe('ease-[steps(4,_jump-end)]')
  expect(transformProperty('transitionTimingFunction', 'cubic-bezier(0.1, 0.7, 1, 0.1)'))
    .toBe('ease-[cubic-bezier(0.1,_0.7,_1,_0.1)]')
})

test('steps function keywords', () => {
  expect(transformProperty('transitionTimingFunction', 'steps(4, jump-start)'))
    .toBe('ease-[steps(4,_jump-start)]')
  expect(transformProperty('transitionTimingFunction', 'steps(10, jump-end)'))
    .toBe('ease-[steps(10,_jump-end)]')
  expect(transformProperty('transitionTimingFunction', 'steps(20, jump-none)'))
    .toBe('ease-[steps(20,_jump-none)]')
  expect(transformProperty('transitionTimingFunction', 'steps(5, jump-both)'))
    .toBe('ease-[steps(5,_jump-both)]')
  expect(transformProperty('transitionTimingFunction', 'steps(6, start)'))
    .toBe('ease-[steps(6,_start)]')
  expect(transformProperty('transitionTimingFunction', 'steps(8, end)'))
    .toBe('ease-[steps(8,_end)]')
})

test('multiple timing functions', () => {
  expect(transformProperty('transitionTimingFunction', 'ease, step-start, cubic-bezier(0.1, 0.7, 1, 0.1)'))
    .toBe('ease-[ease,_step-start,_cubic-bezier(0.1,_0.7,_1,_0.1)]')
})
