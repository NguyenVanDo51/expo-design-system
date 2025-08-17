import React, { useState, useEffect } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Container, Stack } from '@/components/layout';
import { Text, Button, Input } from '@/components/ui';
import { useCommonStyles } from '@/hooks/useCommonStyles';
import { NewWord, Topic } from '@/types';

export default function AddWordScreen() {
  const styles = useCommonStyles();
  const params = useLocalSearchParams();
  const topicId = params.topicId as string;
  
  // Sample topic data - in a real app, you'd fetch this based on the topic ID
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);
  
  const [formData, setFormData] = useState({
    word: '',
    translation: '',
    language: '',
    targetLanguage: '',
    example: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch topic data when topicId is provided
  useEffect(() => {
    if (topicId) {
      // In a real app, you'd fetch this from your database/storage
      const mockTopic: Topic = {
        id: topicId,
        title: 'Basic Greetings',
        description: 'Learn essential greeting words in Spanish',
        originalLanguage: 'English',
        targetLanguage: 'Spanish',
        isCompleted: false,
        words: []
      };
      setCurrentTopic(mockTopic);
      setFormData(prev => ({
        ...prev,
        language: mockTopic.originalLanguage,
        targetLanguage: mockTopic.targetLanguage,
      }));
    } else {
      // Default values when not adding to a specific topic
      setFormData(prev => ({
        ...prev,
        language: 'English',
        targetLanguage: 'Spanish',
      }));
    }
  }, [topicId]);

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.word.trim() || !formData.translation.trim()) {
      Alert.alert('Error', 'Word and translation are required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create new word object
      const newWord: NewWord = {
        id: Date.now().toString(), // In a real app, you'd use a proper ID generation
        word: formData.word.trim(),
        translation: formData.translation.trim(),
        language: formData.language,
        targetLanguage: formData.targetLanguage,
        example: formData.example.trim() || undefined,
      };

      // Here you would typically save to your database/storage
      console.log('New word created:', newWord);

      // Show success message
      const successMessage = topicId 
        ? 'Word added to topic successfully!' 
        : 'Word added successfully!';
      
      Alert.alert(
        'Success!', 
        successMessage,
        [
          {
            text: 'Add Another',
            onPress: () => {
              setFormData({
                word: '',
                translation: '',
                language: topicId ? (currentTopic?.originalLanguage || 'English') : 'English',
                targetLanguage: topicId ? (currentTopic?.targetLanguage || 'Spanish') : 'Spanish',
                example: '',
              });
            }
          },
          {
            text: topicId ? 'Back to Topic' : 'Go to Home',
            onPress: () => {
              if (topicId) {
                router.push({
                  pathname: '/topic/[id]',
                  params: { id: topicId }
                });
              } else {
                router.push('/(tabs)');
              }
            }
          }
        ]
      );
    } catch (error) {
      Alert.alert('Error', 'Failed to add word. Please try again.');
      console.error('Error adding word:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.word.trim() && formData.translation.trim();

  return (
    <ScrollView contentContainerStyle={styles.spacing.p6}>
      <Stack spacing={6}>
        <Text variant="h2" style={styles.textAlign.center}>
          {topicId ? 'Add Word to Topic' : 'Add New Word'}
        </Text>

        <Text variant="body" color="muted" style={styles.textAlign.center}>
          {topicId 
            ? `Add a new word to your topic: ${currentTopic?.title || ''}`
            : 'Add a new word to your vocabulary collection'
          }
        </Text>

        {topicId && currentTopic && (
          <View style={[styles.flex.flexRow, styles.flex.itemsCenter, styles.flex.justifyCenter, styles.spacing.p3, styles.rounded.lg, styles.bg.primary100]}>
            <Text variant="bodySmall" color="primary">
              {currentTopic.originalLanguage} → {currentTopic.targetLanguage}
            </Text>
          </View>
        )}

        <Stack spacing={4}>
          <View>
            <Text variant="body" style={styles.spacing.mb2}>
              Word *
            </Text>
            <Input
              placeholder="Enter the word"
              value={formData.word}
              onChangeText={(value) => handleInputChange('word', value)}
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text variant="body" style={styles.spacing.mb2}>
              Translation *
            </Text>
            <Input
              placeholder="Enter the translation"
              value={formData.translation}
              onChangeText={(value) => handleInputChange('translation', value)}
              autoCapitalize="none"
            />
          </View>

          {!topicId && (
            <>
              <View>
                <Text variant="body" style={styles.spacing.mb2}>
                  Original Language
                </Text>
                <Input
                  placeholder="e.g., English"
                  value={formData.language}
                  onChangeText={(value) => handleInputChange('language', value)}
                />
              </View>

              <View>
                <Text variant="body" style={styles.spacing.mb2}>
                  Target Language
                </Text>
                <Input
                  placeholder="e.g., Spanish"
                  value={formData.targetLanguage}
                  onChangeText={(value) => handleInputChange('targetLanguage', value)}
                />
              </View>
            </>
          )}

          <View>
            <Text variant="body" style={styles.spacing.mb2}>
              Example (Optional)
            </Text>
            <Input
              placeholder="Enter an example sentence"
              value={formData.example}
              onChangeText={(value) => handleInputChange('example', value)}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
            />
          </View>
        </Stack>

        <Stack spacing={3}>
          <Button
            onPress={handleSubmit}
            disabled={!isFormValid || isSubmitting}
            variant={isFormValid ? 'primary' : 'secondary'}
          >
            {isSubmitting ? 'Adding Word...' : 'Add Word'}
          </Button>

          <Button
            onPress={() => router.back()}
            variant="outline"
          >
            Cancel
          </Button>
        </Stack>

        <Text variant="caption" color="muted" style={styles.textAlign.center}>
          * Required fields
        </Text>
      </Stack>
    </ScrollView>
  );
}
