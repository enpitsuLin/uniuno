import { transformProperty } from '~/transform'

describe('<filter-function> values', () => {
  test('blur', () => {
    expect(transformProperty('backdropFilter', 'blur(0)'))
      .toBe('backdrop-blur-0')

    expect(transformProperty('backdropFilter', 'blur(8px)'))
      .toBe('backdrop-blur-8px')

    expect(transformProperty('backdropFilter', 'blur(1.17rem)'))
      .toBe('backdrop-blur-1.17rem')
  })
  test('brightness', () => {
    expect([transformProperty('backdropFilter', 'brightness(0)'), transformProperty('backdropFilter', 'brightness(0%)')])
      .toEqual(['backdrop-brightness-0', 'backdrop-brightness-0'])

    expect([transformProperty('backdropFilter', 'brightness(0.4)'), transformProperty('backdropFilter', 'brightness(40%)')])
      .toEqual(['backdrop-brightness-40', 'backdrop-brightness-40'])

    expect([transformProperty('backdropFilter', 'brightness(1)'), transformProperty('backdropFilter', 'brightness(100%)')])
      .toEqual(['backdrop-brightness-100', 'backdrop-brightness-100'])

    expect([transformProperty('backdropFilter', 'brightness(2)'), transformProperty('backdropFilter', 'brightness(200%)')])
      .toEqual(['backdrop-brightness-200', 'backdrop-brightness-200'])
  })
  test('contrast', () => {
    expect([transformProperty('backdropFilter', 'contrast(0)'), transformProperty('backdropFilter', 'contrast(0%)')])
      .toEqual(['backdrop-contrast-0', 'backdrop-contrast-0'])

    expect([transformProperty('backdropFilter', 'contrast(0.4)'), transformProperty('backdropFilter', 'contrast(40%)')])
      .toEqual(['backdrop-contrast-40', 'backdrop-contrast-40'])

    expect([transformProperty('backdropFilter', 'contrast(1)'), transformProperty('backdropFilter', 'contrast(100%)')])
      .toEqual(['backdrop-contrast-100', 'backdrop-contrast-100'])

    expect([transformProperty('backdropFilter', 'contrast(2)'), transformProperty('backdropFilter', 'contrast(200%)')])
      .toEqual(['backdrop-contrast-200', 'backdrop-contrast-200'])
  })
  test('drop-shadow', () => {
    expect(transformProperty('backdropFilter', 'drop-shadow(16px 16px 20px blue)'))
      .toBe('backdrop-drop-shadow-[16px_16px_20px_blue]')
  })
  test('grayscale', () => {
    expect([transformProperty('backdropFilter', 'grayscale(0)'), transformProperty('backdropFilter', 'grayscale(0%)')])
      .toEqual(['backdrop-grayscale-0', 'backdrop-grayscale-0'])

    expect([transformProperty('backdropFilter', 'grayscale(0.4)'), transformProperty('backdropFilter', 'grayscale(40%)')])
      .toEqual(['backdrop-grayscale-40', 'backdrop-grayscale-40'])

    expect([transformProperty('backdropFilter', 'grayscale(1)'), transformProperty('backdropFilter', 'grayscale(100%)')])
      .toEqual(['backdrop-grayscale-100', 'backdrop-grayscale-100'])

    expect([transformProperty('backdropFilter', 'grayscale(2)'), transformProperty('backdropFilter', 'grayscale(200%)')])
      .toEqual(['backdrop-grayscale-200', 'backdrop-grayscale-200'])
  })
  test('hue-rotate', () => {
    expect(transformProperty('backdropFilter', 'hue-rotate(-180deg)'))
      .toBe('-backdrop-hue-rotate-180')

    expect(transformProperty('backdropFilter', 'hue-rotate(540deg)'))
      .toBe('backdrop-hue-rotate-540')

    expect(transformProperty('backdropFilter', 'hue-rotate(200grad)'))
      .toBe('backdrop-hue-rotate-200grad')

    expect(transformProperty('backdropFilter', 'hue-rotate(3.14159rad)'))
      .toBe('backdrop-hue-rotate-3.14159rad')

    expect(transformProperty('backdropFilter', 'hue-rotate(0.5turn)'))
      .toBe('backdrop-hue-rotate-0.5turn')
  })
  test('invert', () => {
    expect([transformProperty('backdropFilter', 'invert(0)'), transformProperty('backdropFilter', 'invert(0%)')])
      .toEqual(['backdrop-invert-0', 'backdrop-invert-0'])

    expect([transformProperty('backdropFilter', 'invert(0.4)'), transformProperty('backdropFilter', 'invert(40%)')])
      .toEqual(['backdrop-invert-40', 'backdrop-invert-40'])

    expect([transformProperty('backdropFilter', 'invert(1)'), transformProperty('backdropFilter', 'invert(100%)')])
      .toEqual(['backdrop-invert-100', 'backdrop-invert-100'])

    expect([transformProperty('backdropFilter', 'invert(2)'), transformProperty('backdropFilter', 'invert(200%)')])
      .toEqual(['backdrop-invert-200', 'backdrop-invert-200'])
  })
  test('opacity', () => {
    expect(transformProperty('backdropFilter', 'opacity(25%)'))
      .toBe('backdrop-opacity-25')
  })
  test('saturate', () => {
    expect([transformProperty('backdropFilter', 'saturate(0)'), transformProperty('backdropFilter', 'saturate(0%)')])
      .toEqual(['backdrop-saturate-0', 'backdrop-saturate-0'])

    expect([transformProperty('backdropFilter', 'saturate(0.4)'), transformProperty('backdropFilter', 'saturate(40%)')])
      .toEqual(['backdrop-saturate-40', 'backdrop-saturate-40'])

    expect([transformProperty('backdropFilter', 'saturate(1)'), transformProperty('backdropFilter', 'saturate(100%)')])
      .toEqual(['backdrop-saturate-100', 'backdrop-saturate-100'])

    expect([transformProperty('backdropFilter', 'saturate(2)'), transformProperty('backdropFilter', 'saturate(200%)')])
      .toEqual(['backdrop-saturate-200', 'backdrop-saturate-200'])
  })
  test('sepia', () => {
    expect([transformProperty('backdropFilter', 'sepia(0)'), transformProperty('backdropFilter', 'sepia(0%)')])
      .toEqual(['backdrop-sepia-0', 'backdrop-sepia-0'])

    expect([transformProperty('backdropFilter', 'sepia(0.4)'), transformProperty('backdropFilter', 'sepia(40%)')])
      .toEqual(['backdrop-sepia-40', 'backdrop-sepia-40'])

    expect([transformProperty('backdropFilter', 'sepia(1)'), transformProperty('backdropFilter', 'sepia(100%)')])
      .toEqual(['backdrop-sepia-100', 'backdrop-sepia-100'])

    expect([transformProperty('backdropFilter', 'sepia(2)'), transformProperty('backdropFilter', 'sepia(200%)')])
      .toEqual(['backdrop-sepia-200', 'backdrop-sepia-200'])
  })
})

describe('URL', () => {
  it.skip('NOT on unocss', () => {
    expect(transformProperty('backdropFilter', 'url(filter.svg#filter-id)'))
  })
})

describe('multiple filters', () => {
  it('should work properly', () => {
    expect(transformProperty('backdropFilter', 'contrast(175%) brightness(3%)'))
      .toBe('backdrop-contrast-175 backdrop-brightness-3')

    expect(transformProperty('backdropFilter', 'drop-shadow(3px 3px red) sepia(100%)'))
      .toBe('backdrop-drop-shadow-[3px_3px_red] backdrop-sepia-100')
  })
})
