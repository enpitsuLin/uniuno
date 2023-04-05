import { transformProperty } from '~/transform'

test('Keyword values', () => {
  expect(transformProperty('backgroundPosition', 'top'))
    .toBe('bg-top')
  expect(transformProperty('backgroundPosition', 'bottom'))
    .toBe('bg-bottom')
  expect(transformProperty('backgroundPosition', 'left'))
    .toBe('bg-left')
  expect(transformProperty('backgroundPosition', 'right'))
    .toBe('bg-right')
  expect(transformProperty('backgroundPosition', 'center'))
    .toBe('bg-center')
})

test('Multiple values', () => {
  expect(transformProperty('backgroundPosition', 'top left'))
    .toBe('bg-top-left')
  expect(transformProperty('backgroundPosition', 'bottom right'))
    .toBe('bg-bottom-right')
  expect(transformProperty('backgroundPosition', 'center center'))
    .toBe('bg-center-center')
})

test('<percentage> values', () => {
  expect(transformProperty('backgroundPosition', '25% 75%'))
    .toBe('bg-[position:25%_75%]')
})

test('<length> values', () => {
  expect(transformProperty('backgroundPosition', '0 0'))
    .toBe('bg-[position:0_0]')
  expect(transformProperty('backgroundPosition', '1cm 2cm'))
    .toBe('bg-[position:1cm_2cm]')
  expect(transformProperty('backgroundPosition', '10ch 8em'))
    .toBe('bg-[position:10ch_8em]')
})

test.skip('Multiple images', () => {
  expect(transformProperty('backgroundPosition', '0 0, center'))
    .toBe('bg-[position:0_0,_center]')
})

test('Edge offsets values', () => {
  expect(transformProperty('backgroundPosition', 'bottom 10px right 20px'))
    .toBe('bg-[position:bottom_10px_right_20px]')
  expect(transformProperty('backgroundPosition', 'right 3em bottom 10px'))
    .toBe('bg-[position:right_3em_bottom_10px]')
  expect(transformProperty('backgroundPosition', 'bottom 10px right'))
    .toBe('bg-[position:bottom_10px_right]')
  expect(transformProperty('backgroundPosition', 'top right 10px'))
    .toBe('bg-[position:top_right_10px]')
})
