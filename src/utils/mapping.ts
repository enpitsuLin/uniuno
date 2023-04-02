import type { DataType } from 'csstype';

const basePositionMap: DataType.Position<string & {}>[] = [
  'top',
  'top center',
  'top left',
  'top right',
  'bottom',
  'bottom center',
  'bottom left',
  'bottom right',
  'left',
  'left center',
  'left top',
  'left bottom',
  'right',
  'right center',
  'right top',
  'right bottom',
  'center',
  'center top',
  'center bottom',
  'center left',
  'center right',
  'center center'
];

export const positionMap: Record<string, string> = Object.assign(
  {},
  ...basePositionMap.map((p) => ({ [p]: p.replace(' ', '-') }))
);

export const cornersMap: Record<string, string> = {
  startStart: 'ss',
  startEnd: 'se',
  endEnd: 'ee',
  endStart: 'es',
  topLeft: 'tl',
  topRight: 'tr',
  bottomRight: 'br',
  bottomLeft: 'bl'
};

export const directionMap: Record<string, string> = {
  top: 't',
  right: 'r',
  left: 'l',
  bottom: 'b',
  inlineStart: 's',
  inlineEnd: 'e',
  blockStart: 'bs',
  blockEnd: 'be'
};
