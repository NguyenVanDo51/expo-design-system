import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { colors } from './colors';
import { spacing as spacingValues, borderRadius } from './spacing';
import { shadows } from './shadows';
import { typography } from './typography';

// Flexbox utilities
export const flex = StyleSheet.create({
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  flexNone: { flex: 0 },
  flexRow: { flexDirection: 'row' },
  flexCol: { flexDirection: 'column' },
  flexWrap: { flexWrap: 'wrap' },
  flexNoWrap: { flexWrap: 'nowrap' },
  
  // Justify content
  justifyStart: { justifyContent: 'flex-start' },
  justifyEnd: { justifyContent: 'flex-end' },
  justifyCenter: { justifyContent: 'center' },
  justifyBetween: { justifyContent: 'space-between' },
  justifyAround: { justifyContent: 'space-around' },
  justifyEvenly: { justifyContent: 'space-evenly' },
  
  // Align items
  itemsStart: { alignItems: 'flex-start' },
  itemsEnd: { alignItems: 'flex-end' },
  itemsCenter: { alignItems: 'center' },
  itemsStretch: { alignItems: 'stretch' },
  
  // Align self
  selfStart: { alignSelf: 'flex-start' },
  selfEnd: { alignSelf: 'flex-end' },
  selfCenter: { alignSelf: 'center' },
  selfStretch: { alignSelf: 'stretch' },
});

// Spacing utilities
export const spacing = StyleSheet.create({
  // Margin
  m0: { margin: spacingValues[0] },
  m1: { margin: spacingValues[1] },
  m2: { margin: spacingValues[2] },
  m3: { margin: spacingValues[3] },
  m4: { margin: spacingValues[4] },
  m5: { margin: spacingValues[5] },
  m6: { margin: spacingValues[6] },
  m8: { margin: spacingValues[8] },
  m10: { margin: spacingValues[10] },
  m12: { margin: spacingValues[12] },
  
  // Margin horizontal
  mx0: { marginHorizontal: spacingValues[0] },
  mx1: { marginHorizontal: spacingValues[1] },
  mx2: { marginHorizontal: spacingValues[2] },
  mx3: { marginHorizontal: spacingValues[3] },
  mx4: { marginHorizontal: spacingValues[4] },
  mx5: { marginHorizontal: spacingValues[5] },
  mx6: { marginHorizontal: spacingValues[6] },
  mx8: { marginHorizontal: spacingValues[8] },
  
  // Margin vertical
  my0: { marginVertical: spacingValues[0] },
  my1: { marginVertical: spacingValues[1] },
  my2: { marginVertical: spacingValues[2] },
  my3: { marginVertical: spacingValues[3] },
  my4: { marginVertical: spacingValues[4] },
  my5: { marginVertical: spacingValues[5] },
  my6: { marginVertical: spacingValues[6] },
  my8: { marginVertical: spacingValues[8] },
  
  // Margin top
  mt0: { marginTop: spacingValues[0] },
  mt1: { marginTop: spacingValues[1] },
  mt2: { marginTop: spacingValues[2] },
  mt3: { marginTop: spacingValues[3] },
  mt4: { marginTop: spacingValues[4] },
  mt5: { marginTop: spacingValues[5] },
  mt6: { marginTop: spacingValues[6] },
  mt8: { marginTop: spacingValues[8] },
  
  // Margin bottom
  mb0: { marginBottom: spacingValues[0] },
  mb1: { marginBottom: spacingValues[1] },
  mb2: { marginBottom: spacingValues[2] },
  mb3: { marginBottom: spacingValues[3] },
  mb4: { marginBottom: spacingValues[4] },
  mb5: { marginBottom: spacingValues[5] },
  mb6: { marginBottom: spacingValues[6] },
  mb8: { marginBottom: spacingValues[8] },
  
  // Margin left
  ml0: { marginLeft: spacingValues[0] },
  ml1: { marginLeft: spacingValues[1] },
  ml2: { marginLeft: spacingValues[2] },
  ml3: { marginLeft: spacingValues[3] },
  ml4: { marginLeft: spacingValues[4] },
  ml5: { marginLeft: spacingValues[5] },
  ml6: { marginLeft: spacingValues[6] },
  ml8: { marginLeft: spacingValues[8] },
  
  // Margin right
  mr0: { marginRight: spacingValues[0] },
  mr1: { marginRight: spacingValues[1] },
  mr2: { marginRight: spacingValues[2] },
  mr3: { marginRight: spacingValues[3] },
  mr4: { marginRight: spacingValues[4] },
  mr5: { marginRight: spacingValues[5] },
  mr6: { marginRight: spacingValues[6] },
  mr8: { marginRight: spacingValues[8] },
  
  // Padding
  p0: { padding: spacingValues[0] },
  p1: { padding: spacingValues[1] },
  p2: { padding: spacingValues[2] },
  p3: { padding: spacingValues[3] },
  p4: { padding: spacingValues[4] },
  p5: { padding: spacingValues[5] },
  p6: { padding: spacingValues[6] },
  p8: { padding: spacingValues[8] },
  p10: { padding: spacingValues[10] },
  p12: { padding: spacingValues[12] },
  
  // Padding horizontal
  px0: { paddingHorizontal: spacingValues[0] },
  px1: { paddingHorizontal: spacingValues[1] },
  px2: { paddingHorizontal: spacingValues[2] },
  px3: { paddingHorizontal: spacingValues[3] },
  px4: { paddingHorizontal: spacingValues[4] },
  px5: { paddingHorizontal: spacingValues[5] },
  px6: { paddingHorizontal: spacingValues[6] },
  px8: { paddingHorizontal: spacingValues[8] },
  
  // Padding vertical
  py0: { paddingVertical: spacingValues[0] },
  py1: { paddingVertical: spacingValues[1] },
  py2: { paddingVertical: spacingValues[2] },
  py3: { paddingVertical: spacingValues[3] },
  py4: { paddingVertical: spacingValues[4] },
  py5: { paddingVertical: spacingValues[5] },
  py6: { paddingVertical: spacingValues[6] },
  py8: { paddingVertical: spacingValues[8] },
  py12: { paddingVertical: spacingValues[12] },
  
  // Padding top
  pt0: { paddingTop: spacingValues[0] },
  pt1: { paddingTop: spacingValues[1] },
  pt2: { paddingTop: spacingValues[2] },
  pt3: { paddingTop: spacingValues[3] },
  pt4: { paddingTop: spacingValues[4] },
  pt5: { paddingTop: spacingValues[5] },
  pt6: { paddingTop: spacingValues[6] },
  pt8: { paddingTop: spacingValues[8] },
  
  // Padding bottom
  pb0: { paddingBottom: spacingValues[0] },
  pb1: { paddingBottom: spacingValues[1] },
  pb2: { paddingBottom: spacingValues[2] },
  pb3: { paddingBottom: spacingValues[3] },
  pb4: { paddingBottom: spacingValues[4] },
  pb5: { paddingBottom: spacingValues[5] },
  pb6: { paddingBottom: spacingValues[6] },
  pb8: { paddingBottom: spacingValues[8] },
  
  // Padding left
  pl0: { paddingLeft: spacingValues[0] },
  pl1: { paddingLeft: spacingValues[1] },
  pl2: { paddingLeft: spacingValues[2] },
  pl3: { paddingLeft: spacingValues[3] },
  pl4: { paddingLeft: spacingValues[4] },
  pl5: { paddingLeft: spacingValues[5] },
  pl6: { paddingLeft: spacingValues[6] },
  pl8: { paddingLeft: spacingValues[8] },
  
  // Padding right
  pr0: { paddingRight: spacingValues[0] },
  pr1: { paddingRight: spacingValues[1] },
  pr2: { paddingRight: spacingValues[2] },
  pr3: { paddingRight: spacingValues[3] },
  pr4: { paddingRight: spacingValues[4] },
  pr5: { paddingRight: spacingValues[5] },
  pr6: { paddingRight: spacingValues[6] },
  pr8: { paddingRight: spacingValues[8] },
});

