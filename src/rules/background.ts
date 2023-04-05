import type { Rule } from '../types'
import { bracketWithHint, parseColor, positionMap } from '../utils'

export const backgroundRules: Rule[] = [
  // color
  [/^background-color: var\(--(.+)\)$/, (_, p1) => `bg-$${p1}`],
  [/^background-color: (.+)$/, (_, p1) => `bg-${parseColor(p1)}`],

  // TODO: gradient
  //   gradient background to `bg-gradient-[type] form-[color] via-[color] to-[color]`
  //   gradient background shape to `bg-gradient-[position]`

  // images
  [/^background-image: none$/, 'bg-none'],
  [/^background-image: url\((".+")\)$/, 'bg-[url($1)]'],

  // size
  [/^background-size: (\S+)$/, 'bg-$1'],
  [/^background-size: (.+)$/, (_, p1) => `bg-${bracketWithHint(p1, 'length')}`],

  // attachments
  [/^background-attachment: (.+)$/, 'bg-$1'],

  // clips
  [/^background-clip: (.+)$/, (_, p1) => `bg-clip-${p1.replace(/-box$/, '')}`],

  // position
  [
    /^background-position: (.+)$/,
    (_, p1) => {
      const position = positionMap[p1]
      if (position)
        return `bg-${positionMap[p1]}`
      return `bg-${bracketWithHint(p1, 'position')}`
    },
  ],
  [
    /^background-position-[x|y]: (.+)$/,
    new Error('background-position-x|y didn\'t support in unocss'),
  ],

  // repeats
  [
    /^background-repeat: (.+)$/,
    (_, p1) => {
      if (p1 === 'no-repeat')
        return 'bg-no-repeat'

      else if (['round', 'space'].includes(p1))
        return `bg-repeat-${p1}`

      return `bg-${p1}`
    },
  ],
  // origins
  [
    /^background-origin: (.+)$/,
    (_, p1) => `bg-origin-${p1.replace(/-box$/, '')}`,
  ],
]
