import { transformProperty } from './transform';
import { StandardProperties, StandardProperty } from './types';

export function propertiesToUnocss(css: StandardProperties): string {
  return Object.entries(css)
    .map(([property, value]) =>
      transformProperty(property as StandardProperty, value)
    )
    .join(' ');
}
