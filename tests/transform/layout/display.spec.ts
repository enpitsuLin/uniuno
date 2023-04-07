import { transformProperty } from '~/transform'

test('precomposed values', () => {
  expect(transformProperty('display', 'block'))
    .toBe('block')
  expect(transformProperty('display', 'inline'))
    .toBe('inline')
  expect(transformProperty('display', 'inline-block'))
    .toBe('inline-block')
  expect(transformProperty('display', 'flex'))
    .toBe('flex')
  expect(transformProperty('display', 'inline-flex'))
    .toBe('inline-flex')
  expect(transformProperty('display', 'grid'))
    .toBe('grid')
  expect(transformProperty('display', 'inline-grid'))
    .toBe('inline-grid')
  expect(transformProperty('display', 'flow-root'))
    .toBe('flow-root')
})

test('box generation', () => {
  expect(transformProperty('display', 'none'))
    .toBe('hidden')
  expect(transformProperty('display', 'contents'))
    .toBe('contents')
})

test('other values', () => {
  expect(transformProperty('display', 'table'))
    .toBe('table')
  expect(transformProperty('display', 'inline-table'))
    .toBe('inline-table')

  expect(transformProperty('display', 'table-caption'))
    .toBe('table-caption')
  expect(transformProperty('display', 'table-cell'))
    .toBe('table-cell')
  expect(transformProperty('display', 'table-column'))
    .toBe('table-column')
  expect(transformProperty('display', 'table-column-group'))
    .toBe('table-column-group')
  expect(transformProperty('display', 'table-footer-group'))
    .toBe('table-footer-group')
  expect(transformProperty('display', 'table-header-group'))
    .toBe('table-header-group')
  expect(transformProperty('display', 'table-row'))
    .toBe('table-row')
  expect(transformProperty('display', 'table-row-group'))
    .toBe('table-row-group')

  expect(transformProperty('display', 'list-item'))
    .toBe('list-item')
  expect(transformProperty('display', 'inline-list-item'))
    .toBe('inline-list-item')
})

/** @link https://developer.mozilla.org/en-US/docs/Web/CSS/display#grouped_values */
test('multi-keyword syntax for outsite-inside value', () => {
  expect(transformProperty('display', 'block flex'))
    .toBe('display-[block_flex]')

  expect(transformProperty('display', 'inline flex'))
    .toBe('display-[inline_flex]')
})
