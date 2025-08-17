import { Tabs } from 'expo-router';
import { Chrome as Home, Palette, BookOpen, Settings } from 'lucide-react-native';
import { useTheme } from '@/hooks/useTheme';
import { useResponsive } from '@/hooks/useResponsive';

export default function TabLayout() {
  const theme = useTheme();
  const { isLarge } = useResponsive();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary[600],
        tabBarInactiveTintColor: theme.colors.neutral[500],
        tabBarStyle: {
          backgroundColor: theme.colors.neutral[0],
          borderTopColor: theme.colors.neutral[200],
          paddingBottom: isLarge ? 8 : 4,
          height: isLarge ? 80 : 60,
        },
        tabBarLabelStyle: {
          fontFamily: theme.typography.fonts.medium,
          fontSize: isLarge ? 14 : 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color }) => (
            <Home size={isLarge ? 24 : 20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          title: 'Components',
          tabBarIcon: ({ size, color }) => (
            <Palette size={isLarge ? 24 : 20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="examples"
        options={{
          title: 'Examples',
          tabBarIcon: ({ size, color }) => (
            <BookOpen size={isLarge ? 24 : 20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ size, color }) => (
            <Settings size={isLarge ? 24 : 20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}