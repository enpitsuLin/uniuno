import { transformProperty } from '~/transform'

test('<length> values', () => {
  expect(transformProperty('borderSpacing', '2px'))
    .toBe('border-spacing-2px')

  expect(transformProperty('borderSpacing', '2px 2px'))
    .toBe('border-spacing-x-2px border-spacing-y-2px')
})
