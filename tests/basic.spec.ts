import { propertiesToUnocss } from '../src';
import { it, expect, describe } from 'vitest';

describe('not shortcut properties', () => {
  it('transform flex basis properly', () => {
    const ret = propertiesToUnocss({ flexBasis: '1px' });

    expect(ret).toEqual('flex-basis-1px');
  });
});
