import React, { useRef, useEffect } from 'react';
import {
  View,
  Modal as ReactNativeModal,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  PanResponder,
  ScrollView,
} from 'react-native';
import { X } from 'lucide-react-native';
import { Text } from '../Text';
import { useTheme } from '@/hooks/useTheme';
import { Theme } from '@/theme';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');
const DISMISS_THRESHOLD = 150;
const VELOCITY_THRESHOLD = 0.5;

export interface ModalProps {
  visible: boolean;
  showCloseButton?: boolean;
  showPanResponder?: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({
  visible,
  showCloseButton = true,
  showPanResponder = false,
  onClose,
  title,
  children,
}: ModalProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const MODAL_HEIGHT = SCREEN_HEIGHT * (showPanResponder ? 0.5 : 1);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const panY = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // Only respond to vertical swipes and ignore horizontal swipes
        return (
          Math.abs(gestureState.dy) > Math.abs(gestureState.dx) &&
          Math.abs(gestureState.dy) > 10
        );
      },
      onPanResponderGrant: () => {
        // Set the offset to the current value when pan starts
        panY.setOffset(0);
        panY.setValue(0);
      },
      onPanResponderMove: (_, gestureState) => {
        // Only allow downward dragging (closing)
        if (gestureState.dy > 0) {
          panY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        // Flatten the offset
        panY.flattenOffset();

        const { dy, vy } = gestureState;

        // Check if should dismiss modal
        if (dy > DISMISS_THRESHOLD || vy > VELOCITY_THRESHOLD) {
          handleClose();
        } else {
          // Snap back to original position
          Animated.timing(panY, {
            toValue: 0,
            useNativeDriver: true,
            duration: 300,
          }).start();
        }
      },
      onPanResponderTerminate: () => {
        // Snap back if gesture is terminated
        panY.flattenOffset();
        Animated.timing(panY, {
          toValue: 0,
          useNativeDriver: true,
          duration: 300,
        }).start();
      },
    })
  ).current;

  useEffect(() => {
    if (visible) {
      // Reset pan position
      panY.setValue(0);

      // Animate modal in from bottom
      Animated.timing(slideAnim, {
        toValue: 1,
        useNativeDriver: true,
        duration: 300,
      }).start();
    } else {
      // Reset animation values when modal is hidden
      slideAnim.setValue(0);
      panY.setValue(0);
    }
  }, [visible]);

  const handleClose = () => {
    onClose();
  };

  const handleBackgroundPress = () => {
    handleClose();
  };

  if (!visible) return null;

  const translateY = Animated.add(
    slideAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [MODAL_HEIGHT, 0],
    }),
    panY
  );

  return (
    <ReactNativeModal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        {/* Background overlay */}
        <TouchableOpacity
          style={styles.backgroundOverlay}
          activeOpacity={1}
          onPress={handleBackgroundPress}
        />

        {/* Modal Content */}
        <Animated.View
          style={[
            styles.modalContainer,
            {
              height: MODAL_HEIGHT,
              transform: [{ translateY }],
            },
          ]}
        >
          {/* Drag Handle Area */}
          {showPanResponder && (
            <View style={styles.dragHandleArea} {...panResponder.panHandlers}>
              <View style={styles.dragHandle} />
            </View>
          )}

          {/* Header */}
          <View style={styles.header}>
            {showCloseButton && (
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleClose}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <X size={24} color={theme.colors.neutral[600]} />
              </TouchableOpacity>
            )}

            {title && (
              <Text variant="h5" color="primary">
                {title}
              </Text>
            )}
          </View>

          {/* Content */}
          <ScrollView
            style={styles.content}
            bounces={false}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
          >
            <View style={styles.contentPadding}>{children}</View>
          </ScrollView>
        </Animated.View>
      </View>
    </ReactNativeModal>
  );
}

const createStyles = (theme: Theme) => StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: theme.colors.neutral[0],
    borderTopLeftRadius: theme.borderRadius.xl,
    borderTopRightRadius: theme.borderRadius.xl,
    ...theme.shadows.lg,
  },
  dragHandleArea: {
    alignItems: 'center',
    paddingVertical: theme.spacing[3],
    paddingHorizontal: theme.spacing[5],
  },
  dragHandle: {
    width: 40,
    height: 4,
    backgroundColor: theme.colors.neutral[300],
    borderRadius: theme.borderRadius.sm,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral[200],
    gap: theme.spacing[1],
  },
  closeButton: {
    padding: theme.spacing[1],
  },
  content: {
    flex: 1,
  },
  contentPadding: {
    padding: theme.spacing[5],
  },
});
