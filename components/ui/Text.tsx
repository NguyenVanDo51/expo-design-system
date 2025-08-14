import React from 'react';
import { Text as RNText, TextStyle, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export type TextVariant = 
  | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  | 'body' | 'bodyLarge' | 'bodySmall'
  | 'caption' | 'label';

export type TextColor = 'primary' | 'secondary' | 'muted' | 'inverse' | 'success' | 'warning' | 'error';

export interface TextProps {
  children: React.ReactNode;
  variant?: TextVariant;
  color?: TextColor;
  style?: TextStyle;
  numberOfLines?: number;
  testID?: string;
}

export function Text({
  children,
  variant = 'body',
  color = 'primary',
  style,
  numberOfLines,
  testID,
}: TextProps) {
  const theme = useTheme();

  const textStyles = StyleSheet.create({
    // Headings
    h1: {
      fontSize: theme.typography.sizes['5xl'],
      lineHeight: theme.typography.lineHeights['5xl'] * theme.typography.sizes['5xl'],
      fontFamily: theme.typography.fonts.bold,
      letterSpacing: theme.typography.letterSpacing.tight,
    },
    h2: {
      fontSize: theme.typography.sizes['4xl'],
      lineHeight: theme.typography.lineHeights['4xl'] * theme.typography.sizes['4xl'],
      fontFamily: theme.typography.fonts.bold,
      letterSpacing: theme.typography.letterSpacing.tight,
    },
    h3: {
      fontSize: theme.typography.sizes['3xl'],
      lineHeight: theme.typography.lineHeights['3xl'],
      fontFamily: theme.typography.fonts.semibold,
      letterSpacing: theme.typography.letterSpacing.tight,
    },
    h4: {
      fontSize: theme.typography.sizes['2xl'],
      lineHeight: theme.typography.lineHeights['2xl'],
      fontFamily: theme.typography.fonts.semibold,
      letterSpacing: theme.typography.letterSpacing.normal,
    },
    h5: {
      fontSize: theme.typography.sizes.xl,
      lineHeight: theme.typography.lineHeights.xl,
      fontFamily: theme.typography.fonts.semibold,
      letterSpacing: theme.typography.letterSpacing.normal,
    },
    h6: {
      fontSize: theme.typography.sizes.lg,
      lineHeight: theme.typography.lineHeights.lg,
      fontFamily: theme.typography.fonts.semibold,
      letterSpacing: theme.typography.letterSpacing.normal,
    },

    // Body text
    body: {
      fontSize: theme.typography.sizes.base,
      lineHeight: theme.typography.lineHeights.base,
      fontFamily: theme.typography.fonts.regular,
      letterSpacing: theme.typography.letterSpacing.normal,
    },
    bodyLarge: {
      fontSize: theme.typography.sizes.lg,
      lineHeight: theme.typography.lineHeights.lg,
      fontFamily: theme.typography.fonts.regular,
      letterSpacing: theme.typography.letterSpacing.normal,
    },
    bodySmall: {
      fontSize: theme.typography.sizes.sm,
      lineHeight: theme.typography.lineHeights.sm,
      fontFamily: theme.typography.fonts.regular,
      letterSpacing: theme.typography.letterSpacing.normal,
    },

    // Utility text
    caption: {
      fontSize: theme.typography.sizes.xs,
      lineHeight: theme.typography.lineHeights.xs,
      fontFamily: theme.typography.fonts.regular,
      letterSpacing: theme.typography.letterSpacing.wide,
    },
    label: {
      fontSize: theme.typography.sizes.sm,
      lineHeight: theme.typography.lineHeights.sm,
      fontFamily: theme.typography.fonts.medium,
      letterSpacing: theme.typography.letterSpacing.normal,
    },

    // Colors
    primary: { color: theme.colors.neutral[900] },
    secondary: { color: theme.colors.neutral[600] },
    muted: { color: theme.colors.neutral[500] },
    inverse: { color: theme.colors.neutral[0] },
    success: { color: theme.colors.success[600] },
    warning: { color: theme.colors.warning[600] },
    error: { color: theme.colors.error[600] },
  });

  const combinedStyle = [
    textStyles[variant],
    textStyles[color],
    style,
  ];

  return (
    <RNText
      style={combinedStyle}
      numberOfLines={numberOfLines}
      testID={testID}
    >
      {children}
    </RNText>
  );
}