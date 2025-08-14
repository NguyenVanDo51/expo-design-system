import { StyleSheet } from 'react-native';
import { theme } from './index';

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
  m0: { margin: theme.spacing[0] },
  m1: { margin: theme.spacing[1] },
  m2: { margin: theme.spacing[2] },
  m3: { margin: theme.spacing[3] },
  m4: { margin: theme.spacing[4] },
  m5: { margin: theme.spacing[5] },
  m6: { margin: theme.spacing[6] },
  m8: { margin: theme.spacing[8] },
  m10: { margin: theme.spacing[10] },
  m12: { margin: theme.spacing[12] },
  
  // Margin horizontal
  mx0: { marginHorizontal: theme.spacing[0] },
  mx1: { marginHorizontal: theme.spacing[1] },
  mx2: { marginHorizontal: theme.spacing[2] },
  mx3: { marginHorizontal: theme.spacing[3] },
  mx4: { marginHorizontal: theme.spacing[4] },
  mx5: { marginHorizontal: theme.spacing[5] },
  mx6: { marginHorizontal: theme.spacing[6] },
  mx8: { marginHorizontal: theme.spacing[8] },
  
  // Margin vertical
  my0: { marginVertical: theme.spacing[0] },
  my1: { marginVertical: theme.spacing[1] },
  my2: { marginVertical: theme.spacing[2] },
  my3: { marginVertical: theme.spacing[3] },
  my4: { marginVertical: theme.spacing[4] },
  my5: { marginVertical: theme.spacing[5] },
  my6: { marginVertical: theme.spacing[6] },
  my8: { marginVertical: theme.spacing[8] },
  
  // Margin top
  mt0: { marginTop: theme.spacing[0] },
  mt1: { marginTop: theme.spacing[1] },
  mt2: { marginTop: theme.spacing[2] },
  mt3: { marginTop: theme.spacing[3] },
  mt4: { marginTop: theme.spacing[4] },
  mt5: { marginTop: theme.spacing[5] },
  mt6: { marginTop: theme.spacing[6] },
  mt8: { marginTop: theme.spacing[8] },
  
  // Margin bottom
  mb0: { marginBottom: theme.spacing[0] },
  mb1: { marginBottom: theme.spacing[1] },
  mb2: { marginBottom: theme.spacing[2] },
  mb3: { marginBottom: theme.spacing[3] },
  mb4: { marginBottom: theme.spacing[4] },
  mb5: { marginBottom: theme.spacing[5] },
  mb6: { marginBottom: theme.spacing[6] },
  mb8: { marginBottom: theme.spacing[8] },
  
  // Margin left
  ml0: { marginLeft: theme.spacing[0] },
  ml1: { marginLeft: theme.spacing[1] },
  ml2: { marginLeft: theme.spacing[2] },
  ml3: { marginLeft: theme.spacing[3] },
  ml4: { marginLeft: theme.spacing[4] },
  ml5: { marginLeft: theme.spacing[5] },
  ml6: { marginLeft: theme.spacing[6] },
  ml8: { marginLeft: theme.spacing[8] },
  
  // Margin right
  mr0: { marginRight: theme.spacing[0] },
  mr1: { marginRight: theme.spacing[1] },
  mr2: { marginRight: theme.spacing[2] },
  mr3: { marginRight: theme.spacing[3] },
  mr4: { marginRight: theme.spacing[4] },
  mr5: { marginRight: theme.spacing[5] },
  mr6: { marginRight: theme.spacing[6] },
  mr8: { marginRight: theme.spacing[8] },
  
  // Padding
  p0: { padding: theme.spacing[0] },
  p1: { padding: theme.spacing[1] },
  p2: { padding: theme.spacing[2] },
  p3: { padding: theme.spacing[3] },
  p4: { padding: theme.spacing[4] },
  p5: { padding: theme.spacing[5] },
  p6: { padding: theme.spacing[6] },
  p8: { padding: theme.spacing[8] },
  p10: { padding: theme.spacing[10] },
  p12: { padding: theme.spacing[12] },
  
  // Padding horizontal
  px0: { paddingHorizontal: theme.spacing[0] },
  px1: { paddingHorizontal: theme.spacing[1] },
  px2: { paddingHorizontal: theme.spacing[2] },
  px3: { paddingHorizontal: theme.spacing[3] },
  px4: { paddingHorizontal: theme.spacing[4] },
  px5: { paddingHorizontal: theme.spacing[5] },
  px6: { paddingHorizontal: theme.spacing[6] },
  px8: { paddingHorizontal: theme.spacing[8] },
  
  // Padding vertical
  py0: { paddingVertical: theme.spacing[0] },
  py1: { paddingVertical: theme.spacing[1] },
  py2: { paddingVertical: theme.spacing[2] },
  py3: { paddingVertical: theme.spacing[3] },
  py4: { paddingVertical: theme.spacing[4] },
  py5: { paddingVertical: theme.spacing[5] },
  py6: { paddingVertical: theme.spacing[6] },
  py8: { paddingVertical: theme.spacing[8] },
  
  // Padding top
  pt0: { paddingTop: theme.spacing[0] },
  pt1: { paddingTop: theme.spacing[1] },
  pt2: { paddingTop: theme.spacing[2] },
  pt3: { paddingTop: theme.spacing[3] },
  pt4: { paddingTop: theme.spacing[4] },
  pt5: { paddingTop: theme.spacing[5] },
  pt6: { paddingTop: theme.spacing[6] },
  pt8: { paddingTop: theme.spacing[8] },
  
  // Padding bottom
  pb0: { paddingBottom: theme.spacing[0] },
  pb1: { paddingBottom: theme.spacing[1] },
  pb2: { paddingBottom: theme.spacing[2] },
  pb3: { paddingBottom: theme.spacing[3] },
  pb4: { paddingBottom: theme.spacing[4] },
  pb5: { paddingBottom: theme.spacing[5] },
  pb6: { paddingBottom: theme.spacing[6] },
  pb8: { paddingBottom: theme.spacing[8] },
  
  // Padding left
  pl0: { paddingLeft: theme.spacing[0] },
  pl1: { paddingLeft: theme.spacing[1] },
  pl2: { paddingLeft: theme.spacing[2] },
  pl3: { paddingLeft: theme.spacing[3] },
  pl4: { paddingLeft: theme.spacing[4] },
  pl5: { paddingLeft: theme.spacing[5] },
  pl6: { paddingLeft: theme.spacing[6] },
  pl8: { paddingLeft: theme.spacing[8] },
  
  // Padding right
  pr0: { paddingRight: theme.spacing[0] },
  pr1: { paddingRight: theme.spacing[1] },
  pr2: { paddingRight: theme.spacing[2] },
  pr3: { paddingRight: theme.spacing[3] },
  pr4: { paddingRight: theme.spacing[4] },
  pr5: { paddingRight: theme.spacing[5] },
  pr6: { paddingRight: theme.spacing[6] },
  pr8: { paddingRight: theme.spacing[8] },
});

