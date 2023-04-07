import { transformProperty } from '~/transform'

describe('overflow', () => {
  test('keyword values', () => {
    expect(transformProperty('overflow', 'auto'))
      .toBe('overflow-auto')
    expect(transformProperty('overflow', 'hidden'))
      .toBe('overflow-hidden')
    expect(transformProperty('overflow', 'clip'))
      .toBe('overflow-clip')
    expect(transformProperty('overflow', 'visible'))
      .toBe('overflow-visible')
    expect(transformProperty('overflow', 'scroll'))
      .toBe('overflow-scroll')
  })

  test('multiple key values', () => {
    expect(transformProperty('overflow', 'hidden visible'))
      .toBe('overflow-x-hidden overflow-y-visible')
  })
})

describe('overflow-x', () => {
  test('keyword values', () => {
    expect(transformProperty('overflowX', 'auto'))
      .toBe('overflow-x-auto')
  })
})
describe('overflow-y', () => {
  test('keyword values', () => {
    expect(transformProperty('overflowY', 'auto'))
      .toBe('overflow-y-auto')
  })
})