// Background colors
export const bg = StyleSheet.create({
  transparent: { backgroundColor: 'transparent' },
  white: { backgroundColor: colors.neutral[0] },
  gray50: { backgroundColor: colors.neutral[50] },
  gray100: { backgroundColor: colors.neutral[100] },
  gray200: { backgroundColor: colors.neutral[200] },
  gray300: { backgroundColor: colors.neutral[300] },
  gray400: { backgroundColor: colors.neutral[400] },
  gray500: { backgroundColor: colors.neutral[500] },
  gray600: { backgroundColor: colors.neutral[600] },
  gray700: { backgroundColor: colors.neutral[700] },
  gray800: { backgroundColor: colors.neutral[800] },
  gray900: { backgroundColor: colors.neutral[900] },
  
  primary50: { backgroundColor: colors.primary[50] },
  primary100: { backgroundColor: colors.primary[100] },
  primary500: { backgroundColor: colors.primary[500] },
  primary600: { backgroundColor: colors.primary[600] },
  
  secondary500: { backgroundColor: colors.secondary[500] },
  secondary600: { backgroundColor: colors.secondary[600] },
  
  success500: { backgroundColor: colors.success[500] },
  success600: { backgroundColor: colors.success[600] },
  
  warning500: { backgroundColor: colors.warning[500] },
  warning600: { backgroundColor: colors.warning[600] },
  
  error500: { backgroundColor: colors.error[500] },
  error600: { backgroundColor: colors.error[600] },
});

// Text colors
export const text = StyleSheet.create({
  white: { color: colors.neutral[0] },
  gray400: { color: colors.neutral[400] },
  gray500: { color: colors.neutral[500] },
  gray600: { color: colors.neutral[600] },
  gray700: { color: colors.neutral[700] },
  gray800: { color: colors.neutral[800] },
  gray900: { color: colors.neutral[900] },
  
  primary500: { color: colors.primary[500] },
  primary600: { color: colors.primary[600] },
  
  secondary600: { color: colors.secondary[600] },
  
  success600: { color: colors.success[600] },
  warning600: { color: colors.warning[600] },
  error600: { color: colors.error[600] },
  info600: { color: colors.info[600] },
});

