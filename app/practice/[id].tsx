import React, { useState, useEffect } from 'react';
import { ScrollView, View, Alert } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { Container, Stack } from '@/components/layout';
import { Text, Button } from '@/components/ui';
import { QuestionCard } from '@/components/quiz';
import { useCommonStyles } from '@/hooks/useCommonStyles';
import { Topic, Question, NewWord } from '@/types';

export default function PracticeScreen() {
  const styles = useCommonStyles();
  const params = useLocalSearchParams();
  const topicId = params.id as string;

  // Sample topic data - in a real app, you'd fetch this based on the topic ID
  const [topic] = useState<Topic>({
    id: topicId || '1',
    title: 'Basic Greetings',
    description: 'Learn essential greeting words in Spanish',
    originalLanguage: 'English',
    targetLanguage: 'Spanish',
    isCompleted: false,
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
      {
        id: '3',
        word: 'thank you',
        translation: 'gracias',
        language: 'English',
        targetLanguage: 'Spanish',
      },
    ]
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [completedQuestions, setCompletedQuestions] = useState(0);

  // Generate questions from words
  useEffect(() => {
    const generatedQuestions: Question[] = topic.words.map((word, index) => {
      // Get other words for options
      const otherWords = topic.words.filter(w => w.id !== word.id);
      const randomOptions = otherWords
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map(w => w.translation);
      
      const options = [word.translation, ...randomOptions].sort(() => 0.5 - Math.random());

      return {
        id: `q${index + 1}`,
        type: 'select',
        word: word,
        prompt: `What does "${word.word}" mean in ${topic.targetLanguage}?`,
        correctAnswer: word.translation,
        options: options,
      };
    });

    setQuestions(generatedQuestions);
  }, [topic]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setShowResult(true);
    
    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    setCompletedQuestions(prev => prev + 1);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(undefined);
      setShowResult(false);
    } else {
      // Practice complete
      const finalScore = score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0);
      const percentage = Math.round((finalScore / questions.length) * 100);
      
      Alert.alert(
        'Practice Complete!',
        `You scored ${finalScore}/${questions.length} (${percentage}%)`,
        [
          {
            text: 'Practice Again',
            onPress: () => {
              setCurrentQuestionIndex(0);
              setSelectedAnswer(undefined);
              setShowResult(false);
              setScore(0);
              setCompletedQuestions(0);
            }
          },
          {
            text: 'Back to Topic',
            onPress: () => router.push({
              pathname: '/topic/[id]',
              params: { id: topicId }
            })
          }
        ]
      );
    }
  };

  if (!currentQuestion) {
    return (
      <ScrollView contentContainerStyle={styles.spacing.p6}>
        <Stack spacing={6}>
          <Text variant="h2" style={styles.textAlign.center}>
            Loading Practice...
          </Text>
        </Stack>
      </ScrollView>
    );
  }

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <ScrollView contentContainerStyle={styles.spacing.p6}>
      <Stack spacing={6}>
        {/* Header */}
        <View>
          <Text variant="h2" style={styles.textAlign.center}>
            Practice: {topic.title}
          </Text>
          <Text variant="body" color="muted" style={styles.textAlign.center}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </Text>
        </View>

        {/* Progress Bar */}
        <View style={[styles.spacing.p1, styles.bg.gray200, styles.rounded.lg]}>
          <View 
            style={[
              styles.spacing.p1, 
              styles.bg.primary500, 
              styles.rounded.lg,
              { width: `${progress}%` }
            ]} 
          />
        </View>

        {/* Score */}
        <Text variant="body" style={styles.textAlign.center}>
          Score: {score}/{completedQuestions}
        </Text>

        {/* Question */}
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          userAnswer={selectedAnswer}
        />

        {/* Result */}
        {showResult && (
          <View
            style={[
              styles.spacing.p4,
              styles.rounded.lg,
              selectedAnswer === currentQuestion.correctAnswer
                ? styles.bg.success500
                : styles.bg.error500,
            ]}
          >
            <Text
              variant="body"
              color="inverse"
              style={styles.textAlign.center}
            >
              {selectedAnswer === currentQuestion.correctAnswer
                ? '🎉 Correct!'
                : '❌ Incorrect'}
            </Text>
            <Text
              variant="bodySmall"
              color="inverse"
              style={styles.textAlign.center}
            >
              The correct answer is: {currentQuestion.correctAnswer}
            </Text>
            {currentQuestion.word.example && (
              <Text
                variant="bodySmall"
                color="inverse"
                style={[styles.textAlign.center, styles.spacing.mt2]}
              >
                Example: {currentQuestion.word.example}
              </Text>
            )}
          </View>
        )}

        {/* Actions */}
        {showResult && (
          <Stack spacing={3}>
            <Button onPress={handleNext}>
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Practice'}
            </Button>
          </Stack>
        )}

        {!showResult && (
          <Button
            onPress={() => router.push({
              pathname: '/topic/[id]',
              params: { id: topicId }
            })}
            variant="outline"
          >
            Back to Topic
          </Button>
        )}
      </Stack>
    </ScrollView>
  );
}
