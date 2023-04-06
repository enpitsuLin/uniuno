import { transformProperty } from '~/transform'

test('vendor property will error', () => {
  const spy = vi.spyOn(console, 'error')
  transformProperty('WebkitAlignContent', 'center')
  expect(spy).toBeCalledTimes(1)
})
