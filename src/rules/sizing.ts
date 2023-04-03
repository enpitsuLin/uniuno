import { Rule } from '../types';
import { toFraction } from '../utils';

const parseSizing = (input: string, prefix: string) => {
  if (input.includes('%')) return `${prefix}-${toFraction(input)}`;
  return `${prefix}-${input}`;
};

export const sizingRules: Rule[] = [
  // width
  [/^width: (.+)$/, (_, p1) => parseSizing(p1, 'w')],
  // min-width
  [/^min-width: (.+)$/, (_, p1) => parseSizing(p1, 'min-w')],
  // max-width
  [/^max-width: (.+)$/, (_, p1) => parseSizing(p1, 'max-w')],

  // height
  [/^height: (.+)$/, (_, p1) => parseSizing(p1, 'h')],
  // min-height
  [/^min-height: (.+)$/, (_, p1) => parseSizing(p1, 'min-h')],
  // max-height
  [/^max-height: (.+)$/, (_, p1) => parseSizing(p1, 'max-h')]
];
