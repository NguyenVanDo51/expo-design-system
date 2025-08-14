import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export interface SpacerProps {
  size?: keyof typeof import('@/theme').spacing;
  horizontal?: boolean;
}

export function Spacer({ size = 4, horizontal = false }: SpacerProps) {
  const theme = useTheme();
  
  return (
    <View
      style={{
        width: horizontal ? theme.spacing[size] : undefined,
        height: horizontal ? undefined : theme.spacing[size],
      }}
    />
  );
}