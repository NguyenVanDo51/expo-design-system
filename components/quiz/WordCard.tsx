import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text, Card } from '@/components/ui';
import { useTheme } from '@/hooks/useTheme';
import { NewWord } from '@/types';

interface WordCardProps {
  word: NewWord;
  onPress?: () => void;
}

export function WordCard({ word, onPress }: WordCardProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: theme.spacing[4],
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing[2],
    },
    word: {
      flex: 1,
    },
    translation: {
      marginBottom: theme.spacing[2],
    },
    example: {
      marginTop: theme.spacing[2],
      paddingTop: theme.spacing[2],
      borderTopWidth: 1,
      borderTopColor: theme.colors.neutral[200],
    },
  });

  return (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <Card style={styles.container}>
        <View style={styles.header}>
          <Text variant="h6" style={styles.word}>
            {word.word}
          </Text>
          <Text variant="caption" color="muted">
            {word.language} → {word.targetLanguage}
          </Text>
        </View>
        
        <Text variant="body" color="muted" style={styles.translation}>
          {word.translation}
        </Text>
        
        {word.example && (
          <View style={styles.example}>
            <Text variant="bodySmall" color="muted">
              Example: {word.example}
            </Text>
          </View>
        )}
      </Card>
    </TouchableOpacity>
  );
}
