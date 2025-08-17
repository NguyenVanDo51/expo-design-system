import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Card } from '@/components/ui';
import { useTheme } from '@/hooks/useTheme';
import { Topic } from '@/types';

interface LessonCardProps {
  lesson: Topic;
  onPress?: () => void;
}

export function LessonCard({ lesson, onPress }: LessonCardProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: theme.spacing[4],
      opacity: lesson.isCompleted ? 0.7 : 1,
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
      backgroundColor: lesson.isCompleted 
        ? theme.colors.success[100] 
        : theme.colors.primary[100],
    },
  });

  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <Card style={styles.container}>
        <View style={styles.header}>
          <Text variant="h6" style={styles.title}>
            {lesson.title}
          </Text>
          <View style={styles.status}>
            <Text 
              variant="caption" 
              style={{ 
                color: lesson.isCompleted 
                  ? theme.colors.success[700] 
                  : theme.colors.primary[700] 
              }}
            >
              {lesson.isCompleted ? '✓ Completed' : 'Start'}
            </Text>
          </View>
        </View>
        
        {lesson.description && (
          <Text variant="bodySmall" color="muted">
            {lesson.description}
          </Text>
        )}
      </Card>
    </TouchableOpacity>
  );
}
