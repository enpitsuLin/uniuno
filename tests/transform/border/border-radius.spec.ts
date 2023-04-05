import { transformProperty } from '~/transform'
import type { Corners } from '~/types'
import { capitalize, cornersMap } from '~/utils'

describe('Radius shorthand', () => {
  it('radius for all 4 sides', () => {
    expect(transformProperty('borderRadius', '0'))
      .toBe('rounded-none')

    expect(transformProperty('borderRadius', '1rem'))
      .toBe('rounded-1rem')

    expect(transformProperty('borderRadius', '9999px'))
      .toBe('rounded-full')
  })
  it('radius for other values', () => {
    expect(transformProperty('borderRadius', '1rem 1rem 1rem 1rem'))
      .toBe('rounded-[1rem_1rem_1rem_1rem]')

    expect(transformProperty('borderRadius', 'var(--border-radius)'))
      .toBe('rounded-$border-radius')
  })
})

describe('Radius longhand', () => {
  it('border-radius with corners properly', () => {
    Object.entries(cornersMap).forEach(([key, value]) => {
      const property = `border${capitalize(key)}Radius` as `border${Capitalize<Corners>}Radius`

      expect(transformProperty(property, '0'))
        .toBe(`rounded-${value}-none`)

      expect(transformProperty(property, '1rem'))
        .toBe(`rounded-${value}-1rem`)

      expect(transformProperty(property, '9999px'))
        .toBe(`rounded-${value}-full`)

      expect(transformProperty(property, 'var(--border-radius)'))
        .toBe(`rounded-${value}-$border-radius`)
    })
  })
})
