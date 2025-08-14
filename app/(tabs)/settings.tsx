import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '@/hooks/useTheme';
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
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: theme.spacing[4],
      paddingHorizontal: theme.spacing[4],
      backgroundColor: theme.colors.neutral[0],
      borderRadius: theme.borderRadius.lg,
      ...theme.shadows.sm,
    },
    iconContainer: {
      width: 40,
      height: 40,
      borderRadius: theme.borderRadius.lg,
      backgroundColor: theme.colors.primary[100],
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: theme.spacing[3],
    },
    content: {
      flex: 1,
    },
    rightSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} disabled={!onPress}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      
      <Stack style={styles.content} spacing={1}>
        <Text variant="body">{title}</Text>
        {description && (
          <Text variant="bodySmall" color="secondary">{description}</Text>
        )}
      </Stack>
      
      <View style={styles.rightSection}>
        {rightElement}
        {showChevron && onPress && (
          <ChevronRight size={20} color={theme.colors.neutral[400]} />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  const theme = useTheme();
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
      marginBottom: theme.spacing[6],
    },
    sectionHeader: {
      paddingHorizontal: theme.spacing[4],
      paddingBottom: theme.spacing[2],
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Container style={styles.header}>
        <Stack spacing={2} align="center">
          <Text variant="h2">Settings</Text>
          <Text variant="body" color="secondary" style={{ textAlign: 'center' }}>
            Customize your app experience
          </Text>
        </Stack>
      </Container>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Container style={{ paddingVertical: theme.spacing[6] }}>
          <Stack spacing={8}>
            
            {/* Account Section */}
            <Stack style={styles.section} spacing={3}>
              <Text variant="h5" style={styles.sectionHeader}>Account</Text>
              <Stack spacing={2}>
                <SettingItem
                  icon={<User size={20} color={theme.colors.primary[600]} />}
                  title="Profile"
                  description="Manage your personal information"
                  onPress={() => {}}
                />
                <SettingItem
                  icon={<Shield size={20} color={theme.colors.success[600]} />}
                  title="Privacy & Security"
                  description="Control your privacy settings"
                  onPress={() => {}}
                />
              </Stack>
            </Stack>

            {/* Preferences Section */}
            <Stack style={styles.section} spacing={3}>
              <Text variant="h5" style={styles.sectionHeader}>Preferences</Text>
              <Stack spacing={2}>
                <SettingItem
                  icon={<Bell size={20} color={theme.colors.warning[600]} />}
                  title="Notifications"
                  description="Enable push notifications"
                  rightElement={
                    <Switch
                      value={notifications}
                      onValueChange={setNotifications}
                      trackColor={{ 
                        false: theme.colors.neutral[300], 
                        true: theme.colors.primary[600] 
                      }}
                      thumbColor={theme.colors.neutral[0]}
                    />
                  }
                  showChevron={false}
                />
                
                <SettingItem
                  icon={<Palette size={20} color={theme.colors.secondary[600]} />}
                  title="Dark Mode"
                  description="Switch to dark theme"
                  rightElement={
                    <Switch
                      value={darkMode}
                      onValueChange={setDarkMode}
                      trackColor={{ 
                        false: theme.colors.neutral[300], 
                        true: theme.colors.primary[600] 
                      }}
                      thumbColor={theme.colors.neutral[0]}
                    />
                  }
                  showChevron={false}
                />
                
                <SettingItem
                  icon={<Globe size={20} color={theme.colors.info[600]} />}
                  title="Language"
                  description="English (US)"
                  onPress={() => {}}
                />
              </Stack>
            </Stack>

            {/* Support Section */}
            <Stack style={styles.section} spacing={3}>
              <Text variant="h5" style={styles.sectionHeader}>Support</Text>
              <Stack spacing={2}>
                <SettingItem
                  icon={<Bell size={20} color={theme.colors.neutral[600]} />}
                  title="Help Center"
                  description="Find answers to common questions"
                  onPress={() => {}}
                />
                
                <SettingItem
                  icon={<Mail size={20} color={theme.colors.neutral[600]} />}
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
                icon={<LogOut size={20} color={theme.colors.error[600]} />}
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