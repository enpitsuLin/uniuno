import { transformProperty } from '~/transform'

describe('Floats', () => {
  test('keyword values', () => {
    expect(transformProperty('float', 'left'))
      .toBe('float-left')
    expect(transformProperty('float', 'right'))
      .toBe('float-right')
    expect(transformProperty('float', 'none'))
      .toBe('float-none')

    it.skip('NOT in unocss', () => {
      expect(transformProperty('float', 'inline-start'))
        .toBe('float-inline-start')
      expect(transformProperty('float', 'inline-end'))
        .toBe('float-inline-end')
    })
  })
})

describe('Clear', () => {
  test('keyword values', () => {
    expect(transformProperty('clear', 'left'))
      .toBe('clear-left')
    expect(transformProperty('clear', 'right'))
      .toBe('clear-right')
    expect(transformProperty('clear', 'both'))
      .toBe('clear-both')
    expect(transformProperty('clear', 'none'))
      .toBe('clear-none')

    it.skip('NOT in unocss', () => {
      expect(transformProperty('clear', 'inline-start'))
        .toBe('clear-inline-start')
      expect(transformProperty('clear', 'inline-end'))
        .toBe('clear-inline-end')
    })
  })
})
