import { backgroundRules } from './background'
import * as border from './border'
import { sizingRules } from './sizing'
import { spacingRules } from './spacing'
import { tablesRules } from './tables'
import * as layout from './layout'

export default [
  backgroundRules,
  Object.values(border).flat(1),
  sizingRules,
  spacingRules,
  tablesRules,
  Object.values(layout).flat(1),
].flat(1)
