import { transformProperty } from '~/transform'

describe('<filter-function> values', () => {
  test('blur', () => {
    expect(transformProperty('filter', 'blur(0)'))
      .toBe('blur-0')

    expect(transformProperty('filter', 'blur(8px)'))
      .toBe('blur-8px')

    expect(transformProperty('filter', 'blur(1.17rem)'))
      .toBe('blur-1.17rem')
  })
  test('brightness', () => {
    expect([transformProperty('filter', 'brightness(0)'), transformProperty('filter', 'brightness(0%)')])
      .toEqual(['brightness-0', 'brightness-0'])

    expect([transformProperty('filter', 'brightness(0.4)'), transformProperty('filter', 'brightness(40%)')])
      .toEqual(['brightness-40', 'brightness-40'])

    expect([transformProperty('filter', 'brightness(1)'), transformProperty('filter', 'brightness(100%)')])
      .toEqual(['brightness-100', 'brightness-100'])

    expect([transformProperty('filter', 'brightness(2)'), transformProperty('filter', 'brightness(200%)')])
      .toEqual(['brightness-200', 'brightness-200'])
  })
  test('contrast', () => {
    expect([transformProperty('filter', 'contrast(0)'), transformProperty('filter', 'contrast(0%)')])
      .toEqual(['contrast-0', 'contrast-0'])

    expect([transformProperty('filter', 'contrast(0.4)'), transformProperty('filter', 'contrast(40%)')])
      .toEqual(['contrast-40', 'contrast-40'])

    expect([transformProperty('filter', 'contrast(1)'), transformProperty('filter', 'contrast(100%)')])
      .toEqual(['contrast-100', 'contrast-100'])

    expect([transformProperty('filter', 'contrast(2)'), transformProperty('filter', 'contrast(200%)')])
      .toEqual(['contrast-200', 'contrast-200'])
  })
  test('drop-shadow', () => {
    expect(transformProperty('filter', 'drop-shadow(16px 16px 20px blue)'))
      .toBe('drop-shadow-[16px_16px_20px_blue]')
  })
  test('grayscale', () => {
    expect([transformProperty('filter', 'grayscale(0)'), transformProperty('filter', 'grayscale(0%)')])
      .toEqual(['grayscale-0', 'grayscale-0'])

    expect([transformProperty('filter', 'grayscale(0.4)'), transformProperty('filter', 'grayscale(40%)')])
      .toEqual(['grayscale-40', 'grayscale-40'])

    expect([transformProperty('filter', 'grayscale(1)'), transformProperty('filter', 'grayscale(100%)')])
      .toEqual(['grayscale-100', 'grayscale-100'])

    expect([transformProperty('filter', 'grayscale(2)'), transformProperty('filter', 'grayscale(200%)')])
      .toEqual(['grayscale-200', 'grayscale-200'])
  })
  test('hue-rotate', () => {
    expect(transformProperty('filter', 'hue-rotate(-180deg)'))
      .toBe('-hue-rotate-180')

    expect(transformProperty('filter', 'hue-rotate(540deg)'))
      .toBe('hue-rotate-540')

    expect(transformProperty('filter', 'hue-rotate(200grad)'))
      .toBe('hue-rotate-200grad')

    expect(transformProperty('filter', 'hue-rotate(3.14159rad)'))
      .toBe('hue-rotate-3.14159rad')

    expect(transformProperty('filter', 'hue-rotate(0.5turn)'))
      .toBe('hue-rotate-0.5turn')
  })
  test('invert', () => {
    expect([transformProperty('filter', 'invert(0)'), transformProperty('filter', 'invert(0%)')])
      .toEqual(['invert-0', 'invert-0'])

    expect([transformProperty('filter', 'invert(0.4)'), transformProperty('filter', 'invert(40%)')])
      .toEqual(['invert-40', 'invert-40'])

    expect([transformProperty('filter', 'invert(1)'), transformProperty('filter', 'invert(100%)')])
      .toEqual(['invert-100', 'invert-100'])

    expect([transformProperty('filter', 'invert(2)'), transformProperty('filter', 'invert(200%)')])
      .toEqual(['invert-200', 'invert-200'])
  })
  test('opacity', () => {
    it.skip('NOT on unocss', () => {
      expect(transformProperty('filter', 'opacity(25%)'))
        .toBe('opacity-25')
    })
  })
  test('saturate', () => {
    expect([transformProperty('filter', 'saturate(0)'), transformProperty('filter', 'saturate(0%)')])
      .toEqual(['saturate-0', 'saturate-0'])

    expect([transformProperty('filter', 'saturate(0.4)'), transformProperty('filter', 'saturate(40%)')])
      .toEqual(['saturate-40', 'saturate-40'])

    expect([transformProperty('filter', 'saturate(1)'), transformProperty('filter', 'saturate(100%)')])
      .toEqual(['saturate-100', 'saturate-100'])

    expect([transformProperty('filter', 'saturate(2)'), transformProperty('filter', 'saturate(200%)')])
      .toEqual(['saturate-200', 'saturate-200'])
  })
  test('sepia', () => {
    expect([transformProperty('filter', 'sepia(0)'), transformProperty('filter', 'sepia(0%)')])
      .toEqual(['sepia-0', 'sepia-0'])

    expect([transformProperty('filter', 'sepia(0.4)'), transformProperty('filter', 'sepia(40%)')])
      .toEqual(['sepia-40', 'sepia-40'])

    expect([transformProperty('filter', 'sepia(1)'), transformProperty('filter', 'sepia(100%)')])
      .toEqual(['sepia-100', 'sepia-100'])

    expect([transformProperty('filter', 'sepia(2)'), transformProperty('filter', 'sepia(200%)')])
      .toEqual(['sepia-200', 'sepia-200'])
  })
})

describe('URL', () => {
  it.skip('NOT on unocss', () => {
    expect(transformProperty('filter', 'url(filter.svg#filter-id)'))
  })
})

describe('multiple filters', () => {
  it('should work properly', () => {
    expect(transformProperty('filter', 'contrast(175%) brightness(3%)'))
      .toBe('contrast-175 brightness-3')

    expect(transformProperty('filter', 'drop-shadow(3px 3px red) sepia(100%)'))
      .toBe('drop-shadow-[3px_3px_red] sepia-100')
  })
})
