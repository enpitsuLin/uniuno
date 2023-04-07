import { transformProperty } from '~/transform'

describe('aspect-radio', () => {
  test('value offer by preset', () => {
    expect(transformProperty('aspectRatio', '1 / 1'))
      .toBe('aspect-square')
    expect(transformProperty('aspectRatio', '16 / 9'))
      .toBe('aspect-video')
  })

  test('other values', () => {
    expect(transformProperty('aspectRatio', '1 / 2'))
      .toBe('aspect-1/2')
    expect(transformProperty('aspectRatio', '2'))
      .toBe('aspect-2')
  })
})

describe('box-decoration-break', () => {
  test('keyword values', () => {
    expect(transformProperty('boxDecorationBreak', 'slice'))
      .toBe('box-decoration-slice')
    expect(transformProperty('boxDecorationBreak', 'clone'))
      .toBe('box-decoration-clone')
  })
})

describe('box-sizing', () => {
  test('keyword value', () => {
    expect(transformProperty('boxSizing', 'border-box'))
      .toBe('box-border')
    expect(transformProperty('boxSizing', 'content-box'))
      .toBe('box-content')
  })
})

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

describe('overscroll-behavior', () => {
  test('keyword values', () => {
    expect(transformProperty('overscrollBehavior', 'auto'))
      .toBe('overscroll-auto')
    expect(transformProperty('overscrollBehavior', 'contain'))
      .toBe('overscroll-contain')
    expect(transformProperty('overscrollBehavior', 'none'))
      .toBe('overscroll-none')
  })

  test('two values', () => {
    expect(transformProperty('overscrollBehavior', 'auto contain'))
      .toBe('overscroll-x-auto overscroll-y-contain')
  })
})

describe('position', () => {
  test('keyword values', () => {
    expect(transformProperty('position', 'static'))
      .toBe('static')
    expect(transformProperty('position', 'relative'))
      .toBe('relative')
    expect(transformProperty('position', 'absolute'))
      .toBe('absolute')
    expect(transformProperty('position', 'fixed'))
      .toBe('fixed')
    expect(transformProperty('position', 'sticky'))
      .toBe('sticky')
  })
})

describe('top/right/bottom/left', () => {
  (<const>['top', 'right', 'bottom', 'left']).forEach((side) => {
    expect(transformProperty(side, '3px'))
      .toBe(`${side}-3px`)
    expect(transformProperty(side, '2.4em'))
      .toBe(`${side}-2.4em`)

    expect(transformProperty(side, '10%'))
      .toBe(`${side}-10%`)

    expect(transformProperty(side, 'auto'))
      .toBe(`${side}-auto`)
  })
})
