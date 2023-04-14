import { transformProperty } from '~/transform'

test('one-value syntax', () => {
  expect(transformProperty('transformOrigin', '2px'))
    .toBe('transform-origin-[2px]')
  expect(transformProperty('transformOrigin', 'bottom'))
    .toBe('transform-origin-b')
})

test('x-offset | y-offset', () => {
  expect(transformProperty('transformOrigin', '3cm 2px'))
    .toBe('transform-origin-[3cm_2px]')
})

test('x-offset-keyword | y-offset', () => {
  expect(transformProperty('transformOrigin', 'left 2px'))
    .toBe('transform-origin-[left_2px]')
})

test('x-offset-keyword | y-offset-keyword', () => {
  expect(transformProperty('transformOrigin', 'right top'))
    .toBe('transform-origin-rt')
})

test('y-offset-keyword | x-offset-keyword', () => {
  expect(transformProperty('transformOrigin', 'top right'))
    .toBe('transform-origin-tr')
})

test('x-offset | y-offset | z-offset', () => {
  expect(transformProperty('transformOrigin', '2px 30% 10px'))
    .toBe('transform-origin-[2px_30%_10px]')
})

test('x-offset-keyword | y-offset | z-offset', () => {
  expect(transformProperty('transformOrigin', 'left 5px -3px'))
    .toBe('transform-origin-[left_5px_-3px]')
})

test('x-offset-keyword | y-offset-keyword | z-offset', () => {
  expect(transformProperty('transformOrigin', 'right bottom 2cm'))
    .toBe('transform-origin-[right_bottom_2cm]')
})

test('y-offset-keyword | x-offset-keyword | z-offset', () => {
  expect(transformProperty('transformOrigin', 'bottom right 2cm'))
    .toBe('transform-origin-[bottom_right_2cm]')
})
