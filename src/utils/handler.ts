import { hexRegexp } from './regexp';

export function bracketWithHint(value: string, hint?: string) {
  return `[${hint ? `${hint}:` : ''}${value.replace(/ /g, '_')}]`;
}

export function parseColor(str: string): string | undefined {
  if (!str) return;
  if (str.match(hexRegexp)) return str;
  if (str.match(/[(]|[)]/)) return bracketWithHint(str.replace(/ /g, ''));
  return str;
}
