import type { Rule } from '~/types'
import { bracketWithHint, parseAngle, parsePercent } from '~/utils'
import { filterFunction } from '~/utils/regexp'

export const filterRules: Rule[] = [
  [
    /^(backdrop-)?filter: (.+)$/g,
    (_, p1, p2: string) => {
      const list = p2.split(filterFunction)
      const fns = p2.match(filterFunction) as string[]
      const args = list.filter(i => i !== '')
      return fns.map((fn, index) => {
        const value = args[index].trim().replace(/\(|\)/g, '')
        let ret = ''
        if (fn === 'blur')
          ret = `blur-${value}`
        else if (fn === 'brightness')
          ret = `brightness-${parsePercent(value)}`
        else if (fn === 'contrast')
          ret = `contrast-${parsePercent(value)}`
        else if (fn === 'drop-shadow')
          ret = `drop-shadow-${bracketWithHint(value)}`
        else if (fn === 'grayscale')
          ret = `grayscale-${parsePercent(value)}`
        else if (fn === 'hue-rotate')
          ret = `${value.startsWith('-') ? '-' : ''}hue-rotate-${parseAngle(value.replace('-', ''))}`
        else if (fn === 'invert')
          ret = `invert-${parsePercent(value)}`
        else if (fn === 'saturate')
          ret = `saturate-${parsePercent(value)}`
        else if (fn === 'sepia')
          ret = `sepia-${parsePercent(value)}`
        else if (fn === 'opacity')
          ret = `opacity-${parsePercent(value)}`
        return `${p1 ?? ''}${ret}`
      }).join(' ')
    },
  ],
]
