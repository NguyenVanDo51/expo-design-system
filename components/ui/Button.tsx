import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  testID?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  onPress,
  style,
  testID,
}: ButtonProps) {
  const theme = useTheme();

  const buttonStyles = StyleSheet.create({
    base: {
      borderRadius: theme.borderRadius.lg,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      ...theme.shadows.sm,
    },
    
    // Variants
    primary: {
      backgroundColor: theme.colors.primary[600],
      borderWidth: 1,
      borderColor: theme.colors.primary[600],
    },
    secondary: {
      backgroundColor: theme.colors.secondary[600],
      borderWidth: 1,
      borderColor: theme.colors.secondary[600],
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.primary[600],
    },
    ghost: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },

    // Sizes
    small: {
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      minHeight: 32,
    },
    medium: {
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      minHeight: 40,
    },
    large: {
      paddingHorizontal: theme.spacing[6],
      paddingVertical: theme.spacing[4],
      minHeight: 48,
    },

    // States
    disabled: {
      opacity: 0.5,
    },
  });

  const textStyles = StyleSheet.create({
    base: {
      fontFamily: theme.typography.fonts.medium,
      textAlign: 'center',
    },

    // Variant text styles
    primary: {
      color: theme.colors.neutral[0],
    },
    secondary: {
      color: theme.colors.neutral[0],
    },
    outline: {
      color: theme.colors.primary[600],
    },
    ghost: {
      color: theme.colors.primary[600],
    },

    // Size text styles
    small: {
      fontSize: theme.typography.sizes.sm,
      lineHeight: theme.typography.lineHeights.sm,
    },
    medium: {
      fontSize: theme.typography.sizes.base,
      lineHeight: theme.typography.lineHeights.base,
    },
    large: {
      fontSize: theme.typography.sizes.lg,
      lineHeight: theme.typography.lineHeights.lg,
    },
  });

  const buttonStyle = [
    buttonStyles.base,
    buttonStyles[variant],
    buttonStyles[size],
    disabled && buttonStyles.disabled,
    style,
  ];

  const textStyle = [
    textStyles.base,
    textStyles[variant],
    textStyles[size],
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
      testID={testID}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' 
            ? theme.colors.primary[600] 
            : theme.colors.neutral[0]
          }
        />
      ) : (
        <Text style={textStyle}>{children}</Text>
      )}
    </TouchableOpacity>
  );
}