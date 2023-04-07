import type { Rule } from '~/types'

export const columnsRules: Rule[] = [
  [/^columns: ([\S]+)$/, 'columns-$1'],
  [/^columns: ([\S]+) ([\S]+)$/, 'columns-[$1_$2]'],
]
export const columnCountRules: Rule[] = [
  [/^column-count: (.+)$/, 'columns-$1'],
]
export const columnWidthRules: Rule[] = [
  [/^column-width: (.+)$/, 'columns-$1'],
]
