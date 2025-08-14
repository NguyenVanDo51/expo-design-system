import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';
import { breakpoints, type Breakpoint } from '@/theme/breakpoints';

export function useResponsive() {
  const [screenData, setScreenData] = useState(Dimensions.get('window'));

  useEffect(() => {
    const onChange = (result: { window: any }) => {
      setScreenData(result.window);
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, []);

  const isBreakpoint = (breakpoint: Breakpoint): boolean => {
    return screenData.width >= breakpoints[breakpoint];
  };

  return {
    width: screenData.width,
    height: screenData.height,
    isSmall: screenData.width < breakpoints.sm,
    isMedium: screenData.width >= breakpoints.sm && screenData.width < breakpoints.lg,
    isLarge: screenData.width >= breakpoints.lg,
    isBreakpoint,
  };
}