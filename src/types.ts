import type * as CSS from 'csstype'

export type CSSProperties = CSS.Properties

export type CSSProperty = keyof CSSProperties

export type RuleReplacer = Parameters<String['replace']>[1] | string
export type Rule = [regexp: RegExp, replacer: RuleReplacer | Error]
