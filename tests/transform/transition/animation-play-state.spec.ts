import { transformProperty } from '~/transform'

test('single animation', () => {
  expect(transformProperty('animationPlayState', 'running'))
    .toBe('animate-play-state-running')
  expect(transformProperty('animationPlayState', 'paused'))
    .toBe('animate-play-state-paused')
})
test('multiple animation', () => {
  it.skip('NOT in unocss', () => {
    expect(transformProperty('animationPlayState', 'running, pasused'))
      .toBe('animate-play-state-[running,_pasused]')
  })
})
