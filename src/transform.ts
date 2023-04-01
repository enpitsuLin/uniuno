import kebabCase from 'kebab-case';
import { SHORTHAND_NOT_SUPPORT } from './constants';
import {
  StandardProperties,
  StandardProperty,
  StandardShorthandProperty
} from './types';

function isShorthandProperty(
  property: any
): property is StandardShorthandProperty {
  return SHORTHAND_NOT_SUPPORT.includes(property);
}

export function transformProperty<P extends StandardProperty>(
  property: P,
  value: StandardProperties[P]
): string {
  if (isShorthandProperty(property)) {
    // TODO: convert shorthand to longhand or just use value directly
    throw new Error("Shorthand properties don't support");
  }
  if (false) {
    // TODO: to transform special utilities
  }
  return `${kebabCase(property)}-${value}`;
}
