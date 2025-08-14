import React, { useState } from 'react';
import { ScrollView, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/hooks/useTheme';
import { Container, Stack, Grid } from '@/components/layout';
import { Text, Card, Button, Input } from '@/components/ui';
import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react-native';

export default function ExamplesScreen() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

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
    profileCard: {
      backgroundColor: theme.colors.primary[600],
      padding: theme.spacing[6],
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: theme.colors.primary[500],
      alignItems: 'center',
      justifyContent: 'center',
    },
    statCard: {
      backgroundColor: theme.colors.neutral[0],
      borderRadius: theme.borderRadius.lg,
      padding: theme.spacing[4],
      alignItems: 'center',
      ...theme.shadows.sm,
    },
  });

  const handleSubmit = () => {
    Alert.alert('Form Submitted', 'Your information has been saved successfully!');
  };

  const stats = [
    { label: 'Projects', value: '24' },
    { label: 'Reviews', value: '98%' },
    { label: 'Clients', value: '150+' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Container style={styles.header}>
        <Stack spacing={2} align="center">
          <Text variant="h2">Examples</Text>
          <Text variant="body" color="secondary" style={{ textAlign: 'center' }}>
            Real-world implementations of our design system
          </Text>
        </Stack>
      </Container>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container style={{ paddingVertical: theme.spacing[6] }}>
          <Stack spacing={8}>
            
            {/* Profile Card Example */}
            <Stack spacing={4}>
              <Text variant="h4">Profile Card</Text>
              <Card style={styles.profileCard} padding={0}>
                <Stack spacing={6} align="center">
                  <LinearGradient
                    colors={[theme.colors.primary[400], theme.colors.secondary[500]]}
                    style={styles.avatar}
                  >
                    <User size={32} color={theme.colors.neutral[0]} />
                  </LinearGradient>
                  
                  <Stack spacing={2} align="center">
                    <Text variant="h5" color="inverse">Sarah Johnson</Text>
                    <Text variant="body" color="inverse" style={{ opacity: 0.9 }}>
                      Senior Product Designer
                    </Text>
                  </Stack>

                  <Grid columns={3} spacing={4}>
                    {stats.map((stat, index) => (
                      <Card key={index} style={styles.statCard} padding={3}>
                        <Text variant="h6" color="primary">{stat.value}</Text>
                        <Text variant="caption" color="muted">{stat.label}</Text>
                      </Card>
                    ))}
                  </Grid>
                </Stack>
              </Card>
            </Stack>

            {/* Contact Form Example */}
            <Stack spacing={4}>
              <Text variant="h4">Contact Form</Text>
              <Card>
                <Stack spacing={6}>
                  <Stack spacing={2}>
                    <Text variant="h5">Get in Touch</Text>
                    <Text variant="body" color="secondary">
                      Fill out the form below and we'll get back to you soon.
                    </Text>
                  </Stack>

                  <Stack spacing={4}>
                    <Input
                      label="Full Name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
                      variant="outline"
                    />
                    
                    <Input
                      label="Email Address"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
                      keyboardType="email-address"
                      variant="outline"
                    />
                    
                    <Input
                      label="Phone Number"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChangeText={(text) => setFormData(prev => ({ ...prev, phone: text }))}
                      keyboardType="phone-pad"
                      variant="outline"
                    />
                    
                    <Input
                      label="Address"
                      placeholder="123 Main St, City, State"
                      value={formData.address}
                      onChangeText={(text) => setFormData(prev => ({ ...prev, address: text }))}
                      variant="outline"
                      multiline
                      numberOfLines={3}
                    />
                    
                    <Stack direction="horizontal" spacing={3}>
                      <Button 
                        variant="primary" 
                        style={{ flex: 1 }}
                        onPress={handleSubmit}
                      >
                        Submit
                      </Button>
                      <Button 
                        variant="outline" 
                        style={{ flex: 1 }}
                        onPress={() => setFormData({ name: '', email: '', phone: '', address: '' })}
                      >
                        Reset
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Card>
            </Stack>

            {/* Action Cards Example */}
            <Stack spacing={4}>
              <Text variant="h4">Action Cards</Text>
              <Grid columns={2} spacing={4}>
                <Card padding={5}>
                  <Stack spacing={4} align="center">
                    <Mail size={32} color={theme.colors.primary[600]} />
                    <Text variant="h6" style={{ textAlign: 'center' }}>Email Support</Text>
                    <Text variant="bodySmall" color="secondary" style={{ textAlign: 'center' }}>
                      Get help via email
                    </Text>
                    <Button variant="outline" size="small">Contact</Button>
                  </Stack>
                </Card>

                <Card padding={5}>
                  <Stack spacing={4} align="center">
                    <Phone size={32} color={theme.colors.success[600]} />
                    <Text variant="h6" style={{ textAlign: 'center' }}>Phone Support</Text>
                    <Text variant="bodySmall" color="secondary" style={{ textAlign: 'center' }}>
                      Call us directly
                    </Text>
                    <Button variant="primary" size="small">Call Now</Button>
                  </Stack>
                </Card>

                <Card padding={5}>
                  <Stack spacing={4} align="center">
                    <MapPin size={32} color={theme.colors.secondary[600]} />
                    <Text variant="h6" style={{ textAlign: 'center' }}>Visit Office</Text>
                    <Text variant="bodySmall" color="secondary" style={{ textAlign: 'center' }}>
                      Schedule a meeting
                    </Text>
                    <Button variant="secondary" size="small">Schedule</Button>
                  </Stack>
                </Card>

                <Card padding={5}>
                  <Stack spacing={4} align="center">
                    <Calendar size={32} color={theme.colors.warning[600]} />
                    <Text variant="h6" style={{ textAlign: 'center' }}>Book Demo</Text>
                    <Text variant="bodySmall" color="secondary" style={{ textAlign: 'center' }}>
                      See it in action
                    </Text>
                    <Button variant="ghost" size="small">Book Now</Button>
                  </Stack>
                </Card>
              </Grid>
            </Stack>
          </Stack>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}