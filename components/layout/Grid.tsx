import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export interface GridProps {
  children: React.ReactNode;
  columns?: number;
  spacing?: keyof typeof import('@/theme').spacing;
  style?: ViewStyle;
}

export function Grid({
  children,
  columns = 2,
  spacing = 4,
  style,
}: GridProps) {
  const theme = useTheme();

  const gridStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: theme.spacing[spacing],
    },
    item: {
      flex: 1,
      minWidth: `${(100 / columns) - (theme.spacing[spacing] * (columns - 1) / columns)}%`,
    },
  });

  const childrenArray = React.Children.toArray(children);

  return (
    <View style={[gridStyles.container, style]}>
      {childrenArray.map((child, index) => (
        <View key={index} style={gridStyles.item}>
          {child}
        </View>
      ))}
    </View>
  );
}