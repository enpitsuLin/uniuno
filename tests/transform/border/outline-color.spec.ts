import { transformProperty } from '~/transform'

test('<color> values', () => {
  expect(transformProperty('outlineColor', 'red'))
    .toBe('outline-red')

  expect(transformProperty('outlineColor', '#fff'))
    .toBe('outline-#fff')

  expect(transformProperty('outlineColor', 'rgba(255,255,255)'))
    .toBe('outline-[rgb(255,255,255)]')
})
