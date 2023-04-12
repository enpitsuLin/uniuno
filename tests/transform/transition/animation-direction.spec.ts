import { transformProperty } from '~/transform'

test('single animation', () => {
  expect(transformProperty('animationDirection', 'normal'))
    .toBe('animate-direction-normal')
  expect(transformProperty('animationDirection', 'reverse'))
    .toBe('animate-direction-reverse')
  expect(transformProperty('animationDirection', 'alternate'))
    .toBe('animate-direction-alternate')
  expect(transformProperty('animationDirection', 'alternate-reverse'))
    .toBe('animate-direction-alternate-reverse')
})

test('multiple animation', () => {
  expect(transformProperty('animationDirection', 'normal, reverse'))
    .toBe('animate-direction-[normal,_reverse]')
  expect(transformProperty('animationDirection', 'alternate, reverse, normal'))
    .toBe('animate-direction-[alternate,_reverse,_normal]')
})
