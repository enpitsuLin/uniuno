import { transformProperty } from '~/transform'

test('all values', () => {
  expect(transformProperty('boxShadow', '0 1px 2px 0 rgb(0 0 0 / 0.05)'))
    .toBe('shadow-[0_1px_2px_0_rgb(0_0_0_/_0.05)]')
  expect(transformProperty('boxShadow', 'box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'))
    .toBe('shadow-[box-shadow:_inset_0_2px_4px_0_rgb(0_0_0_/_0.05)]')
})
