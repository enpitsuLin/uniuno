import { transformProperty } from '~/transform'

test('keyword values', () => {
  expect(transformProperty('tableLayout', 'auto'))
    .toBe('table-auto')

  expect(transformProperty('tableLayout', 'fixed'))
    .toBe('table-fixed')
})
