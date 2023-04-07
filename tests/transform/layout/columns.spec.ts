import { transformProperty } from '~/transform'

describe('column', () => {
  test('column width', () => {
    expect(transformProperty('columns', '18em'))
      .toBe('columns-18em')

    expect(transformProperty('columns', '3px'))
      .toBe('columns-3px')
  })

  test('column count', () => {
    expect(transformProperty('columns', 'auto'))
      .toBe('columns-auto')
    expect(transformProperty('columns', '2'))
      .toBe('columns-2')
  })

  test('both count and width', () => {
    expect(transformProperty('columns', '2 auto'))
      .toBe('columns-[2_auto]')
  })
})

describe('column-width', () => {
  test.skip('keyword values: auto as value was be count prioritized over width ', () => {
    expect(transformProperty('columnWidth', 'auto'))
      .toBe('columns-auto')
  })
  test('<length> values', () => {
    expect(transformProperty('columnWidth', '60px'))
      .toBe('columns-60px')

    expect(transformProperty('columnWidth', '15.5em'))
      .toBe('columns-15.5em')

    expect(transformProperty('columnWidth', '3.3vw'))
      .toBe('columns-3.3vw')
  })
})

describe('column-count', () => {
  test('keyword value', () => {
    expect(transformProperty('columnWidth', 'auto'))
      .toBe('columns-auto')
  })

  test('<integer> values', () => {
    expect(transformProperty('columnWidth', '3'))
      .toBe('columns-3')
  })
})
