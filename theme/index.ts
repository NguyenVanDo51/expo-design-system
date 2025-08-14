import { colors } from './colors';
import { typography } from './typography';
import { spacing, borderRadius } from './spacing';
import { shadows } from './shadows';
import { breakpoints } from './breakpoints';
import { commonStyles } from './commonStyles';

export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  commonStyles,
} as const;

export type Theme = typeof theme;
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Shadows = typeof shadows;
export type Breakpoints = typeof breakpoints;

export * from './colors';
export * from './typography';
export * from './spacing';
export * from './shadows';
export * from './breakpoints';
export * from './commonStyles';