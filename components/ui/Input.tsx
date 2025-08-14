import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Text } from './Text';

export type InputVariant = 'default' | 'filled' | 'outline';
export type InputSize = 'small' | 'medium' | 'large';

export interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  helperText?: string;
  error?: string;
  variant?: InputVariant;
  size?: InputSize;
  style?: ViewStyle;
  disabled?: boolean;
}

export function Input({
  label,
  helperText,
  error,
  variant = 'outline',
  size = 'medium',
  style,
  disabled = false,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const inputStyles = StyleSheet.create({
    container: {
      width: '100%',
    },
    
    inputBase: {
      fontFamily: theme.typography.fonts.regular,
      borderRadius: theme.borderRadius.lg,
      color: theme.colors.neutral[900],
    },

    // Variants
    default: {
      backgroundColor: theme.colors.neutral[50],
      borderWidth: 1,
      borderColor: theme.colors.neutral[200],
    },
    filled: {
      backgroundColor: theme.colors.neutral[100],
      borderWidth: 0,
    },
    outline: {
      backgroundColor: theme.colors.neutral[0],
      borderWidth: 1,
      borderColor: theme.colors.neutral[300],
    },

    // Sizes
    small: {
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      fontSize: theme.typography.sizes.sm,
      lineHeight: theme.typography.lineHeights.sm,
      minHeight: 32,
    },
    medium: {
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      fontSize: theme.typography.sizes.base,
      lineHeight: theme.typography.lineHeights.base,
      minHeight: 40,
    },
    large: {
      paddingHorizontal: theme.spacing[5],
      paddingVertical: theme.spacing[4],
      fontSize: theme.typography.sizes.lg,
      lineHeight: theme.typography.lineHeights.lg,
      minHeight: 48,
    },

    // States
    focused: {
      borderColor: theme.colors.primary[600],
      ...theme.shadows.sm,
    },
    error: {
      borderColor: theme.colors.error[600],
    },
    disabled: {
      backgroundColor: theme.colors.neutral[100],
      color: theme.colors.neutral[400],
      opacity: 0.6,
    },

    label: {
      marginBottom: theme.spacing[2],
    },
    helperText: {
      marginTop: theme.spacing[1],
    },
  });

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const inputStyle = [
    inputStyles.inputBase,
    inputStyles[variant],
    inputStyles[size],
    isFocused && inputStyles.focused,
    error && inputStyles.error,
    disabled && inputStyles.disabled,
  ];

  return (
    <View style={[inputStyles.container, style]}>
      {label && (
        <Text variant="label" color="secondary" style={inputStyles.label}>
          {label}
        </Text>
      )}
      
      <TextInput
        style={inputStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={!disabled}
        placeholderTextColor={theme.colors.neutral[400]}
        {...props}
      />
      
      {(error || helperText) && (
        <Text
          variant="caption"
          color={error ? 'error' : 'muted'}
          style={inputStyles.helperText}
        >
          {error || helperText}
        </Text>
      )}
    </View>
  );
}