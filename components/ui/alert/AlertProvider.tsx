import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { AlertOptions, AlertState } from './types';
import { AlertModal } from './AlertModal';

interface AlertContextType {
  showAlert: (options: AlertOptions) => void;
  hideAlert: () => void;
  state: AlertState;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

interface AlertProviderProps {
  children: ReactNode;
}

export function AlertProvider({ children }: AlertProviderProps) {
  const [state, setState] = useState<AlertState>({
    visible: false,
    options: null,
  });

  const showAlert = useCallback((options: AlertOptions) => {
    setState({
      visible: true,
      options,
    });

    // Auto-dismiss if duration is specified
    if (options.duration && options.duration > 0) {
      setTimeout(() => {
        hideAlert();
        options.onDismiss?.();
      }, options.duration);
    }
  }, []);

  const hideAlert = useCallback(() => {
    setState((prev) => ({
      ...prev,
      visible: false,
    }));

    // Clear options after animation completes
    setTimeout(() => {
      setState({
        visible: false,
        options: null,
      });
    }, 300);
  }, []);

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert, state }}>
      {children}
      <AlertModal />
    </AlertContext.Provider>
  );
}

export function useAlert(): AlertContextType {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
}
