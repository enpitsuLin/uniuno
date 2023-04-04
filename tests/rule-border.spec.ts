import { propertiesToUnocss } from '../src'
import { capitalize, cornersMap, directionMap } from '../src/utils'

describe('Border', () => {
  it('transform border-radius shorthand properly', () => {
    expect(propertiesToUnocss({ borderRadius: '0' })).toEqual('rounded-none')

    expect(propertiesToUnocss({ borderRadius: '1rem' })).toEqual(
      'rounded-1rem',
    )

    expect(propertiesToUnocss({ borderRadius: '9999px' })).toEqual(
      'rounded-full',
    )

    expect(propertiesToUnocss({ borderRadius: '1rem 1rem 1rem 1rem' })).toEqual(
      'rounded-[1rem_1rem_1rem_1rem]',
    )

    expect(
      propertiesToUnocss({ borderRadius: 'var(--border-radius)' }),
    ).toEqual('rounded-$border-radius')
  })

  it.skip('transform border-radius longhand with direction corners properly', () => {
    // like:
    // `border-start-start-radius: 1rem; border-start-end-radius: 1rem` => `rounded-s-1rem`
  })

  it('transform border-radius longhand with corners properly', () => {
    Object.entries(cornersMap).forEach(([key, value]) => {
      const property = `border${capitalize(key)}Radius`
      expect(propertiesToUnocss({ [property]: '0' })).toEqual(
        `rounded-${value}-none`,
      )

      expect(propertiesToUnocss({ [property]: '1rem' })).toEqual(
        `rounded-${value}-1rem`,
      )

      expect(propertiesToUnocss({ [property]: '9999px' })).toEqual(
        `rounded-${value}-full`,
      )

      expect(
        propertiesToUnocss({ [property]: 'var(--border-radius)' }),
      ).toEqual(`rounded-${value}-$border-radius`)
    })
  })

  // border-width
  it('transform border-width shorthand properly', () => {
    expect(propertiesToUnocss({ borderWidth: 'thin' })).toEqual('border-thin')

    expect(propertiesToUnocss({ borderWidth: '0px' })).toEqual('border-0')

    // there are two flavor `rounded` or `rounded-1`
    expect(propertiesToUnocss({ borderWidth: '1px' })).toEqual('border-1')

    expect(propertiesToUnocss({ borderWidth: '1rem 1rem 1rem 1rem' })).toEqual(
      'border-[width:1rem_1rem_1rem_1rem]',
    )

    const spy = vi.spyOn(console, 'error')
    propertiesToUnocss({ borderWidth: 'var(--border-width)' })
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it.skip('transform border-width longhand with axis properly', () => {
    // like:
    // `border-inline-start-radius: 1px; border-inline-end-radius: 1px` => `border-inline-1`
  })

  it('transform border-width longhand with direction properly', () => {
    Object.entries(directionMap).forEach(([key, value]) => {
      const property = `border${capitalize(key)}Width`

      expect(propertiesToUnocss({ [property]: 'thin' })).toEqual(
        `border-${value}-thin`,
      )

      expect(propertiesToUnocss({ [property]: '0' })).toEqual(
        `border-${value}-0`,
      )

      expect(propertiesToUnocss({ [property]: '1px' })).toEqual(
        `border-${value}-1`,
      )

      expect(propertiesToUnocss({ [property]: '1rem 1rem 1rem 1rem' })).toEqual(
        `border-${value}-[width:1rem_1rem_1rem_1rem]`,
      )
    })
  })

  // border-color
  it('transform border-color shorthand properly', () => {
    expect(propertiesToUnocss({ borderColor: '#fff' })).toEqual('border-#fff')

    expect(propertiesToUnocss({ borderColor: 'var(--border-color)' })).toEqual(
      'border-$border-color',
    )

    expect(propertiesToUnocss({ borderColor: 'rgb(255, 255, 255)' })).toEqual(
      'border-[rgb(255,255,255)]',
    )
  })

  it.skip('transform border-color longhand with axis properly', () => {
    // like:
    // `border-inline-start-color: #fff; border-inline-end-color: #fff` => `border-inline-#fff`
  })

  it('transform border-color longhand with direction properly', () => {
    Object.entries(directionMap).forEach(([key, value]) => {
      const property = `border${capitalize(key)}Color`

      expect(propertiesToUnocss({ [property]: '#fff' })).toEqual(
        `border-${value}-#fff`,
      )

      expect(propertiesToUnocss({ [property]: 'var(--border-color)' })).toEqual(
        `border-${value}-$border-color`,
      )

      expect(propertiesToUnocss({ [property]: 'rgb(255, 255, 255)' })).toEqual(
        `border-${value}-[rgb(255,255,255)]`,
      )
    })
  })

  // border-style
  it('transform border-style shorthand properly', () => {
    expect(propertiesToUnocss({ borderStyle: 'dotted' })).toEqual(
      'border-dotted',
    )
  })

  it.skip('there are no axis usage with border-style in unocss')

  it('transform border-style longhand with direction properly', () => {
    Object.entries(directionMap).forEach(([key, value]) => {
      const property = `border${capitalize(key)}Style`

      expect(propertiesToUnocss({ [property]: 'dotted' })).toEqual(
        `border-${value}-dotted`,
      )
    })
  })
})

describe.skip('Divide', () => {
  // divide was nested css utilities which doesn't implemented right now
})

describe('Outline', () => {
  it('transform outline-width properly', () => {
    expect(propertiesToUnocss({ outlineWidth: '0px' })).toEqual('outline-0')

    expect(propertiesToUnocss({ outlineWidth: '1px' })).toEqual('outline-1')
  })

  it('transform outline-color properly', () => {
    expect(propertiesToUnocss({ outlineColor: '#fff' })).toEqual(
      'outline-#fff',
    )

    expect(propertiesToUnocss({ outlineColor: 'rgb(255, 255, 255)' })).toEqual(
      'outline-[rgb(255,255,255)]',
    )
  })

  it('transform outline-style properly', () => {
    expect(propertiesToUnocss({ outlineStyle: 'solid' })).toEqual(
      'outline-solid',
    )

    expect(propertiesToUnocss({ outlineStyle: 'dashed' })).toEqual(
      'outline-dashed',
    )
  })

  it('transform outline-offset properly', () => {
    expect(propertiesToUnocss({ outlineOffset: '0px' })).toEqual(
      'outline-offset-0',
    )

    expect(propertiesToUnocss({ outlineOffset: '1px' })).toEqual(
      'outline-offset-1',
    )
  })
})

describe.skip('Ring', () => {})
