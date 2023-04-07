import { transformProperty } from '~/transform'

test('keyword values', () => {
  expect(transformProperty('captionSide', 'top'))
    .toBe('caption-top')

  expect(transformProperty('captionSide', 'bottom'))
    .toBe('caption-bottom')
})
