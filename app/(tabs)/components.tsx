import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
import { Container, Stack } from '@/components/layout';
import { Text, Card, Button, Input } from '@/components/ui';

export default function ComponentsScreen() {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.neutral[50],
    },
    header: {
      backgroundColor: theme.colors.neutral[0],
      paddingVertical: theme.spacing[6],
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.neutral[200],
    },
    section: {
      marginBottom: theme.spacing[8],
    },
  });

  const validateInput = (value: string) => {
    setInputValue(value);
    setHasError(value.length < 3 && value.length > 0);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Container style={styles.header}>
        <Stack spacing={2} align="center">
          <Text variant="h2">Component Library</Text>
          <Text variant="body" color="secondary" style={{ textAlign: 'center' }}>
            Explore our comprehensive collection of UI components
          </Text>
        </Stack>
      </Container>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container style={{ paddingVertical: theme.spacing[6] }}>
          <Stack spacing={8}>
            
            {/* Typography Section */}
            <Card style={styles.section}>
              <Stack spacing={4}>
                <Text variant="h4">Typography</Text>
                <Text variant="h1">Heading 1</Text>
                <Text variant="h2">Heading 2</Text>
                <Text variant="h3">Heading 3</Text>
                <Text variant="h4">Heading 4</Text>
                <Text variant="h5">Heading 5</Text>
                <Text variant="h6">Heading 6</Text>
                <Text variant="bodyLarge">Large body text for important content</Text>
                <Text variant="body">Regular body text for standard content</Text>
                <Text variant="bodySmall">Small body text for secondary information</Text>
                <Text variant="caption">Caption text for fine print</Text>
                <Text variant="label">Label text for form elements</Text>
              </Stack>
            </Card>

            {/* Buttons Section */}
            <Card style={styles.section}>
              <Stack spacing={6}>
                <Text variant="h4">Buttons</Text>
                
                <Stack spacing={4}>
                  <Text variant="h6">Variants</Text>
                  <Stack direction="horizontal" spacing={3} wrap>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                  </Stack>
                </Stack>

                <Stack spacing={4}>
                  <Text variant="h6">Sizes</Text>
                  <Stack direction="horizontal" spacing={3} wrap>
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                  </Stack>
                </Stack>

                <Stack spacing={4}>
                  <Text variant="h6">States</Text>
                  <Stack direction="horizontal" spacing={3} wrap>
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                  </Stack>
                </Stack>
              </Stack>
            </Card>

            {/* Inputs Section */}
            <Card style={styles.section}>
              <Stack spacing={6}>
                <Text variant="h4">Input Fields</Text>
                
                <Stack spacing={4}>
                  <Input
                    label="Default Input"
                    placeholder="Enter some text..."
                    helperText="This is helper text"
                  />
                  
                  <Input
                    label="Email Address"
                    placeholder="your@email.com"
                    value={inputValue}
                    onChangeText={validateInput}
                    error={hasError ? 'Must be at least 3 characters' : undefined}
                    keyboardType="email-address"
                  />
                  
                  <Input
                    label="Password"
                    placeholder="Enter password"
                    secureTextEntry
                    variant="filled"
                  />
                  
                  <Input
                    label="Disabled Input"
                    placeholder="This is disabled"
                    disabled
                    value="Disabled value"
                  />
                </Stack>
              </Stack>
            </Card>

            {/* Color Palette Section */}
            <Card style={styles.section}>
              <Stack spacing={4}>
                <Text variant="h4">Color System</Text>
                <Text variant="body" color="secondary">
                  Our color system includes primary, secondary, neutral, and semantic colors
                  with multiple shades for consistent design hierarchy.
                </Text>
                
                <Stack spacing={6}>
                  <Stack spacing={2}>
                    <Text variant="h6">Primary Colors</Text>
                    <Stack direction="horizontal" spacing={2} wrap>
                      {Object.entries(theme.colors.primary).slice(3, 8).map(([shade, color]) => (
                        <Card
                          key={shade}
                          style={{
                            backgroundColor: color,
                            width: 60,
                            height: 40,
                            borderRadius: theme.borderRadius.md,
                          }}
                          padding={0}
                        />
                      ))}
                    </Stack>
                  </Stack>

                  <Stack spacing={2}>
                    <Text variant="h6">Semantic Colors</Text>
                    <Stack direction="horizontal" spacing={2} wrap>
                      <Card
                        style={{
                          backgroundColor: theme.colors.success[500],
                          width: 60,
                          height: 40,
                          borderRadius: theme.borderRadius.md,
                        }}
                        padding={0}
                      />
                      <Card
                        style={{
                          backgroundColor: theme.colors.warning[500],
                          width: 60,
                          height: 40,
                          borderRadius: theme.borderRadius.md,
                        }}
                        padding={0}
                      />
                      <Card
                        style={{
                          backgroundColor: theme.colors.error[500],
                          width: 60,
                          height: 40,
                          borderRadius: theme.borderRadius.md,
                        }}
                        padding={0}
                      />
                      <Card
                        style={{
                          backgroundColor: theme.colors.info[500],
                          width: 60,
                          height: 40,
                          borderRadius: theme.borderRadius.md,
                        }}
                        padding={0}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}