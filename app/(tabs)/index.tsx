import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useCommonStyles } from '@/hooks/useCommonStyles';
import { Container, Stack } from '@/components/layout';
import { Text, Card, Button } from '@/components/ui';
import { Sparkles, Zap, Shield } from 'lucide-react-native';

export default function HomeScreen() {
  const styles = useCommonStyles();

  return (
    <SafeAreaView style={styles.common.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <LinearGradient
          colors={['#2563EB', '#4F46E5']}
          style={[styles.spacing.py12, styles.spacing.px4]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Container>
            <Stack spacing={6} align="center">
              <Text variant="h1" color="inverse" style={styles.textAlign.center}>
                Design System
              </Text>
              <Text variant="bodyLarge" color="inverse" style={[styles.textAlign.center, styles.opacity.opacity90]}>
                A comprehensive, production-ready design system built with React Native and Expo
              </Text>
              <Button variant="secondary" size="large">
                Get Started
              </Button>
            </Stack>
          </Container>
        </LinearGradient>

        <Container style={styles.spacing.mt8}>
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
              <Card style={[styles.flex.flex1, styles.size.minH120]} padding={6}>
                <Stack spacing={3} align="center">
                  <LinearGradient
                    colors={['#3B82F6', '#2563EB']}
                    style={[styles.size.w12, styles.size.h12, styles.rounded.xl, styles.bg.primary100, styles.flex.itemsCenter, styles.flex.justifyCenter, styles.spacing.mb3]}
                  >
                    <Sparkles size={24} color="#FFFFFF" />
                  </LinearGradient>
                  <Text variant="h6" style={styles.textAlign.center}>
                    Beautiful Design
                  </Text>
                  <Text variant="bodySmall" color="secondary" style={styles.textAlign.center}>
                    Modern aesthetics with thoughtful micro-interactions
                  </Text>
                </Stack>
              </Card>

              <Card style={[styles.flex.flex1, styles.size.minH120]} padding={6}>
                <Stack spacing={3} align="center">
                  <LinearGradient
                    colors={['#6366F1', '#4F46E5']}
                    style={[styles.size.w12, styles.size.h12, styles.rounded.xl, styles.bg.primary100, styles.flex.itemsCenter, styles.flex.justifyCenter, styles.spacing.mb3]}
                  >
                    <Zap size={24} color="#FFFFFF" />
                  </LinearGradient>
                  <Text variant="h6" style={styles.textAlign.center}>
                    Performance
                  </Text>
                  <Text variant="bodySmall" color="secondary" style={styles.textAlign.center}>
                    Optimized for smooth 60fps animations
                  </Text>
                </Stack>
              </Card>
            </Stack>

            <Card style={[styles.flex.flex1, styles.size.minH120]} padding={6}>
              <Stack spacing={3} align="center">
                <LinearGradient
                  colors={['#22C55E', '#16A34A']}
                  style={[styles.size.w12, styles.size.h12, styles.rounded.xl, styles.bg.primary100, styles.flex.itemsCenter, styles.flex.justifyCenter, styles.spacing.mb3]}
                >
                  <Shield size={24} color="#FFFFFF" />
                </LinearGradient>
                <Text variant="h6" style={styles.textAlign.center}>
                  Type Safety
                </Text>
                <Text variant="bodySmall" color="secondary" style={styles.textAlign.center}>
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