// Background colors
export const bg = StyleSheet.create({
  transparent: { backgroundColor: 'transparent' },
  white: { backgroundColor: theme.colors.neutral[0] },
  gray50: { backgroundColor: theme.colors.neutral[50] },
  gray100: { backgroundColor: theme.colors.neutral[100] },
  gray200: { backgroundColor: theme.colors.neutral[200] },
  gray300: { backgroundColor: theme.colors.neutral[300] },
  gray400: { backgroundColor: theme.colors.neutral[400] },
  gray500: { backgroundColor: theme.colors.neutral[500] },
  gray600: { backgroundColor: theme.colors.neutral[600] },
  gray700: { backgroundColor: theme.colors.neutral[700] },
  gray800: { backgroundColor: theme.colors.neutral[800] },
  gray900: { backgroundColor: theme.colors.neutral[900] },
  
  primary50: { backgroundColor: theme.colors.primary[50] },
  primary100: { backgroundColor: theme.colors.primary[100] },
  primary500: { backgroundColor: theme.colors.primary[500] },
  primary600: { backgroundColor: theme.colors.primary[600] },
  
  secondary500: { backgroundColor: theme.colors.secondary[500] },
  secondary600: { backgroundColor: theme.colors.secondary[600] },
  
  success500: { backgroundColor: theme.colors.success[500] },
  success600: { backgroundColor: theme.colors.success[600] },
  
  warning500: { backgroundColor: theme.colors.warning[500] },
  warning600: { backgroundColor: theme.colors.warning[600] },
  
  error500: { backgroundColor: theme.colors.error[500] },
  error600: { backgroundColor: theme.colors.error[600] },
});

