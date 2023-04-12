import { transformProperty } from '~/transform'

test('Keyword value', () => {
  expect(transformProperty('animationIterationCount', 'infinite'))
    .toBe('animate-iteration-infinite')
})
test('<number> values', () => {
  expect(transformProperty('animationIterationCount', '3'))
    .toBe('animate-iteration-3')
  expect(transformProperty('animationIterationCount', '2.4'))
    .toBe('animate-iteration-2.4')
})
test('Multiple values', () => {
  expect(transformProperty('animationIterationCount', '2, 0, infinite'))
    .toBe('animate-iteration-[2,_0,_infinite]')
})
