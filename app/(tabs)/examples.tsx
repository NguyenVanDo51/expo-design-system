import React, { useState } from 'react';
import { ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useCommonStyles } from '@/hooks/useCommonStyles';
import { Container, Stack, Grid } from '@/components/layout';
import { Text, Card, Button, Input } from '@/components/ui';
import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react-native';

export default function ExamplesScreen() {
  const styles = useCommonStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
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
    <SafeAreaView style={styles.common.container}>
      {/* Header */}
      <Container style={styles.common.header}>
        <Stack spacing={2} align="center">
          <Text variant="h2">Examples</Text>
          <Text variant="body" color="secondary" style={styles.textAlign.center}>
            Real-world implementations of our design system
          </Text>
        </Stack>
      </Container>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container style={styles.spacing.py6}>
          <Stack spacing={8}>
            
            {/* Profile Card Example */}
            <Stack spacing={4}>
              <Text variant="h4">Profile Card</Text>
              <Card style={[styles.bg.primary600, styles.spacing.p6]} padding={0}>
                <Stack spacing={6} align="center">
                  <LinearGradient
                    colors={['#60A5FA', '#6366F1']}
                    style={[styles.size.w20, styles.size.h20, styles.rounded.full, styles.flex.itemsCenter, styles.flex.justifyCenter]}
                  >
                    <User size={32} color="#FFFFFF" />
                  </LinearGradient>
                  
                  <Stack spacing={2} align="center">
                    <Text variant="h5" color="inverse">Sarah Johnson</Text>
                    <Text variant="body" color="inverse" style={{ opacity: 0.9 }}>
                      Senior Product Designer
                    </Text>
                  </Stack>

                  <Grid columns={3} spacing={4}>
                    {stats.map((stat, index) => (
                      <Card key={index} style={[styles.bg.white, styles.rounded.lg, styles.spacing.p4, styles.flex.itemsCenter, styles.shadow.sm]} padding={0}>
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
                    <Mail size={32} color="#2563EB" />
                    <Text variant="h6" style={styles.textAlign.center}>Email Support</Text>
                    <Text variant="bodySmall" color="secondary" style={styles.textAlign.center}>
                      Get help via email
                    </Text>
                    <Button variant="outline" size="small">Contact</Button>
                  </Stack>
                </Card>

                <Card padding={5}>
                  <Stack spacing={4} align="center">
                    <Phone size={32} color="#16A34A" />
                    <Text variant="h6" style={styles.textAlign.center}>Phone Support</Text>
                    <Text variant="bodySmall" color="secondary" style={styles.textAlign.center}>
                      Call us directly
                    </Text>
                    <Button variant="primary" size="small">Call Now</Button>
                  </Stack>
                </Card>

                <Card padding={5}>
                  <Stack spacing={4} align="center">
                    <MapPin size={32} color="#4F46E5" />
                    <Text variant="h6" style={styles.textAlign.center}>Visit Office</Text>
                    <Text variant="bodySmall" color="secondary" style={styles.textAlign.center}>
                      Schedule a meeting
                    </Text>
                    <Button variant="secondary" size="small">Schedule</Button>
                  </Stack>
                </Card>

                <Card padding={5}>
                  <Stack spacing={4} align="center">
                    <Calendar size={32} color="#D97706" />
                    <Text variant="h6" style={styles.textAlign.center}>Book Demo</Text>
                    <Text variant="bodySmall" color="secondary" style={styles.textAlign.center}>
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