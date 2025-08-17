import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Card } from '@/components/ui';
import { useTheme } from '@/hooks/useTheme';
import { Question } from '@/types';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string) => void;
  userAnswer?: string;
}

export function QuestionCard({ question, onAnswer, userAnswer }: QuestionCardProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: theme.spacing[6],
    },
    prompt: {
      marginBottom: theme.spacing[6],
      textAlign: 'center',
    },
    optionsContainer: {
      gap: theme.spacing[3],
    },
    option: {
      padding: theme.spacing[4],
      borderRadius: theme.borderRadius.lg,
      borderWidth: 2,
      borderColor: theme.colors.neutral[300],
    },
    selectedOption: {
      borderColor: theme.colors.primary[600],
      backgroundColor: theme.colors.primary[50],
    },
  });

  return (
    <Card style={styles.container}>
      <Text variant="h3" style={styles.prompt}>
        {question.prompt}
      </Text>
      
      {question.type === 'select' && question.options && (
        <View style={styles.optionsContainer}>
          {question.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.option,
                userAnswer === option && styles.selectedOption,
              ]}
              onPress={() => onAnswer(option)}
            >
              <Text variant="body" style={{ textAlign: 'center' }}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </Card>
  );
}
