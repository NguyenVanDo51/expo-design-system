import React, { useState, useEffect } from 'react';
import { ScrollView, View, RefreshControl } from 'react-native';
import { router, useFocusEffect } from 'expo-router';
import { Container, Stack } from '@/components/layout';
import { Text, Button } from '@/components/ui';
import { QuestionCard, WordCard, TopicCard } from '@/components/quiz';
import { useCommonStyles } from '@/hooks/useCommonStyles';
import { NewWord, Question, Topic } from '@/types';
import { StorageService } from '@/utils/storage';

// Sample data to demonstrate the interfaces
const sampleWords: NewWord[] = [
  {
    id: '1',
    word: 'hello',
    translation: 'hola',
    language: 'English',
    targetLanguage: 'Spanish',
    example: 'Hello, how are you?',
  },
  {
    id: '2',
    word: 'goodbye',
    translation: 'adiós',
    language: 'English',
    targetLanguage: 'Spanish',
    example: 'Goodbye, see you tomorrow!',
  },
  {
    id: '3',
    word: 'thank you',
    translation: 'gracias',
    language: 'English',
    targetLanguage: 'Spanish',
  },
];

const sampleTopics: Topic[] = [
  {
    id: '1',
    title: 'Basic Greetings',
    description: 'Learn essential greeting words in Spanish',
    originalLanguage: 'English',
    targetLanguage: 'Spanish',
    isCompleted: true,
    words: [
      {
        id: '1',
        word: 'hello',
        translation: 'hola',
        language: 'English',
        targetLanguage: 'Spanish',
        example: 'Hello, how are you?',
      },
      {
        id: '2',
        word: 'goodbye',
        translation: 'adiós',
        language: 'English',
        targetLanguage: 'Spanish',
        example: 'Goodbye, see you tomorrow!',
      },
    ]
  },
  {
    id: '2',
    title: 'Common Phrases',
    description: 'Practice everyday Spanish phrases',
    originalLanguage: 'English',
    targetLanguage: 'Spanish',
    isCompleted: false,
    words: [
      {
        id: '3',
        word: 'thank you',
        translation: 'gracias',
        language: 'English',
        targetLanguage: 'Spanish',
      },
    ]
  },
];

const sampleQuestion: Question = {
  id: '1',
  type: 'select',
  word: sampleWords[0],
  prompt: 'What does "hello" mean in Spanish?',
  correctAnswer: 'hola',
  options: ['hola', 'adiós', 'gracias', 'por favor'],
};

export default function QuizScreen() {
  const styles = useCommonStyles();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const [showResult, setShowResult] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const loadTopics = async () => {
    try {
      const storedTopics = await StorageService.getTopics();
      // If no topics exist, use sample data as fallback
      if (storedTopics.length === 0) {
        setTopics(sampleTopics);
      } else {
        setTopics(storedTopics);
      }
    } catch (error) {
      console.error('Error loading topics:', error);
      // Fallback to sample data on error
      setTopics(sampleTopics);
    } finally {
      setIsLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadTopics();
    setRefreshing(false);
  };

  // Load topics when component mounts
  useEffect(() => {
    loadTopics();
  }, []);

  // Reload topics when screen comes into focus (after adding a new topic)
  useFocusEffect(
    React.useCallback(() => {
      if (!isLoading) {
        loadTopics();
      }
    }, [isLoading])
  );

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
  };

  const resetQuiz = () => {
    setSelectedAnswer(undefined);
    setShowResult(false);
  };

  return (
    <ScrollView 
      contentContainerStyle={styles.spacing.p6}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Stack spacing={6}>
        <Text variant="h2" style={styles.textAlign.center}>
          QuizLingo Demo
        </Text>

        <Text variant="body" color="muted" style={styles.textAlign.center}>
          This demonstrates the Lesson and NewWord interfaces in action
        </Text>

        {/* Topics Section */}
        <Stack spacing={4}>
          <View style={[styles.flex.flexRow, styles.flex.justifyBetween, styles.flex.itemsCenter]}>
            <Text variant="h4">Available Topics</Text>
            <Button
              onPress={() => router.push('/add-topic')}
              variant="outline"
              size="small"
            >
              New Topic
            </Button>
          </View>
          {isLoading ? (
            <Text variant="body" color="secondary" style={styles.textAlign.center}>
              Loading topics...
            </Text>
          ) : topics.length === 0 ? (
            <Text variant="body" color="secondary" style={styles.textAlign.center}>
              No topics yet. Create your first topic to get started!
            </Text>
          ) : (
            topics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onPress={() => router.push({
                  pathname: '/topic/[id]',
                  params: { id: topic.id }
                })}
              />
            ))
          )}
        </Stack>

        {/* Words Section */}
        <Stack spacing={4}>
          <View style={[styles.flex.flexRow, styles.flex.justifyBetween, styles.flex.itemsCenter]}>
            <Text variant="h4">Your Words</Text>
            <Button
              onPress={() => router.push('/topic/add-word')}
              variant="outline"
              size="small"
            >
              Add Word
            </Button>
          </View>
          {sampleWords.map((word) => (
            <WordCard
              key={word.id}
              word={word}
              onPress={() => console.log('Word pressed:', word.word)}
            />
          ))}
        </Stack>

        {/* Question Section */}
        <Stack spacing={4}>
          <Text variant="h4">Practice Question</Text>
          <QuestionCard
            question={sampleQuestion}
            onAnswer={handleAnswer}
            userAnswer={selectedAnswer}
          />

          {showResult && (
            <View
              style={[
                styles.spacing.p4,
                styles.rounded.lg,
                selectedAnswer === sampleQuestion.correctAnswer
                  ? styles.bg.success500
                  : styles.bg.error500,
              ]}
            >
              <Text
                variant="body"
                color="inverse"
                style={styles.textAlign.center}
              >
                {selectedAnswer === sampleQuestion.correctAnswer
                  ? '🎉 Correct!'
                  : '❌ Incorrect'}
              </Text>
              <Text
                variant="bodySmall"
                color="inverse"
                style={styles.textAlign.center}
              >
                The correct answer is: {sampleQuestion.correctAnswer}
              </Text>
            </View>
          )}

          {showResult && <Button onPress={resetQuiz}>Try Again</Button>}
        </Stack>
      </Stack>
    </ScrollView>
  );
}
