import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { router, useNavigation } from 'expo-router';
import { Container, Stack } from '@/components/layout';
import {
  Text,
  Button,
  Input,
  Card,
  LanguageSelector,
  Alert,
} from '@/components/ui';
import { useCommonStyles } from '@/hooks/useCommonStyles';
import { Plus, Book } from 'lucide-react-native';
import { StorageService } from '@/utils/storage';
import { Topic } from '@/types';
import {
  DEFAULT_ORIGINAL_LANGUAGE,
  DEFAULT_TARGET_LANGUAGE,
} from '@/constants/languages';

interface FormData {
  title: string;
  description: string;
  originalLanguage: string;
  targetLanguage: string;
}

interface FormErrors {
  title?: string;
  originalLanguage?: string;
  targetLanguage?: string;
}

export default function AddTopicScreen() {
  const styles = useCommonStyles();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    originalLanguage: DEFAULT_ORIGINAL_LANGUAGE,
    targetLanguage: DEFAULT_TARGET_LANGUAGE,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle unsaved changes when user tries to leave
  const hasUnsavedChanges = 
    formData.title.trim() !== '' ||
    formData.description.trim() !== '' ||
    formData.originalLanguage !== DEFAULT_ORIGINAL_LANGUAGE ||
    formData.targetLanguage !== DEFAULT_TARGET_LANGUAGE;

  const handleBackPress = () => {
    if (hasUnsavedChanges) {
      Alert.alert(
        'Discard Changes',
        'Are you sure you want to go back? Any unsaved changes will be lost.',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Discard',
            style: 'destructive',
            onPress: () => router.back(),
          },
        ]
      );
    } else {
      router.back();
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', (e) => {
      if (!hasUnsavedChanges) {
        // If no unsaved changes, let the user leave
        return;
      }

      // Prevent default behavior of leaving the screen
      e.preventDefault();

      // Prompt the user before leaving the screen
      Alert.alert(
        'Discard Changes',
        'Are you sure you want to go back? Any unsaved changes will be lost.',
        [
          { text: 'Cancel', style: 'cancel' },
          {
            text: 'Discard',
            style: 'destructive',
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]
      );
    });

    return unsubscribe;
  }, [navigation, hasUnsavedChanges]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = 'Topic title is required';
    }

    if (!formData.originalLanguage.trim()) {
      newErrors.originalLanguage = 'Original language is required';
    }

    if (!formData.targetLanguage.trim()) {
      newErrors.targetLanguage = 'Target language is required';
    }

    if (
      formData.originalLanguage.trim().toLowerCase() ===
      formData.targetLanguage.trim().toLowerCase()
    ) {
      newErrors.targetLanguage =
        'Target language must be different from original language';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for this field if it exists
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }
    setIsLoading(true);
    try {
      const newTopic = await StorageService.addTopic({
        title: formData.title.trim(),
        description: formData.description.trim(),
        originalLanguage: formData.originalLanguage.trim(),
        targetLanguage: formData.targetLanguage.trim(),
        words: [],
        isCompleted: false,
      });

      router.replace({
        pathname: '/topic/[id]',
        params: { id: newTopic.id },
      });
    } catch (error) {
      console.error('Error creating topic:', error);
      Alert.alert('Error', 'Failed to create topic. Please try again.', [
        { text: 'OK' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView>
      <Container style={styles.spacing.py4}>
        <Stack>
          {/* Form */}
          <Card>
            <Stack spacing={5}>
              <Stack spacing={2}>
                <Text variant="h5">Topic Details</Text>
                <Text variant="body" color="secondary">
                  Provide basic information about your learning topic
                </Text>
              </Stack>

              <Stack spacing={4}>
                <Input
                  label="Topic Title *"
                  placeholder="e.g., Basic Greetings, Travel Phrases, Food & Dining"
                  value={formData.title}
                  onChangeText={(value) => handleInputChange('title', value)}
                  error={errors.title}
                  variant="outline"
                />

                <Input
                  label="Description"
                  placeholder="Briefly describe what this topic covers (optional)"
                  value={formData.description}
                  onChangeText={(value) =>
                    handleInputChange('description', value)
                  }
                  variant="outline"
                  multiline
                  numberOfLines={3}
                />
              </Stack>
            </Stack>
          </Card>

          {/* Language Settings */}
          <Card>
            <Stack spacing={5}>
              <Stack spacing={2}>
                <Text variant="h5">Language Settings</Text>
                <Text variant="body" color="secondary">
                  Select the languages for this learning topic from our curated
                  list
                </Text>
              </Stack>

              <Stack spacing={4}>
                <LanguageSelector
                  label="Original Language *"
                  placeholder="Select your native language"
                  value={formData.originalLanguage}
                  onValueChange={(value) =>
                    handleInputChange('originalLanguage', value)
                  }
                  error={errors.originalLanguage}
                />

                <LanguageSelector
                  label="Target Language *"
                  placeholder="Select the language you want to learn"
                  value={formData.targetLanguage}
                  onValueChange={(value) =>
                    handleInputChange('targetLanguage', value)
                  }
                  error={errors.targetLanguage}
                />
              </Stack>
            </Stack>
          </Card>

          {/* Action Buttons */}
          <Stack spacing={3}>
            <Button variant="primary" onPress={handleSave} disabled={isLoading}>
              <View
                style={[
                  styles.flex.flexRow,
                  styles.flex.itemsCenter,
                  styles.flex.justifyCenter,
                ]}
              >
                <Plus size={20} color="#FFFFFF" />
                <Text variant="body" color="inverse" style={styles.spacing.ml2}>
                  {isLoading ? 'Creating Topic...' : 'Create Topic'}
                </Text>
              </View>
            </Button>

            <Button
              variant="outline"
              onPress={handleBackPress}
              disabled={isLoading}
            >
              Cancel
            </Button>
          </Stack>

          {/* Helper Text */}
          <Card style={styles.bg.gray50}>
            <Text
              variant="bodySmall"
              color="secondary"
              style={styles.textAlign.center}
            >
              💡 <Text style={{ fontWeight: '600' }}>Tip:</Text> After creating
              your topic, you can add vocabulary words and start practicing!
            </Text>
          </Card>
        </Stack>
      </Container>
    </ScrollView>
  );
}
