import { backgroundRules } from './background'
import * as border from './border'
import { sizingRules } from './sizing'
import { spacingRules } from './spacing'
import { tablesRules } from './tables'
import * as layout from './layout'
import * as effects from './effects'
import { filterRules } from './filter/filter'
import { transitionPropertRules } from './transition'
import type { Rule } from '~/types'

export default <Rule[]>[
  backgroundRules,
  Object.values(border).flat(1),
  sizingRules,
  spacingRules,
  tablesRules,
  Object.values(layout).flat(1),
  Object.values(effects).flat(1),
  filterRules,
  transitionPropertRules,
].flat(1)
