import kebabCase from 'kebab-case';
import { backgroundRules } from './rules/background';
import { Rule, StandardProperties, StandardProperty } from './types';

export function transformProperty<P extends StandardProperty>(
  property: P,
  value: StandardProperties[P]
): string {
  let ret: string | undefined = undefined;
  shortcutPropertiesRules.some(([regexp, replaceTo]) => {
    const CSSValue = `${kebabCase(property)}: ${value}`;

    if (CSSValue.match(regexp)) {
      //@ts-expect-error: as its overload but error
      ret = CSSValue.replace(regexp, replaceTo);
    }

    return CSSValue.match(regexp);
  });
  if (!ret) return `${kebabCase(property)}-${value}`;
  return ret;
}

export const shortcutPropertiesRules: Rule[] = [
  [/^width: var\(--(.+)\)$/, (_, p1) => `w-$${p1}`],
  [/^width: (.+)$/, 'w-$1'],
  [/^height: var\(--(.+)\)$/, (_, p1) => `h-$${p1}`],
  [/^height: (.+)$/, 'h-$1'],
  ...backgroundRules
];
