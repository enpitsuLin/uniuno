import { hexRegexp } from './regexp'

export function bracketWithHint(value: string, hint?: string) {
  return `[${hint ? `${hint}:` : ''}${value.replace(/ /g, '_')}]`
}

const functionRegexp = /^(.+)\((.+)\)$/
const argumentsRegexp = /(\d+|\.\d+)(\.\d+)?(%|deg|turn)?/g

export function parseColor(str: string): string | undefined {
  if (!str)
    return
  if (str.match(hexRegexp))
    return str
  if (str.match(/rgb|hsl|hwb|lch|lab/)) {
    const [, type, args] = str.match(functionRegexp) as [string, string, string]
    if (type && args) {
      const [v1, v2, v3, a] = args.match(argumentsRegexp) as [string, string, string, string | undefined]

      if (v1 && v2 && v3)
        return bracketWithHint(`${type}(${v1} ${v2} ${v3})`) + (a ? `/${parsepercent(a)}` : '')
    }

    return bracketWithHint(str.replace(/ /g, '_'))
  }

  return str
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function parsepercent(str: string) {
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

  test('parsepercent work properly', () => {
    expect(parsepercent('.2')).toBe(20)
    expect(parsepercent('90%')).toBe(90)
  })

  test('toFraction work properly', () => {
    expect(toFraction('50%')).toBe('1/2')
    expect(toFraction('25%')).toBe('1/4')
    expect(toFraction('8.333333%')).toBe('8.333333%')
    expect(toFraction('33.333333%')).toBe('33.333333%')
    expect(toFraction('11.111111%')).toBe('11.111111%')
  })
}
