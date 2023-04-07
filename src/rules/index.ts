import { backgroundRules } from './background'
import { borderRules, outlineRules } from './border'
import { sizingRules } from './sizing'
import { spacingRules } from './spacing'
import { tablesRules } from './tables'
import { displayRules } from './layout'

export default [
  backgroundRules,
  borderRules,
  outlineRules,
  sizingRules,
  spacingRules,
  tablesRules,
  displayRules,
].flat(1)
