import React, { useState } from 'react';
import { ScrollView, Switch, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCommonStyles } from '@/hooks/useCommonStyles';
import { Container, Stack } from '@/components/layout';
import { Text, Card, Button, Input } from '@/components/ui';
import { 
  Bell, 
  Shield, 
  Palette, 
  Globe, 
  User, 
  ChevronRight,
  LogOut,
  Mail
} from 'lucide-react-native';

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onPress?: () => void;
  rightElement?: React.ReactNode;
  showChevron?: boolean;
}

function SettingItem({ 
  icon, 
  title, 
  description, 
  onPress, 
  rightElement, 
  showChevron = true 
}: SettingItemProps) {
  const styles = useCommonStyles();

  return (
    <TouchableOpacity style={[styles.common.settingItem]} onPress={onPress} disabled={!onPress}>
      <View style={[styles.common.iconContainer, styles.spacing.mr3]}>
        {icon}
      </View>
      
      <Stack style={styles.flex.flex1} spacing={1}>
        <Text variant="body">{title}</Text>
        {description && (
          <Text variant="bodySmall" color="secondary">{description}</Text>
        )}
      </Stack>
      
      <View style={[styles.flex.flexRow, styles.flex.itemsCenter]}>
        {rightElement}
        {showChevron && onPress && (
          <ChevronRight size={20} color="#A3A3A3" />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  const styles = useCommonStyles();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <SafeAreaView style={styles.common.container}>
      {/* Header */}
      <Container style={styles.common.header}>
        <Stack spacing={2} align="center">
          <Text variant="h2">Settings</Text>
          <Text variant="body" color="secondary" style={{ textAlign: 'center' }}>
            Customize your app experience
          </Text>
        </Stack>
      </Container>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container style={styles.spacing.py6}>
          <Stack spacing={8}>
            
            {/* Account Section */}
            <Stack style={styles.spacing.mb6} spacing={3}>
              <Text variant="h5" style={[styles.spacing.px4, styles.spacing.pb2]}>Account</Text>
              <Stack spacing={2}>
                <SettingItem
                  icon={<User size={20} color="#2563EB" />}
                  title="Profile"
                  description="Manage your personal information"
                  onPress={() => {}}
                />
                <SettingItem
                  icon={<Shield size={20} color="#16A34A" />}
                  title="Privacy & Security"
                  description="Control your privacy settings"
                  onPress={() => {}}
                />
              </Stack>
            </Stack>

            {/* Preferences Section */}
            <Stack style={styles.spacing.mb6} spacing={3}>
              <Text variant="h5" style={[styles.spacing.px4, styles.spacing.pb2]}>Preferences</Text>
              <Stack spacing={2}>
                <SettingItem
                  icon={<Bell size={20} color="#D97706" />}
                  title="Notifications"
                  description="Enable push notifications"
                  rightElement={
                    <Switch
                      value={notifications}
                      onValueChange={setNotifications}
                      trackColor={{ 
                        false: '#D4D4D4', 
                        true: '#2563EB' 
                      }}
                      thumbColor="#FFFFFF"
                    />
                  }
                  showChevron={false}
                />
                
                <SettingItem
                  icon={<Palette size={20} color="#4F46E5" />}
                  title="Dark Mode"
                  description="Switch to dark theme"
                  rightElement={
                    <Switch
                      value={darkMode}
                      onValueChange={setDarkMode}
                      trackColor={{ 
                        false: '#D4D4D4', 
                        true: '#2563EB' 
                      }}
                      thumbColor="#FFFFFF"
                    />
                  }
                  showChevron={false}
                />
                
                <SettingItem
                  icon={<Globe size={20} color="#0284C7" />}
                  title="Language"
                  description="English (US)"
                  onPress={() => {}}
                />
              </Stack>
            </Stack>

            {/* Support Section */}
            <Stack style={styles.spacing.mb6} spacing={3}>
              <Text variant="h5" style={[styles.spacing.px4, styles.spacing.pb2]}>Support</Text>
              <Stack spacing={2}>
                <SettingItem
                  icon={<Bell size={20} color="#525252" />}
                  title="Help Center"
                  description="Find answers to common questions"
                  onPress={() => {}}
                />
                
                <SettingItem
                  icon={<Mail size={20} color="#525252" />}
                  title="Contact Support"
                  description="Get help from our team"
                  onPress={() => {}}
                />
              </Stack>
            </Stack>

            {/* Design System Demo Form */}
            <Card>
              <Stack spacing={6}>
                <Stack spacing={2}>
                  <Text variant="h5">Demo Form</Text>
                  <Text variant="body" color="secondary">
                    Example form showcasing our input components
                  </Text>
                </Stack>

                <Stack spacing={4}>
                  <Input
                    label="Full Name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
                  />
                  
                  <Input
                    label="Email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
                    keyboardType="email-address"
                  />
                  
                  <Input
                    label="Phone"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChangeText={(text) => setFormData(prev => ({ ...prev, phone: text }))}
                    keyboardType="phone-pad"
                  />
                  
                  <Input
                    label="Address"
                    placeholder="123 Main St, City, State"
                    value={formData.address}
                    onChangeText={(text) => setFormData(prev => ({ ...prev, address: text }))}
                    multiline
                    numberOfLines={3}
                  />
                  
                  <Button variant="primary" onPress={handleSubmit}>
                    Save Information
                  </Button>
                </Stack>
              </Stack>
            </Card>

            {/* Logout */}
            <Card>
              <SettingItem
                icon={<LogOut size={20} color="#DC2626" />}
                title="Sign Out"
                description="Sign out of your account"
                onPress={() => {}}
                showChevron={false}
              />
            </Card>
          </Stack>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
}