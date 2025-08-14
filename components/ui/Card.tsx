import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: keyof typeof import('@/theme').spacing;
  elevation?: 'sm' | 'base' | 'md' | 'lg' | 'xl';
}

export function Card({
  children,
  style,
  padding = 4,
  elevation = 'base',
}: CardProps) {
  const theme = useTheme();

  const cardStyles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.neutral[0],
      borderRadius: theme.borderRadius.xl,
      padding: theme.spacing[padding],
      borderWidth: 1,
      borderColor: theme.colors.neutral[200],
      ...theme.shadows[elevation],
    },
  });

  return (
    <View style={[cardStyles.container, style]}>
      {children}
    </View>
  );
}