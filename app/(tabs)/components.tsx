import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCommonStyles } from '@/hooks/useCommonStyles';
import { Container, Stack } from '@/components/layout';
import { Text, Card, Button, Input } from '@/components/ui';

export default function ComponentsScreen() {
  const styles = useCommonStyles();
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(false);

  const validateInput = (value: string) => {
    setInputValue(value);
    setHasError(value.length < 3 && value.length > 0);
  };

  return (
    <SafeAreaView style={styles.common.container}>
      {/* Header */}
      <Container style={styles.common.header}>
        <Stack spacing={2} align="center">
          <Text variant="h2">Component Library</Text>
          <Text variant="body" color="secondary" style={styles.textAlign.center}>
            Explore our comprehensive collection of UI components
          </Text>
        </Stack>
      </Container>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container style={styles.spacing.py6}>
          <Stack spacing={8}>
            
            {/* Typography Section */}
            <Card style={styles.spacing.mb8}>
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
            <Card style={styles.spacing.mb8}>
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
            <Card style={styles.spacing.mb8}>
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
            <Card style={styles.spacing.mb8}>
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
                      {['#93C5FD', '#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8'].map((color, index) => (
                        <Card
                          key={index}
                          style={{
                            backgroundColor: color,
                            width: 60,
                            height: 40,
                            borderRadius: 6,
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
                          backgroundColor: '#22C55E',
                          width: 60,
                          height: 40,
                          borderRadius: 6,
                        }}
                        padding={0}
                      />
                      <Card
                        style={{
                          backgroundColor: '#F59E0B',
                          width: 60,
                          height: 40,
                          borderRadius: 6,
                        }}
                        padding={0}
                      />
                      <Card
                        style={{
                          backgroundColor: '#EF4444',
                          width: 60,
                          height: 40,
                          borderRadius: 6,
                        }}
                        padding={0}
                      />
                      <Card
                        style={{
                          backgroundColor: '#0EA5E9',
                          width: 60,
                          height: 40,
                          borderRadius: 6,
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