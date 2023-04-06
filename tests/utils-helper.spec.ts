import { capitalize, parsepercent, toFraction } from '~/utils'

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
