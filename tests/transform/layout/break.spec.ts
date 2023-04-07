import { transformProperty } from '~/transform'

describe('break-after', () => {
  test('generic break values', () => {
    expect(transformProperty('breakAfter', 'auto'))
      .toBe('break-after-auto')
    expect(transformProperty('breakAfter', 'avoid'))
      .toBe('break-after-avoid')
    expect(transformProperty('breakAfter', 'always'))
      .toBe('break-after-always')
    expect(transformProperty('breakAfter', 'all'))
      .toBe('break-after-all')
  })

  test('page break values', () => {
    expect(transformProperty('breakAfter', 'avoid-page'))
      .toBe('break-after-avoid-page')
    expect(transformProperty('breakAfter', 'page'))
      .toBe('break-after-page')
    expect(transformProperty('breakAfter', 'left'))
      .toBe('break-after-left')
    expect(transformProperty('breakAfter', 'right'))
      .toBe('break-after-right')

    it.skip('NOT in unocss', () => {
      expect(transformProperty('breakAfter', 'recto'))
        .toBe('break-after-recto')
      expect(transformProperty('breakAfter', 'verso'))
        .toBe('break-after-verso')
    })
  })

  test('column break values', () => {
    it.skip('NOT in unocss', () => {
      expect(transformProperty('breakAfter', 'avoid-column'))
        .toBe('break-after-avoid-column')
    })
    expect(transformProperty('breakAfter', 'column'))
      .toBe('break-after-column')
  })

  test('region break values', () => {
    it.skip('NOT in unocss', () => {
      expect(transformProperty('breakAfter', 'avoid-region'))
        .toBe('break-after-avoid-region')
      expect(transformProperty('breakAfter', 'region'))
        .toBe('break-after-region')
    })
  })
})

describe('break-before', () => {
  test('generic break values', () => {
    expect(transformProperty('breakBefore', 'auto'))
      .toBe('break-before-auto')
    expect(transformProperty('breakBefore', 'avoid'))
      .toBe('break-before-avoid')
  })

  test('page break values', () => {
    expect(transformProperty('breakBefore', 'avoid-page'))
      .toBe('break-before-avoid-page')
    expect(transformProperty('breakBefore', 'page'))
      .toBe('break-before-page')
    expect(transformProperty('breakBefore', 'left'))
      .toBe('break-before-left')
    expect(transformProperty('breakBefore', 'right'))
      .toBe('break-before-right')

    it.skip('NOT in unocss', () => {
      expect(transformProperty('breakBefore', 'recto'))
        .toBe('break-before-recto')
      expect(transformProperty('breakBefore', 'verso'))
        .toBe('break-before-verso')
    })
  })

  test('column break values', () => {
    expect(transformProperty('breakBefore', 'avoid-column'))
      .toBe('break-before-avoid-column')
    expect(transformProperty('breakBefore', 'column'))
      .toBe('break-before-column')
  })

  test('region break values', () => {
    it.skip('NOT in unocss', () => {
      expect(transformProperty('breakBefore', 'avoid-region'))
        .toBe('break-before-avoid-region')
      expect(transformProperty('breakBefore', 'region'))
        .toBe('break-before-region')
    })
  })
})

describe('break-inside', () => {
  test('keyword values', () => {
    expect(transformProperty('breakInside', 'auto'))
      .toBe('break-inside-auto')
    expect(transformProperty('breakInside', 'avoid'))
      .toBe('break-inside-avoid')
    expect(transformProperty('breakInside', 'avoid-page'))
      .toBe('break-inside-avoid-page')
    expect(transformProperty('breakInside', 'avoid-column'))
      .toBe('break-inside-avoid-column')

    it.skip('NOT in unocss', () => {
      expect(transformProperty('breakInside', 'avoid-region'))
        .toBe('break-inside-avoid-region')
    })
  })
})
