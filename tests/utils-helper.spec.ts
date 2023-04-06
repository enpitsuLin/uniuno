import { capitalize, parseColor, parsePercent, toFraction } from '~/utils'

test('capitalize work properly', () => {
  expect(capitalize('abnormal')).toEqual('Abnormal')

  expect(capitalize('wordNotExist')).toEqual('WordNotExist')
})

test('parsepercent work properly', () => {
  expect(parsePercent('.2')).toBe(20)
  expect(parsePercent('90%')).toBe(90)
})

test('toFraction work properly', () => {
  expect(toFraction('50%')).toBe('1/2')
  expect(toFraction('25%')).toBe('1/4')
  expect(toFraction('8.333333%')).toBe('8.333333%')
  expect(toFraction('33.333333%')).toBe('33.333333%')
  expect(toFraction('11.111111%')).toBe('11.111111%')
})

describe('parseColor()', () => {
  it('parse hex color values work properly', () => {
    expect(parseColor('#fff')).toBe('#fff')
    expect(parseColor('#5555')).toBe('#5555')
  })

  it('parse color on color function w/o alpha work properly', () => {
    expect(parseColor('rgb(31 120 50)')).toBe('[rgb(31_120_50)]')
    expect(parseColor('rgb(30% 20% 50%)')).toBe('[rgb(30%_20%_50%)]')

    expect(parseColor('hsl(50 80% 40%)')).toBe('[hsl(50_80%_40%)]')
    expect(parseColor('hsl(150deg 30% 60%)')).toBe('[hsl(150deg_30%_60%)]')

    expect(parseColor('hwb(12 50% 0%)')).toBe('[hwb(12_50%_0%)]')
    expect(parseColor('hwb(50deg 30% 40%)')).toBe('[hwb(50deg_30%_40%)]')
  })

  it('parse color on color function w/ alpha work properly', () => {
    expect(parseColor('rgb(255 122 127 / 80%)')).toBe('[rgb(255_122_127)]/80')
    expect(parseColor('rgb(255 122 127 / .2)')).toBe('[rgb(255_122_127)]/20')

    expect(parseColor('hsl(0.3turn 60% 45% / .7)')).toBe('[hsl(0.3turn_60%_45%)]/70')
    expect(parseColor('hsl(0 80% 50% / 25%)')).toBe('[hsl(0_80%_50%)]/25')

    expect(parseColor('hwb(0.5turn 10% 0% / .5)')).toBe('[hwb(0.5turn_10%_0%)]/50')
    expect(parseColor('hwb(0 100% 0% / 50%)')).toBe('[hwb(0_100%_0%)]/50')
  })

  it.skip('any visible color with `lch`/`oklch`/`lab`/`oklab` didn\'t support right now will throw error', () => {
    expect(parseColor('lch(29.2345% 44.2 27)'))
  })
})

test('parseLength work properly', () => { })
