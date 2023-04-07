import { transformProperty } from '~/transform'

describe('isolation', () => {
  test('keyword values', () => {
    expect(transformProperty('isolation', 'isolate'))
      .toBe('isolation-isolate')
    expect(transformProperty('isolation', 'auto'))
      .toBe('isolation-auto')
  })
})

describe('object-fit', () => {
  test('keyword values', () => {
    expect(transformProperty('objectFit', 'contain'))
      .toBe('object-contain')
    expect(transformProperty('objectFit', 'cover'))
      .toBe('object-cover')
    expect(transformProperty('objectFit', 'fill'))
      .toBe('object-fill')
    expect(transformProperty('objectFit', 'none'))
      .toBe('object-none')
    expect(transformProperty('objectFit', 'scale-down'))
      .toBe('object-scale-down')
  })
})

describe('object-position', () => {
  test('keyword values', () => {
    expect(transformProperty('objectPosition', 'bottom'))
      .toBe('object-bottom')
    expect(transformProperty('objectPosition', 'center'))
      .toBe('object-center')
    expect(transformProperty('objectPosition', 'left'))
      .toBe('object-left')
    expect(transformProperty('objectPosition', 'left bottom'))
      .toBe('object-left-bottom')
    expect(transformProperty('objectPosition', 'left top'))
      .toBe('object-left-top')
    expect(transformProperty('objectPosition', 'right'))
      .toBe('object-right')
    expect(transformProperty('objectPosition', 'right bottom'))
      .toBe('object-right-bottom')
    expect(transformProperty('objectPosition', 'right top'))
      .toBe('object-right-top')
    expect(transformProperty('objectPosition', 'top'))
      .toBe('object-top')
  })
})
