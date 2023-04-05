/**
 * match rgba color
 */
export const rgbRegexp
  = /^(rgb|rgba)\((\s*\d+\s*,){2}\s*\d+\s*(,\s*((\d*\.\d+)|\d+)\s*)?\)$/

/**
 * match hex color
 */
export const hexRegexp = /^#(?:[0-9a-fA-F]{3}){1,2}(?:[0-9a-fA-F]{2})?$/

export const colorFunctionRegexp = /^(.+)\((.+)\)$/

export const colorFunctionArgs = /(\d+|\.\d+)(\.\d+)?(%|deg|turn)?/g
