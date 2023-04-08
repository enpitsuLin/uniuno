import type { Rule } from '~/types'
import { bracketWithHint, parseAngle, parsePercent } from '~/utils'
import { filterFunction } from '~/utils/regexp'

export const filterRules: Rule[] = [
  [
    /^filter: (.+)$/g,
    (_, p1: string) => {
      const list = p1.split(filterFunction)
      const fns = p1.match(filterFunction) as string[]
      const args = list.filter(i => i !== '')
      return fns.map((fn, index) => {
        const value = args[index].trim().replace(/\(|\)/g, '')
        if (fn === 'blur')
          return `blur-${value}`
        else if (fn === 'brightness')
          return `brightness-${parsePercent(value)}`
        else if (fn === 'contrast')
          return `contrast-${parsePercent(value)}`
        else if (fn === 'drop-shadow')
          return `drop-shadow-${bracketWithHint(value)}`
        else if (fn === 'grayscale')
          return `grayscale-${parsePercent(value)}`
        else if (fn === 'hue-rotate')
          return `${value.startsWith('-') ? '-' : ''}hue-rotate-${parseAngle(value.replace('-', ''))}`
        else if (fn === 'invert')
          return `invert-${parsePercent(value)}`
        else if (fn === 'saturate')
          return `saturate-${parsePercent(value)}`
        else if (fn === 'sepia')
          return `sepia-${parsePercent(value)}`
        return ''
      }).join(' ')
    },
  ],
]
