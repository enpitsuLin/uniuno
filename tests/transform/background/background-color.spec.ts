import { transformProperty } from '~/transform'
import { parsePercent } from '~/utils'

describe('sRGB color space', () => {
  test('named color', () => {
    expect(transformProperty('backgroundColor', 'white')).toBe('bg-white')

    expect(transformProperty('backgroundColor', 'black')).toBe('bg-black')
  })

  test('hex value', () => {
    expect(transformProperty('backgroundColor', '#fff')).toBe('bg-#fff')

    expect(transformProperty('backgroundColor', '#0000')).toBe('bg-#0000')

    expect(transformProperty('backgroundColor', '#abcdef')).toBe('bg-#abcdef')

    expect(transformProperty('backgroundColor', '#abcdef00')).toBe('bg-#abcdef00')
  })
  test('rgb function value', () => {
    // work with legacy `rgba()` syntax
    ['rgb', 'rgba'].forEach((name) => {
      [
        { r: '31', g: '120', b: '50' },
        { r: '30%', g: '20%', b: '50%' },
        { r: '255', g: '122', b: '127', a: '80%' },
        { r: '255', g: '122', b: '127', a: '.2' },
      ].forEach(({ r, g, b, a }) => {
        const expectOut = a ? `bg-[${name}(${r}_${g}_${b})]/${parsePercent(a)}` : `bg-[${name}(${r}_${g}_${b})]`

        expect(
          transformProperty(
            'backgroundColor',
            a ? `${name}(${r} ${g} ${b} / ${a})` : `${name}(${r} ${g} ${b})`,
          ),
          'Syntax with space-separated values',
        )
          .toBe(expectOut)

        expect(
          transformProperty(
            'backgroundColor',
            a ? `${name}(${r}, ${g}, ${b}, ${a})` : `${name}(${r}, ${g}, ${b})`,
          ),
          'Syntax with comma-separated values',
        )
          .toBe(expectOut)
      })
    })
  })

  test('hsl function value', () => {
    // work with legacy `hsla()` syntax
    ['hsl', 'hsla'].forEach((name) => {
      [
        { h: '50', l: '80%', s: '40%' },
        { h: '150deg', l: '30%', s: '60%' },
        { h: '0.3turn', l: '60%', s: '45%', a: '.7' },
        { h: '0', l: '80%', s: '50%', a: '25%' },
      ].forEach(({ h, s, l, a }) => {
        const expectOut = a ? `bg-[${name}(${h}_${s}_${l})]/${parsePercent(a)}` : `bg-[${name}(${h}_${s}_${l})]`

        expect(
          transformProperty(
            'backgroundColor',
            a ? `${name}(${h} ${s} ${l} / ${a})` : `${name}(${h} ${s} ${l})`,
          ),
          'Syntax with space-separated values',
        )
          .toBe(expectOut)

        expect(
          transformProperty(
            'backgroundColor',
            a ? `${name}(${h}, ${s}, ${l}, ${a})` : `${name}(${h}, ${s}, ${l})`,
          ),
          'Syntax with comma-separated values',
        )
          .toBe(expectOut)
      })
    })
  })

  test('hwb function value', () => {
    expect(transformProperty('backgroundColor', 'hwb(12 50% 0%)'))
      .toBe('bg-[hwb(12_50%_0%)]')

    expect(transformProperty('backgroundColor', 'hwb(50deg 30% 40%)'))
      .toBe('bg-[hwb(50deg_30%_40%)]')

    expect(transformProperty('backgroundColor', 'hwb(0.5turn 10% 0% / .5)'))
      .toBe('bg-[hwb(0.5turn_10%_0%)]/50')

    expect(transformProperty('backgroundColor', 'hwb(0 100% 0% / 50%)'))
      .toBe('bg-[hwb(0_100%_0%)]/50')
  })
})

describe('any visible color', () => {
  test('lch function value', () => {
    expect(transformProperty('backgroundColor', 'lch(29.2345% 44.2 27)'))
      .toBe('bg-[lch(29.2345%_44.2_27)]')

    expect(transformProperty('backgroundColor', 'lch(52.2345% 72.2 56.2)'))
      .toBe('bg-[lch(52.2345%_72.2_56.2)]')

    expect(transformProperty('backgroundColor', 'lch(52.2345% 72.2 56.2 / .5)'))
      .toBe('bg-[lch(52.2345%_72.2_56.2)]/50')
  })

  test('oklch function value', () => {
    expect(transformProperty('backgroundColor', 'oklch(40.1% 0.123 21.57)'))
      .toBe('bg-[oklch(40.1%_0.123_21.57)]')

    expect(transformProperty('backgroundColor', 'oklch(59.69% 0.156 49.77)'))
      .toBe('bg-[oklch(59.69%_0.156_49.77)]')

    expect(transformProperty('backgroundColor', 'oklch(59.69% 0.156 49.77 / .5)'))
      .toBe('bg-[oklch(59.69%_0.156_49.77)]/50')
  })

  test('lab function value', () => {
    expect(transformProperty('backgroundColor', 'lab(29.2345% 39.3825 20.0664)'))
      .toBe('bg-[lab(29.2345%_39.3825_20.0664)]')

    expect(transformProperty('backgroundColor', 'lab(52.2345% 40.1645 59.9971)'))
      .toBe('bg-[lab(52.2345%_40.1645_59.9971)]')

    expect(transformProperty('backgroundColor', 'lab(52.2345% 40.1645 59.9971 / .5)'))
      .toBe('bg-[lab(52.2345%_40.1645_59.9971)]/50')
  })

  test('lab function value', () => {
    expect(transformProperty('backgroundColor', 'lab(40.1% 0.1143 0.045)'))
      .toBe('bg-[lab(40.1%_0.1143_0.045)]')

    expect(transformProperty('backgroundColor', 'lab(59.69% 0.1007 0.1191)'))
      .toBe('bg-[lab(59.69%_0.1007_0.1191)]')

    expect(transformProperty('backgroundColor', 'lab(59.69% 0.1007 0.1191 / 0.5)'))
      .toBe('bg-[lab(59.69%_0.1007_0.1191)]/50')
  })
})

test('css variables value', () => {
  expect(transformProperty('backgroundColor', 'var(--background-color)'))
    .toBe('bg-$background-color')
})
