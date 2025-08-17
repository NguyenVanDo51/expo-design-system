import React from 'react';
import { View, ViewStyle, StyleSheet, StyleProp } from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { useResponsive } from '@/hooks/useResponsive';

export interface ContainerProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: keyof typeof import('@/theme').spacing;
}

export function Container({
  children,
  style,
  maxWidth = 'full',
  padding = 4,
}: ContainerProps) {
  const theme = useTheme();
  const { width } = useResponsive();

  const maxWidths = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
    full: '100%' as const,
  };

  const containerStyles = StyleSheet.create({
    container: {
      width: '100%',
      maxWidth: maxWidths[maxWidth],
      paddingHorizontal: theme.spacing[padding],
      alignSelf: 'center',
      flex: 1,
    },
  });

  return (
    <View style={[containerStyles.container, style]}>
      {children}
    </View>
  );
}