import React from 'react';
import { setGlobalAlertFunction } from './Alert';

// Export main components and functions
export { AlertProvider, useAlert } from './AlertProvider';
export { AlertModal } from './AlertModal';
export { Alert } from './Alert';
export * from './types';

// Hook to integrate with AlertProvider
export function useAlertIntegration() {
  const { showAlert } = require('./AlertProvider').useAlert();

  React.useEffect(() => {
    setGlobalAlertFunction(showAlert);

    return () => {
      setGlobalAlertFunction(() => {});
    };
  }, [showAlert]);
}
