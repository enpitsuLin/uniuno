import { describe, expect, it } from 'vitest';
import { propertiesToUnocss } from '../src';
import { positionMap } from '../src/utils/mapping';

describe('background rules test', () => {
  it('transform background-image properly', () => {
    const ret = propertiesToUnocss({
      backgroundImage: 'url(".")'
    });

    expect(ret).toEqual(`bg-[url('.')]`);
  });

  it('transform background-image with css variables properly', () => {
    const ret = propertiesToUnocss({
      backgroundImage: 'var(--bg-var)'
    });

    expect(ret).toEqual(`bg-$bg-var`);
  });

  it('transform background-size properly', () => {
    expect(propertiesToUnocss({ backgroundSize: 'auto' })).toEqual(`bg-auto`);

    expect(propertiesToUnocss({ backgroundSize: 'cover' })).toEqual(`bg-cover`);

    expect(propertiesToUnocss({ backgroundSize: 'contain' })).toEqual(
      `bg-contain`
    );

    expect(propertiesToUnocss({ backgroundSize: '100% 100%' })).toEqual(
      `bg-[size:100%_100%]`
    );
  });

  it('transform background-attach properly', () => {
    expect(propertiesToUnocss({ backgroundAttachment: 'fixed' })).toEqual(
      `bg-fixed`
    );

    expect(propertiesToUnocss({ backgroundAttachment: 'local' })).toEqual(
      `bg-local`
    );

    expect(propertiesToUnocss({ backgroundAttachment: 'scroll' })).toEqual(
      `bg-scroll`
    );
  });

  it('transform background-clips properly', () => {
    expect(propertiesToUnocss({ backgroundClip: 'border-box' })).toEqual(
      `bg-clip-border`
    );

    expect(propertiesToUnocss({ backgroundClip: 'content-box' })).toEqual(
      `bg-clip-content`
    );

    expect(propertiesToUnocss({ backgroundClip: 'padding-box' })).toEqual(
      `bg-clip-padding`
    );

    expect(propertiesToUnocss({ backgroundClip: 'text' })).toEqual(
      `bg-clip-text`
    );
  });

  it('transform background-position properly', () => {
    Object.entries(positionMap).forEach(([key, value]) => {
      expect(propertiesToUnocss({ backgroundPosition: key })).toEqual(
        `bg-${value}`
      );
    });

    expect(propertiesToUnocss({ backgroundPosition: '100% 100%' })).toEqual(
        `bg-[position:100%_100%]`
      );
  });

  it('transform background-repeat properly', () => {
    expect(propertiesToUnocss({ backgroundRepeat: 'repeat' })).toEqual(
      `bg-repeat`
    );

    expect(propertiesToUnocss({ backgroundRepeat: 'no-repeat' })).toEqual(
      `bg-no-repeat`
    );

    expect(propertiesToUnocss({ backgroundRepeat: 'round' })).toEqual(
      `bg-repeat-round`
    );
  });

  it('transform background-origin properly', () => {
    expect(propertiesToUnocss({ backgroundOrigin: 'border-box' })).toEqual(
      `bg-origin-border`
    );

    expect(propertiesToUnocss({ backgroundOrigin: 'padding-box' })).toEqual(
      `bg-origin-padding`
    );

    expect(propertiesToUnocss({ backgroundOrigin: 'content-box' })).toEqual(
      `bg-origin-content`
    );
  });
});
