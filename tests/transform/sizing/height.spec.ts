import { transformProperty } from '~/transform'

describe('Height', () => {
  test('<length> values', () => {
    expect(transformProperty('height', '1px'))
      .toBe('h-1px')

    expect(transformProperty('height', '1rem'))
      .toBe('h-1rem')
  })

  test('percentage values', () => {
    expect(transformProperty('height', '50%'))
      .toBe('h-1/2')

    expect(transformProperty('height', '66.66%'))
      .toBe('h-66.66%')
  })

  test.skip('keyword values', () => {
    expect(transformProperty('height', 'max-content'))

    expect(transformProperty('height', '66.66%'))
  })
})

describe('Min-Height', () => {
  test('<length> values', () => {
    expect(transformProperty('minHeight', '1px'))
      .toBe('min-h-1px')

    expect(transformProperty('minHeight', '1rem'))
      .toBe('min-h-1rem')
  })

  test('percentage values', () => {
    expect(transformProperty('minHeight', '50%'))
      .toBe('min-h-1/2')

    expect(transformProperty('minHeight', '66.66%'))
      .toBe('min-h-66.66%')
  })
})

describe('Max-Height', () => {
  test('<length> values', () => {
    expect(transformProperty('maxHeight', '1px'))
      .toBe('max-h-1px')

    expect(transformProperty('maxHeight', '1rem'))
      .toBe('max-h-1rem')
  })

  test('precentage values', () => {
    expect(transformProperty('maxHeight', '50%'))
      .toBe('max-h-1/2')

    expect(transformProperty('maxHeight', '66.66%'))
      .toBe('max-h-66.66%')
  })
})
