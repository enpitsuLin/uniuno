import type * as CSS from 'csstype';

export type StandardProperties = Omit<
  CSS.Properties,
  keyof CSS.VendorProperties | `Moz${string}` | `Webkit${string}`
>;
/**
 * some shorthand was wrong definition in `csstype`
 */
export type StandardLonghandProperties = Pick<
  StandardProperties,
  keyof Omit<CSS.StandardLonghandProperties, 'inset' | 'placeContent'>
>;

export type StandardShorthandProperties = Pick<
  StandardProperties,
  keyof CSS.StandardShorthandProperties | 'inset' | 'placeContent'
>;

export type StandardLonghandProperty = keyof StandardLonghandProperties;
export type StandardShorthandProperty = keyof StandardShorthandProperties;

export type StandardProperty =
  | StandardLonghandProperty
  | StandardShorthandProperty;

export type RuleReplacer = Parameters<String['replace']>[1] | string;
export type Rule = [regexp: RegExp, replacer: RuleReplacer | Error];