// Text colors
export const text = StyleSheet.create({
  white: { color: theme.colors.neutral[0] },
  gray400: { color: theme.colors.neutral[400] },
  gray500: { color: theme.colors.neutral[500] },
  gray600: { color: theme.colors.neutral[600] },
  gray700: { color: theme.colors.neutral[700] },
  gray800: { color: theme.colors.neutral[800] },
  gray900: { color: theme.colors.neutral[900] },
  
  primary500: { color: theme.colors.primary[500] },
  primary600: { color: theme.colors.primary[600] },
  
  secondary600: { color: theme.colors.secondary[600] },
  
  success600: { color: theme.colors.success[600] },
  warning600: { color: theme.colors.warning[600] },
  error600: { color: theme.colors.error[600] },
  info600: { color: theme.colors.info[600] },
});

// Border radius
export const rounded = StyleSheet.create({
  none: { borderRadius: theme.borderRadius.none },
  sm: { borderRadius: theme.borderRadius.sm },
  base: { borderRadius: theme.borderRadius.base },
  md: { borderRadius: theme.borderRadius.md },
  lg: { borderRadius: theme.borderRadius.lg },
  xl: { borderRadius: theme.borderRadius.xl },
  '2xl': { borderRadius: theme.borderRadius['2xl'] },
  '3xl': { borderRadius: theme.borderRadius['3xl'] },
  full: { borderRadius: theme.borderRadius.full },
});

// Border
export const border = StyleSheet.create({
  border: { borderWidth: 1 },
  border2: { borderWidth: 2 },
  borderT: { borderTopWidth: 1 },
  borderB: { borderBottomWidth: 1 },
  borderL: { borderLeftWidth: 1 },
  borderR: { borderRightWidth: 1 },
  
  borderGray200: { borderColor: theme.colors.neutral[200] },
  borderGray300: { borderColor: theme.colors.neutral[300] },
  borderPrimary: { borderColor: theme.colors.primary[600] },
  borderError: { borderColor: theme.colors.error[600] },
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
  sm: theme.shadows.sm,
  base: theme.shadows.base,
  md: theme.shadows.md,
  lg: theme.shadows.lg,
  xl: theme.shadows.xl,
});

// Common combinations
export const common = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral[50],
  },
  
  card: {
    backgroundColor: theme.colors.neutral[0],
    borderRadius: theme.borderRadius.xl,
    padding: theme.spacing[4],
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
    ...theme.shadows.base,
  },
  
  header: {
    backgroundColor: theme.colors.neutral[0],
    paddingVertical: theme.spacing[6],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral[200],
  },
  
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.primary[100],
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: theme.spacing[4],
    paddingHorizontal: theme.spacing[4],
    backgroundColor: theme.colors.neutral[0],
    borderRadius: theme.borderRadius.lg,
    ...theme.shadows.sm,
  },
  
  input: {
    backgroundColor: theme.colors.neutral[0],
    borderWidth: 1,
    borderColor: theme.colors.neutral[300],
    borderRadius: theme.borderRadius.lg,
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    fontSize: theme.typography.sizes.base,
    lineHeight: theme.typography.lineHeights.base,
    minHeight: 40,
  },
  
  button: {
    borderRadius: theme.borderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    minHeight: 40,
    ...theme.shadows.sm,
  },
  
  buttonPrimary: {
    backgroundColor: theme.colors.primary[600],
    borderWidth: 1,
    borderColor: theme.colors.primary[600],
  },
  
  buttonSecondary: {
    backgroundColor: theme.colors.secondary[600],
    borderWidth: 1,
    borderColor: theme.colors.secondary[600],
  },
  
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary[600],
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
};