// Border radius
export const rounded = StyleSheet.create({
  none: { borderRadius: borderRadius.none },
  sm: { borderRadius: borderRadius.sm },
  base: { borderRadius: borderRadius.base },
  md: { borderRadius: borderRadius.md },
  lg: { borderRadius: borderRadius.lg },
  xl: { borderRadius: borderRadius.xl },
  '2xl': { borderRadius: borderRadius['2xl'] },
  '3xl': { borderRadius: borderRadius['3xl'] },
  full: { borderRadius: borderRadius.full },
});

// Border
export const border = StyleSheet.create({
  border: { borderWidth: 1 },
  border2: { borderWidth: 2 },
  borderT: { borderTopWidth: 1 },
  borderB: { borderBottomWidth: 1 },
  borderL: { borderLeftWidth: 1 },
  borderR: { borderRightWidth: 1 },
  
  borderGray200: { borderColor: colors.neutral[200] },
  borderGray300: { borderColor: colors.neutral[300] },
  borderPrimary: { borderColor: colors.primary[600] },
  borderError: { borderColor: colors.error[600] },
});

// Width and Height
export const size = StyleSheet.create({
  w8: { width: 32 },
  w10: { width: 40 },
  w12: { width: 48 },
  w16: { width: 64 },
  w20: { width: 80 },
  w24: { width: 96 },
  w32: { width: 128 },
  w40: { width: 160 },
  w48: { width: 192 },
  w60: { width: 240 },
  wFull: { width: '100%' },
  
  h8: { height: 32 },
  h10: { height: 40 },
  h12: { height: 48 },
  h16: { height: 64 },
  h20: { height: 80 },
  h24: { height: 96 },
  h32: { height: 128 },
  h40: { height: 160 },
  h48: { height: 192 },
  h60: { height: 240 },
  hFull: { height: '100%' },
  
  minH32: { minHeight: 32 },
  minH40: { minHeight: 40 },
  minH48: { minHeight: 48 },
  minH120: { minHeight: 120 },
});

// Position
export const position = StyleSheet.create({
  absolute: { position: 'absolute' },
  relative: { position: 'relative' },
  
  top0: { top: 0 },
  right0: { right: 0 },
  bottom0: { bottom: 0 },
  left0: { left: 0 },
  
  inset0: { top: 0, right: 0, bottom: 0, left: 0 },
});

// Text alignment
export const textAlign = StyleSheet.create({
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
});

// Opacity
export const opacity = StyleSheet.create({
  opacity0: { opacity: 0 },
  opacity25: { opacity: 0.25 },
  opacity50: { opacity: 0.5 },
  opacity75: { opacity: 0.75 },
  opacity90: { opacity: 0.9 },
  opacity100: { opacity: 1 },
});

// Shadow utilities
export const shadow = StyleSheet.create({
  sm: shadows.sm || {},
  base: shadows.base || {},
  md: shadows.md || {},
  lg: shadows.lg || {},
  xl: shadows.xl || {},
});

// Common combinations
export const common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutral[50],
  },
  
  card: {
    backgroundColor: colors.neutral[0],
    borderRadius: borderRadius.xl,
    padding: spacingValues[4],
    borderWidth: 1,
    borderColor: colors.neutral[200],
    ...shadows.base,
  },
  
  header: {
    backgroundColor: colors.neutral[0],
    paddingVertical: spacingValues[6],
    borderBottomWidth: 1,
    borderBottomColor: colors.neutral[200],
  },
  
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.primary[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacingValues[4],
    paddingHorizontal: spacingValues[4],
    backgroundColor: colors.neutral[0],
    borderRadius: borderRadius.lg,
    ...shadows.sm,
  },
  
  input: {
    backgroundColor: colors.neutral[0],
    borderWidth: 1,
    borderColor: colors.neutral[300],
    borderRadius: borderRadius.lg,
    paddingHorizontal: spacingValues[4],
    paddingVertical: spacingValues[3],
    fontSize: typography.sizes.base,
    lineHeight: typography.lineHeights.base,
    minHeight: 40,
  },
  
  button: {
    borderRadius: borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: spacingValues[4],
    paddingVertical: spacingValues[3],
    minHeight: 40,
    ...shadows.sm,
  },
  
  buttonPrimary: {
    backgroundColor: colors.primary[600],
    borderWidth: 1,
    borderColor: colors.primary[600],
  },
  
  buttonSecondary: {
    backgroundColor: colors.secondary[600],
    borderWidth: 1,
    borderColor: colors.secondary[600],
  },
  
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary[600],
  },
});

// Export all styles
export const commonStyles = {
  flex,
  spacing,
  bg,
  text,
  rounded,
  border,
  size,
  position,
  textAlign,
  opacity,
  shadow,
  common,
} as const;
