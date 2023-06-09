import {
  colorFunctionArgs, colorFunctionRegexp,
  hexRegexp,
} from './regexp'

export function bracketWithHint(value: string, hint?: string) {
  return `[${hint ? `${hint}:` : ''}${value.replace(/ /g, '_')}]`
}

export function parseColor(str: string): string | undefined {
  if (!str)
    return
  if (str.match(hexRegexp))
    return str
  if (str.match(/rgb|hsl|hwb|lch|lab/)) {
    const [, type, args] = str.match(colorFunctionRegexp) as [string, string, string]
    if (type && args) {
      const [v1, v2, v3, a] = args.match(colorFunctionArgs) as [string, string, string, string | undefined]
      if (type.includes('rgb'))
        return bracketWithHint(`${type}(${v1} ${v2} ${v3}${a ? ` ${a}` : ''})`)
      if (v1 && v2 && v3)
        return bracketWithHint(`${type}(${v1} ${v2} ${v3})`) + (a ? `/${parsePercent(a)}` : '')
    }

    return bracketWithHint(str.replace(/ /g, '_'))
  }
  if (str.match(/color/))
    // TODO: handle this
    return str

  return str
}

export function parseLength(str: string, hint?: string) {
  if (!str)
    return
  if (str.match(/ /))
    return bracketWithHint(str.replace(/ /g, '_'), hint)
  return str
}

export function capitalize<T extends string>(string: T): Capitalize<T> {
  return string.charAt(0).toUpperCase() + string.slice(1) as unknown as Capitalize<T>
}

export function parsePercent(str: string) {
  if (!str)
    return
  const value = parseFloat(str)
  if (!str.includes('%'))
    return value * 100
  else return value
}

export function parseAngle(str: string) {
  if (!str)
    return
  if (str.includes('deg'))
    return parseFloat(str).toString()
  return str
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
