import { transformProperty } from '~/transform'

test('keyword values', () => {
  (<const>['color', 'color-burn', 'color-dodge', 'darken',
    'difference', 'exclusion', 'hard-light', 'hue',
    'lighten', 'luminosity', 'multiply', 'normal',
    'overlay', 'saturation', 'screen', 'soft-light']).forEach((mode) => {
    expect(transformProperty('backgroundBlendMode', mode)).toBe(`bg-blend-${mode}`)
  })
})
