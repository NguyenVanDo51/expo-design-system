import React, { useState, useEffect } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { router, useLocalSearchParams, useFocusEffect, Redirect } from 'expo-router';
import { Container, Stack } from '@/components/layout';
import { Text, Button } from '@/components/ui';
import { useCommonStyles } from '@/hooks/useCommonStyles';
import { Topic } from '@/types';
import { StorageService } from '@/utils/storage';

export default function TopicDetailsScreen() {
  const styles = useCommonStyles();
  const params = useLocalSearchParams();
  const topicId = params.id as string;
  
  const [topic, setTopic] = useState<Topic | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadTopic = async () => {
    try {
      setIsLoading(true);
      const storedTopic = await StorageService.getTopic(topicId);
      if (storedTopic) {
        setTopic(storedTopic);
      } else {
        Alert.alert(
          'Topic Not Found',
          'The requested topic could not be found.',
          [{ text: 'Go Back', onPress: () => router.back() }]
        );
      }
    } catch (error) {
      console.error('Error loading topic:', error);
      Alert.alert(
        'Error',
        'Failed to load topic. Please try again.',
        [{ text: 'Go Back', onPress: () => router.back() }]
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (topicId) {
      loadTopic();
    }
  }, [topicId]);

  useFocusEffect(
    React.useCallback(() => {
      if (topicId && !isLoading) {
        loadTopic();
      }
    }, [topicId, isLoading])
  );

  if (isLoading) {
    return (
      <Container style={styles.spacing.py6}>
        <Text variant="body" color="secondary">Loading topic...</Text>
      </Container>
    );
  }

  if (!topic) {
    return (
      <Redirect href="/(tabs)" />
    );
  }

  return (
    <ScrollView style={styles.common.container}>
      <Container style={styles.spacing.py6}>
        <Stack spacing={6}>
          <Stack spacing={2}>
            <Text variant="h2" style={styles.textAlign.center}>
              {topic.title}
            </Text>
            {topic.description && (
              <Text variant="body" color="secondary" style={styles.textAlign.center}>
                {topic.description}
              </Text>
            )}
          </Stack>

          <View style={[styles.flex.flexRow, styles.flex.justifyBetween]}>
            <Button
              variant="outline"
              size="small"
              onPress={() => router.back()}
            >
              ← Back
            </Button>
          </View>

          <View style={[styles.common.card, styles.spacing.p4]}>
            <Stack spacing={3}>
              <Text variant="h5">Language Settings</Text>
              <View style={[styles.flex.flexRow, styles.flex.justifyBetween]}>
                <View>
                  <Text variant="bodySmall" color="secondary">Original</Text>
                  <Text variant="body">{topic.originalLanguage}</Text>
                </View>
                <Text variant="body" color="secondary">→</Text>
                <View>
                  <Text variant="bodySmall" color="secondary">Target</Text>
                  <Text variant="body">{topic.targetLanguage}</Text>
                </View>
              </View>
            </Stack>
          </View>

          <Stack spacing={4}>
            <Text variant="h4">Words ({topic.words.length})</Text>
            
            {topic.words.length === 0 ? (
              <View style={[styles.common.card, styles.spacing.p6]}>
                <Stack spacing={3} align="center">
                  <Text variant="body" color="secondary" style={styles.textAlign.center}>
                    No words yet. Add your first word to get started!
                  </Text>
                </Stack>
              </View>
            ) : (
              <Text variant="body" color="secondary">
                This topic has {topic.words.length} words
              </Text>
            )}
          </Stack>
        </Stack>
      </Container>
    </ScrollView>
  );
}
