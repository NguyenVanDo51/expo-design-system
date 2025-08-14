import { Platform, Alert as RNAlert } from 'react-native';
import { AlertOptions, AlertButton } from './types';

// Global reference to the alert context (set by AlertProvider)
let globalShowAlert: ((options: AlertOptions) => void) | null = null;

export function setGlobalAlertFunction(
  showAlert: (options: AlertOptions) => void
) {
  globalShowAlert = showAlert;
}

export class Alert {
  /**
   * Show a basic alert with title and message
   */
  static alert(
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: Partial<AlertOptions>
  ): void {
    if (Platform.OS === 'web' || globalShowAlert) {
      // Use custom alert for web or when provider is available
      globalShowAlert?.({
        title,
        message,
        buttons: buttons || [{ text: 'OK' }],
        type: 'info',
        animation: 'scale',
        cancelable: true,
        ...options,
      });
    } else {
      // Fallback to native alert for mobile
      const nativeButtons = buttons?.map((btn) => ({
        text: btn.text,
        onPress: btn.onPress,
        style: btn.style,
      }));

      RNAlert.alert(title, message, nativeButtons);
    }
  }

  /**
   * Show a success alert
   */
  static success(
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: Partial<AlertOptions>
  ): void {
    this.alert(title, message, buttons, {
      type: 'success',
      ...options,
    });
  }

  /**
   * Show a warning alert
   */
  static warning(
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: Partial<AlertOptions>
  ): void {
    this.alert(title, message, buttons, {
      type: 'warning',
      ...options,
    });
  }

  /**
   * Show an error alert
   */
  static error(
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: Partial<AlertOptions>
  ): void {
    this.alert(title, message, buttons, {
      type: 'error',
      ...options,
    });
  }

  /**
   * Show an info alert
   */
  static info(
    title: string,
    message?: string,
    buttons?: AlertButton[],
    options?: Partial<AlertOptions>
  ): void {
    this.alert(title, message, buttons, {
      type: 'info',
      ...options,
    });
  }

  /**
   * Show a confirmation dialog
   */
  static confirm(
    title: string,
    message?: string,
    onConfirm?: () => void,
    onCancel?: () => void,
    options?: Partial<AlertOptions>
  ): void {
    this.alert(
      title,
      message,
      [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: onCancel,
        },
        {
          text: 'Confirm',
          style: 'default',
          onPress: onConfirm,
        },
      ],
      {
        type: 'info',
        ...options,
      }
    );
  }

  /**
   * Show a toast-like notification (auto-dismiss)
   */
  static toast(
    title: string,
    message?: string,
    duration: number = 3000,
    options?: Partial<AlertOptions>
  ): void {
    globalShowAlert?.({
      title,
      message,
      type: 'info',
      duration,
      position: 'top',
      animation: 'slide',
      cancelable: true,
      showCloseButton: true,
      buttons: [],
      ...options,
    });
  }

  /**
   * Show a custom alert with full control
   */
  static custom(options: AlertOptions): void {
    if (Platform.OS === 'web' || globalShowAlert) {
      globalShowAlert?.(options);
    } else {
      // Fallback to native alert
      const nativeButtons = options.buttons?.map((btn) => ({
        text: btn.text,
        onPress: btn.onPress,
        style: btn.style,
      }));

      RNAlert.alert(options.title, options.message, nativeButtons);
    }
  }
}
