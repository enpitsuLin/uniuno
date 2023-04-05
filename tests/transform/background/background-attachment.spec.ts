import { transformProperty } from '~/transform'

test('Keyword value', () => {
  expect(transformProperty('backgroundAttachment', 'fixed'))
    .toBe('bg-fixed')

  expect(transformProperty('backgroundAttachment', 'local'))
    .toBe('bg-local')

  expect(transformProperty('backgroundAttachment', 'scroll'))
    .toBe('bg-scroll')
})
