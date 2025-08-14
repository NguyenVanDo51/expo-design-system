import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export type StackDirection = 'vertical' | 'horizontal';
export type StackAlignment = 'start' | 'center' | 'end' | 'stretch';
export type StackJustification = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface StackProps {
  children: React.ReactNode;
  direction?: StackDirection;
  spacing?: keyof typeof import('@/theme').spacing;
  align?: StackAlignment;
  justify?: StackJustification;
  style?: ViewStyle;
  wrap?: boolean;
}

export function Stack({
  children,
  direction = 'vertical',
  spacing = 4,
  align = 'stretch',
  justify = 'start',
  style,
  wrap = false,
}: StackProps) {
  const theme = useTheme();

  const alignmentMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
  } as const;

  const justificationMap = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
  } as const;

  const stackStyles = StyleSheet.create({
    container: {
      flexDirection: direction === 'horizontal' ? 'row' : 'column',
      alignItems: alignmentMap[align],
      justifyContent: justificationMap[justify],
      gap: theme.spacing[spacing],
      flexWrap: wrap ? 'wrap' : 'nowrap',
    },
  });

  return (
    <View style={[stackStyles.container, style]}>
      {children}
    </View>
  );
}