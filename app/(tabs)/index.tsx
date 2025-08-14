import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';
import { Container, Stack } from '@/components/layout';
import { Text, Card, Button } from '@/components/ui';
import { Sparkles, Zap, Shield } from 'lucide-react-native';

export default function HomeScreen() {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.neutral[50],
    },
    gradient: {
      paddingVertical: theme.spacing[12],
      paddingHorizontal: theme.spacing[4],
    },
    heroCard: {
      marginTop: theme.spacing[8],
    },
    featureCard: {
      flex: 1,
      minHeight: 120,
    },
    iconContainer: {
      width: 48,
      height: 48,
      borderRadius: theme.borderRadius.xl,
      backgroundColor: theme.colors.primary[100],
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing[3],
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <LinearGradient
          colors={[theme.colors.primary[600], theme.colors.secondary[600]]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Container>
            <Stack spacing={6} align="center">
              <Text variant="h1" color="inverse" style={{ textAlign: 'center' }}>
                Design System
              </Text>
              <Text variant="bodyLarge" color="inverse" style={{ textAlign: 'center', opacity: 0.9 }}>
                A comprehensive, production-ready design system built with React Native and Expo
              </Text>
              <Button variant="secondary" size="large">
                Get Started
              </Button>
            </Stack>
          </Container>
        </LinearGradient>

        <Container style={styles.heroCard}>
          <Stack spacing={8}>
            {/* Overview Card */}
            <Card elevation="md">
              <Stack spacing={4}>
                <Text variant="h3">Welcome to Your Design System</Text>
                <Text variant="body" color="secondary">
                  This project includes a complete design system with theme configuration, 
                  reusable components, and responsive layouts that work across iOS, Android, and Web.
                </Text>
                <Stack direction="horizontal" spacing={3}>
                  <Button variant="primary">Explore Components</Button>
                  <Button variant="outline">View Examples</Button>
                </Stack>
              </Stack>
            </Card>

            {/* Features Grid */}
            <Text variant="h4">Key Features</Text>
            <Stack direction="horizontal" spacing={4}>
              <Card style={styles.featureCard} padding={6}>
                <Stack spacing={3} align="center">
                  <LinearGradient
                    colors={[theme.colors.primary[500], theme.colors.primary[600]]}
                    style={styles.iconContainer}
                  >
                    <Sparkles size={24} color={theme.colors.neutral[0]} />
                  </LinearGradient>
                  <Text variant="h6" style={{ textAlign: 'center' }}>
                    Beautiful Design
                  </Text>
                  <Text variant="bodySmall" color="secondary" style={{ textAlign: 'center' }}>
                    Modern aesthetics with thoughtful micro-interactions
                  </Text>
                </Stack>
              </Card>

              <Card style={styles.featureCard} padding={6}>
                <Stack spacing={3} align="center">
                  <LinearGradient
                    colors={[theme.colors.secondary[500], theme.colors.secondary[600]]}
                    style={styles.iconContainer}
                  >
                    <Zap size={24} color={theme.colors.neutral[0]} />
                  </LinearGradient>
                  <Text variant="h6" style={{ textAlign: 'center' }}>
                    Performance
                  </Text>
                  <Text variant="bodySmall" color="secondary" style={{ textAlign: 'center' }}>
                    Optimized for smooth 60fps animations
                  </Text>
                </Stack>
              </Card>
            </Stack>

            <Card style={styles.featureCard} padding={6}>
              <Stack spacing={3} align="center">
                <LinearGradient
                  colors={[theme.colors.success[500], theme.colors.success[600]]}
                  style={styles.iconContainer}
                >
                  <Shield size={24} color={theme.colors.neutral[0]} />
                </LinearGradient>
                <Text variant="h6" style={{ textAlign: 'center' }}>
                  Type Safety
                </Text>
                <Text variant="bodySmall" color="secondary" style={{ textAlign: 'center' }}>
                  Full TypeScript support with proper component typing
                </Text>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}