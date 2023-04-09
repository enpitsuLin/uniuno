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

        if (fn === 'blur')
          return `${p1 ?? ''}blur-${value}`
        else if (fn === 'brightness')
          return `${p1 ?? ''}brightness-${parsePercent(value)}`
        else if (fn === 'contrast')
          return `${p1 ?? ''}contrast-${parsePercent(value)}`
        else if (fn === 'drop-shadow')
          return `${p1 ?? ''}drop-shadow-${bracketWithHint(value)}`
        else if (fn === 'grayscale')
          return `${p1 ?? ''}grayscale-${parsePercent(value)}`
        else if (fn === 'hue-rotate')
          return `${value.startsWith('-') ? '-' : ''}${p1 ?? ''}hue-rotate-${parseAngle(value.replace('-', ''))}`
        else if (fn === 'invert')
          return `${p1 ?? ''}invert-${parsePercent(value)}`
        else if (fn === 'saturate')
          return `${p1 ?? ''}saturate-${parsePercent(value)}`
        else if (fn === 'sepia')
          return `${p1 ?? ''}sepia-${parsePercent(value)}`
        else if (fn === 'opacity')
          return `${p1 ?? ''}opacity-${parsePercent(value)}`
        return ''
      }).join(' ')
    },
  ],
]
