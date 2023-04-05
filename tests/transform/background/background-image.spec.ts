import { transformProperty } from '~/transform'

test('url() data type', () => {
  expect(transformProperty('backgroundImage', 'url("./bg.png")'))
    .toBe('bg-[url("./bg.png")]')

  expect(transformProperty('backgroundImage', 'url("./bg-1.png"),url("./bg-2.png")'))
    .toBe('bg-[url("./bg-1.png"),url("./bg-2.png")]')
})

test.skip('<gradient> data type', () => {
  transformProperty('backgroundImage', 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))')
})
