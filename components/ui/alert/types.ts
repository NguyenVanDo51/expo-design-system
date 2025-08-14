import { ReactNode } from 'react';

export type AlertType = 'info' | 'success' | 'warning' | 'error';

export interface AlertButton {
  text: string;
  onPress?: () => void;
  style?: 'default' | 'cancel' | 'destructive';
  disabled?: boolean;
}

export interface AlertOptions {
  title: string;
  message?: string;
  type?: AlertType;
  buttons?: AlertButton[];
  cancelable?: boolean;
  onDismiss?: () => void;
  icon?: ReactNode;
  customContent?: ReactNode;
  duration?: number; // Auto-dismiss duration in ms
  position?: 'top' | 'center' | 'bottom';
  showCloseButton?: boolean;
  backdrop?: boolean;
  animation?: 'fade' | 'slide' | 'scale';
}

export interface AlertState {
  visible: boolean;
  options: AlertOptions | null;
}
