import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Card } from '@/components/ui';
import { useTheme } from '@/hooks/useTheme';
import { Topic } from '@/types';

interface TopicCardProps {
  topic: Topic;
  onPress?: () => void;
}

export function TopicCard({ topic, onPress }: TopicCardProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: theme.spacing[4],
      opacity: topic.isCompleted ? 0.7 : 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing[2],
    },
    title: {
      flex: 1,
    },
    status: {
      paddingHorizontal: theme.spacing[2],
      paddingVertical: theme.spacing[1],
      borderRadius: theme.borderRadius.base,
      backgroundColor: topic.isCompleted 
        ? theme.colors.success[100] 
        : theme.colors.primary[100],
    },
    languageInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: theme.spacing[1],
      marginBottom: theme.spacing[2],
    },
    arrow: {
      marginHorizontal: theme.spacing[2],
    },
    wordCount: {
      marginTop: theme.spacing[1],
    },
  });

  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <Card style={styles.container}>
        <View style={styles.header}>
          <Text variant="h6" style={styles.title}>
            {topic.title}
          </Text>
          <View style={styles.status}>
            <Text 
              variant="caption" 
              style={{ 
                color: topic.isCompleted 
                  ? theme.colors.success[700] 
                  : theme.colors.primary[700] 
              }}
            >
              {topic.isCompleted ? '✓ Completed' : 'Start'}
            </Text>
          </View>
        </View>

        <View style={styles.languageInfo}>
          <Text variant="bodySmall" color="muted">
            {topic.originalLanguage}
          </Text>
          <Text variant="bodySmall" color="muted" style={styles.arrow}>
            →
          </Text>
          <Text variant="bodySmall" color="muted">
            {topic.targetLanguage}
          </Text>
        </View>
        
        {topic.description && (
          <Text variant="bodySmall" color="muted">
            {topic.description}
          </Text>
        )}

        <Text variant="caption" color="muted" style={styles.wordCount}>
          {topic.words.length} word{topic.words.length !== 1 ? 's' : ''}
        </Text>
      </Card>
    </TouchableOpacity>
  );
}
