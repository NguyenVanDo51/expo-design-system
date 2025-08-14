import React, { useEffect, useRef } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  Pressable,
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import { Text } from '../Text';
import { Button } from '../Button';
import {
  X,
  Info,
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  LucideProps,
} from 'lucide-react-native';
import { useAlert } from './AlertProvider';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/theme';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export function AlertModal() {
  const { state, hideAlert } = useAlert();
  const { visible, options } = state;
  const theme = useTheme();

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const slideAnim = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    if (visible && options) {
      const animations = [];

      // Fade animation
      animations.push(
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        })
      );

      // Scale or slide animation based on type
      if (options.animation === 'scale') {
        animations.push(
          Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 100,
            friction: 8,
            useNativeDriver: true,
          })
        );
      } else if (options.animation === 'slide') {
        animations.push(
          Animated.spring(slideAnim, {
            toValue: 0,
            tension: 100,
            friction: 8,
            useNativeDriver: true,
          })
        );
      }

      Animated.parallel(animations).start();
    } else {
      // Hide animations
      const animations = [];

      animations.push(
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        })
      );

      if (options?.animation === 'scale') {
        animations.push(
          Animated.timing(scaleAnim, {
            toValue: 0.8,
            duration: 200,
            useNativeDriver: true,
          })
        );
      } else if (options?.animation === 'slide') {
        animations.push(
          Animated.timing(slideAnim, {
            toValue: screenHeight,
            duration: 200,
            useNativeDriver: true,
          })
        );
      }

      Animated.parallel(animations).start();
    }
  }, [visible, options]);

  if (!options) return null;

  const getAlertIcon = () => {
    if (options.icon) return options.icon;

    const iconProps: LucideProps = { size: 24, color: getAlertColor() };

    switch (options.type) {
      case 'success':
        return <CheckCircle {...iconProps} />;
      case 'warning':
        return <AlertTriangle {...iconProps} />;
      case 'error':
        return <AlertCircle {...iconProps} />;
      default:
        return <Info {...iconProps} />;
    }
  };

  const getAlertColor = (): string => {
    switch (options.type) {
      case 'success':
        return theme.colors.success[600];
      case 'warning':
        return theme.colors.warning[600];
      case 'error':
        return theme.colors.error[600];
      default:
        return theme.colors.primary[500];
    }
  };

  const handleBackdropPress = () => {
    if (options.cancelable !== false) {
      hideAlert();
      options.onDismiss?.();
    }
  };

  const handleButtonPress = (buttonIndex: number) => {
    const button = options.buttons?.[buttonIndex];
    button?.onPress?.();
    hideAlert();
  };

  const getModalPosition = (): ViewStyle => {
    switch (options.position) {
      case 'top':
        return { justifyContent: 'flex-start', paddingTop: 100 };
      case 'bottom':
        return { justifyContent: 'flex-end', paddingBottom: 100 };
      default:
        return { justifyContent: 'center' };
    }
  };

  const getAnimationStyle = () => {
    const baseStyle = { opacity: fadeAnim };

    if (options.animation === 'scale') {
      return {
        ...baseStyle,
        transform: [{ scale: scaleAnim }],
      };
    } else if (options.animation === 'slide') {
      return {
        ...baseStyle,
        transform: [{ translateY: slideAnim }],
      };
    }

    return baseStyle;
  };

  const styles = createStyles(theme);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={handleBackdropPress}
    >
      <Pressable onPress={handleBackdropPress}>
        <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
          <View style={[styles.container, getModalPosition()]}>
            <Pressable>
              <Animated.View
                style={[styles.alertContainer, getAnimationStyle()]}
              >
                {/* Header */}
                <View style={styles.header}>
                  <View style={styles.titleContainer}>
                    {getAlertIcon()}
                    <Text
                      variant="h5"
                      style={styles.title}
                    >
                      {options.title}
                    </Text>
                  </View>
                  {options.showCloseButton && (
                    <TouchableOpacity
                      onPress={handleBackdropPress}
                      style={styles.closeButton}
                    >
                      <X size={20} color={theme.colors.neutral[500]} />
                    </TouchableOpacity>
                  )}
                </View>

                {/* Content */}
                <View style={styles.content}>
                  {options.message && (
                    <Text
                      variant="body"
                      style={styles.message}
                    >
                      {options.message}
                    </Text>
                  )}
                  {options.customContent}
                </View>

                {/* Buttons */}
                {options.buttons && options.buttons.length > 0 && (
                  <View style={styles.buttonContainer}>
                    {options.buttons.map((button, index) => (
                      <Button
                        key={index}
                        variant={
                          button.style === 'destructive'
                            ? 'primary'
                            : button.style === 'cancel'
                            ? 'outline'
                            : 'primary'
                        }
                        onPress={() => handleButtonPress(index)}
                        disabled={button.disabled}
                        style={styles.button}
                      >
                        {button.text}
                      </Button>
                    ))}
                  </View>
                )}
              </Animated.View>
            </Pressable>
          </View>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

// Styles
const createStyles = (theme: Theme) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
      flex: 1,
      paddingHorizontal: theme.spacing[5],
      ...Platform.select({
        web: {
          alignItems: 'center',
        },
      }),
    },
    alertContainer: {
      backgroundColor: theme.colors.neutral[0],
      borderRadius: theme.borderRadius.xl,
      maxWidth: Platform.OS === 'web' ? 400 : screenWidth - 40,
      width: '100%',
      overflow: 'hidden',
      ...theme.shadows.lg,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing[5],
      paddingBottom: theme.spacing[3],
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    title: {
      marginLeft: theme.spacing[3],
      flex: 1,
      color: theme.colors.neutral[800],
      fontFamily: theme.typography.fonts.semibold,
    },
    closeButton: {
      padding: theme.spacing[1],
      marginLeft: theme.spacing[3],
    },
    content: {
      paddingHorizontal: theme.spacing[5],
      paddingBottom: theme.spacing[5],
    },
    message: {
      lineHeight: 22,
      color: theme.colors.neutral[600],
    },
    buttonContainer: {
      flexDirection: 'row',
      padding: theme.spacing[5],
      paddingTop: 0,
      gap: theme.spacing[3],
    },
    button: {
      flex: 1,
    },
    singleButton: {
      marginHorizontal: theme.spacing[5],
    },
  });
