import { Rule } from '../types';
import { bracketWithHint, cornersMap } from '../utils';
import camelCase from 'camelcase';

export const borderRules: Rule[] = [
  // border-radius
  [/^border-radius: var\(--(.+)\)$/, (_, p1) => `rounded-$${p1}`],
  [
    /^border-radius: (.+)$/,
    (_, p1) => {
      if (p1 === '9999px') return `rounded-full`;
      if (p1 === '0') return `rounded-none`;
      if (p1.includes(' ')) return `rounded-${bracketWithHint(p1)}`;
      return `rounded-${p1}`;
    }
  ],
  [
    /^border-(.+)-radius: var\(--(.+)\)$/,
    (_, p1, p2) => {
      const corner = cornersMap[camelCase(p1)];
      return `rounded-${corner}-$${p2}`;
    }
  ],
  [
    /^border-(.+)-radius: (.+)$/,
    (_, p1, p2) => {
      const corner = cornersMap[camelCase(p1)];
      if (p2 === '9999px') return `rounded-${corner}-full`;
      if (p2 === '0') return `rounded-${corner}-none`;
      if (p2.includes(' ')) return `rounded-${corner}-${bracketWithHint(p2)}`;
      return `rounded-${corner}-${p2}`;
    }
  ]
];
