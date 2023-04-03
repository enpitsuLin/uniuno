import { propertiesToUnocss } from '../src';
import { capitalize, directionMap } from '../src/utils';

describe('Padding', () => {
  it('transform padding shorthand properly', () => {
    expect(propertiesToUnocss({ padding: '1px' })).toEqual('p-1px');

    expect(propertiesToUnocss({ padding: '1rem' })).toEqual('p-1rem');

    expect(propertiesToUnocss({ padding: '1rem 1rem' })).toEqual(
      'p-[1rem_1rem]'
    );
  });

  it('transform padding shorthand with direction properly', () => {
    Object.entries(directionMap).forEach(([key, value]) => {
      const property = `padding${key}`;

      // use p-{direction}-{value} flavor
      expect(propertiesToUnocss({ [property]: '1px' })).toEqual(
        `p-${value}-1px`
      );

      // work but invalid
      expect(propertiesToUnocss({ [property]: '1rem 1rem' })).toEqual(
        `p-${value}-[1rem_1rem]`
      );
    });
  });
});

describe('Margin', () => {
  it('transform margin shorthand properly', () => {
    expect(propertiesToUnocss({ margin: '1px' })).toEqual('m-1px');

    expect(propertiesToUnocss({ margin: '1rem' })).toEqual('m-1rem');

    expect(propertiesToUnocss({ margin: '1rem 1rem' })).toEqual(
      'm-[1rem_1rem]'
    );
  });

  it('transform margin shorthand with direction properly', () => {
    Object.entries(directionMap).forEach(([key, value]) => {
      const property = `margin${capitalize(key)}`;

      // use p-{direction}-{value} flavor
      expect(propertiesToUnocss({ [property]: '1px' })).toEqual(
        `m-${value}-1px`
      );

      // work but invalid
      expect(propertiesToUnocss({ [property]: '1rem 1rem' })).toEqual(
        `m-${value}-[1rem 1rem]`
      );
    });
  });
});

describe.skip('Space between', () => {
  // nested css utilities
});
