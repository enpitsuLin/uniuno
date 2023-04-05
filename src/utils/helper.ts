import { hexRegexp } from './regexp'

export function bracketWithHint(value: string, hint?: string) {
  return `[${hint ? `${hint}:` : ''}${value.replace(/ /g, '_')}]`
}

export function parseColor(str: string): string | undefined {
  if (!str)
    return
  if (str.match(hexRegexp))
    return str
  if (str.match(/[(]|[)]/))
    return bracketWithHint(str.replace(/ /g, ''))
  return str
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function parsePrecent(str: string) {
  if (!str)
    return
  const value = parseFloat(str)
  if (value <= 1)
    return value * 100
  else return value
}

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b)
}

export function toFraction(input: string): string {
  let num: number
  if (input.includes('.')) {
    return input
  }
  else {
    num = parseInt(input) / 100
    let denominator = 1
    while (num % 1 !== 0) {
      num *= 10
      denominator *= 10
    }
    const numerator = num
    const denominatorGcd = gcd(numerator, denominator)
    const simplifiedNumerator = numerator / denominatorGcd
    const simplifiedDenominator = denominator / denominatorGcd
    return `${simplifiedNumerator}/${simplifiedDenominator}`
  }
}

if (import.meta.vitest) {
  const { expect, test } = import.meta.vitest

  test('capitalize work properly', () => {
    expect(capitalize('abnormal')).toEqual('Abnormal')

    expect(capitalize('wordNotExist')).toEqual('WordNotExist')
  })

  test('parsePrecent work properly', () => {
    expect(parsePrecent('.2')).toBe(20)
    expect(parsePrecent('90%')).toBe(90)
  })

  test('toFraction work properly', () => {
    expect(toFraction('50%')).toBe('1/2')
    expect(toFraction('25%')).toBe('1/4')
    expect(toFraction('8.333333%')).toBe('8.333333%')
    expect(toFraction('33.333333%')).toBe('33.333333%')
    expect(toFraction('11.111111%')).toBe('11.111111%')
  })
}
