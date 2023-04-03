import { propertiesToUnocss } from '../src';

describe('Width', () => {
  it('transform all unit properly', () => {
    expect(propertiesToUnocss({ width: '1px' })).toEqual('w-1px');

    expect(propertiesToUnocss({ width: '1rem' })).toEqual('w-1rem');

    expect(propertiesToUnocss({ width: '50%' })).toEqual('w-1/2');

    expect(propertiesToUnocss({ width: '66.66%' })).toEqual('w-66.66%');
  });
});

describe('Min-Width', () => {
  it('transform all unit properly', () => {
    expect(propertiesToUnocss({ minWidth: '1px' })).toEqual('min-w-1px');

    expect(propertiesToUnocss({ minWidth: '1rem' })).toEqual('min-w-1rem');

    expect(propertiesToUnocss({ minWidth: '50%' })).toEqual('min-w-1/2');

    expect(propertiesToUnocss({ minWidth: '66.66%' })).toEqual('min-w-66.66%');
  });
});

describe('Max-Width', () => {
  it('transform all unit properly', () => {
    expect(propertiesToUnocss({ maxWidth: '1px' })).toEqual('max-w-1px');

    expect(propertiesToUnocss({ maxWidth: '1rem' })).toEqual('max-w-1rem');

    expect(propertiesToUnocss({ maxWidth: '50%' })).toEqual('max-w-1/2');

    expect(propertiesToUnocss({ maxWidth: '66.66%' })).toEqual('max-w-66.66%');
  });
});

describe('Height', () => {
  it('transform all unit properly', () => {
    expect(propertiesToUnocss({ height: '1px' })).toEqual('h-1px');

    expect(propertiesToUnocss({ height: '1rem' })).toEqual('h-1rem');

    expect(propertiesToUnocss({ height: '50%' })).toEqual('h-1/2');

    expect(propertiesToUnocss({ height: '66.66%' })).toEqual('h-66.66%');
  });
});

describe('Min-Height', () => {
  it('transform all unit properly', () => {
    expect(propertiesToUnocss({ minHeight: '1px' })).toEqual('min-h-1px');

    expect(propertiesToUnocss({ minHeight: '1rem' })).toEqual('min-h-1rem');

    expect(propertiesToUnocss({ minHeight: '50%' })).toEqual('min-h-1/2');

    expect(propertiesToUnocss({ minHeight: '66.66%' })).toEqual('min-h-66.66%');
  });
});

describe('Max-Height', () => {
  it('transform all unit properly', () => {
    expect(propertiesToUnocss({ maxHeight: '1px' })).toEqual('max-h-1px');

    expect(propertiesToUnocss({ maxHeight: '1rem' })).toEqual('max-h-1rem');

    expect(propertiesToUnocss({ maxHeight: '50%' })).toEqual('max-h-1/2');

    expect(propertiesToUnocss({ maxHeight: '66.66%' })).toEqual('max-h-66.66%');
  });
});
