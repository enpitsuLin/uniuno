export function bracketWithHint(value: string, hint?: string) {
  return `[${hint ? `${hint}:` : ''}${value.replace(' ', '_')}]`;
}
