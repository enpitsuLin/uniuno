import { transformProperty } from '~/transform'

test('keyword values', () => {
  expect(transformProperty('borderCollapse', 'collapse'))
    .toBe('border-collapse')

  expect(transformProperty('borderCollapse', 'separate'))
    .toBe('border-separate')
})
