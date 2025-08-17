import { NewWord } from './word';

export type QuestionType = 'translate' | 'select' | 'type' | 'speak' | 'listen';

export interface Question {
  id: string;
  type: QuestionType;
  word: NewWord;
  prompt: string;
  correctAnswer: string;
  options?: string[]; // For multiple choice questions
}

export interface Lesson {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
}