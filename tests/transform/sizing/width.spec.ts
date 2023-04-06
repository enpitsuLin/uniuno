import { transformProperty } from '~/transform'

describe('Width', () => {
  test('<length> values', () => {
    expect(transformProperty('width', '1px'))
      .toBe('w-1px')

    expect(transformProperty('width', '1rem'))
      .toBe('w-1rem')
  })

  test('percentage values', () => {
    expect(transformProperty('width', '50%'))
      .toBe('w-1/2')

    expect(transformProperty('width', '66.66%'))
      .toBe('w-66.66%')
  })

  test.skip('keyword values', () => {
    expect(transformProperty('width', 'max-content'))

    expect(transformProperty('width', '66.66%'))
  })
})

describe('Min-Width', () => {
  test('<length> values', () => {
    expect(transformProperty('minWidth', '1px'))
      .toBe('min-w-1px')

    expect(transformProperty('minWidth', '1rem'))
      .toBe('min-w-1rem')
  })

  test('percentage values', () => {
    expect(transformProperty('minWidth', '50%'))
      .toBe('min-w-1/2')

    expect(transformProperty('minWidth', '66.66%'))
      .toBe('min-w-66.66%')
  })
})

describe('Max-Width', () => {
  test('<length> values', () => {
    expect(transformProperty('maxWidth', '1px'))
      .toBe('max-w-1px')

    expect(transformProperty('maxWidth', '1rem'))
      .toBe('max-w-1rem')
  })

  test('precentage values', () => {
    expect(transformProperty('maxWidth', '50%'))
      .toBe('max-w-1/2')

    expect(transformProperty('maxWidth', '66.66%'))
      .toBe('max-w-66.66%')
  })
})
