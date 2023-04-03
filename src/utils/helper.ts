export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const gcd = (a: number, b: number): number => {
  return b === 0 ? a : gcd(b, a % b);
};

export function toFraction(input: string): string {
  let num: number;
  if (input.includes('.')) {
    return input;
  } else {
    num = parseInt(input) / 100;
    let denominator = 1;
    while (num % 1 !== 0) {
      num *= 10;
      denominator *= 10;
    }
    const numerator = num;
    const denominatorGcd = gcd(numerator, denominator);
    const simplifiedNumerator = numerator / denominatorGcd;
    const simplifiedDenominator = denominator / denominatorGcd;
    return `${simplifiedNumerator}/${simplifiedDenominator}`;
  }
}

if (import.meta.vitest) {
  const { expect, it, describe } = import.meta.vitest;
  describe('capitalize', () => {
    it(`capitalize work properly`, () => {
      expect(capitalize('abnormal')).toEqual('Abnormal');

      expect(capitalize('wordNotExist')).toEqual('WordNotExist');
    });
  });

  describe('toFraction', () => {
    it('toFraction work properly', () => {
      expect(toFraction('50%')).toBe('1/2');
      expect(toFraction('25%')).toBe('1/4');
      expect(toFraction('8.333333%')).toBe('8.333333%');
      expect(toFraction('33.333333%')).toBe('33.333333%');
      expect(toFraction('11.111111%')).toBe('11.111111%');
    });
  });
}
