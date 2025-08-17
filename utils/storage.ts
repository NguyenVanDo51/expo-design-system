import AsyncStorage from '@react-native-async-storage/async-storage';
import { Topic } from '@/types';

const TOPICS_KEY = 'quizlingo_topics';

export const StorageService = {
  // Get all topics from storage
  async getTopics(): Promise<Topic[]> {
    try {
      const topicsJson = await AsyncStorage.getItem(TOPICS_KEY);
      if (topicsJson) {
        const topics = JSON.parse(topicsJson);
        // Convert string dates back to Date objects
        return topics.map((topic: any) => ({
          ...topic,
          createdAt: topic.createdAt ? new Date(topic.createdAt) : undefined,
          updatedAt: topic.updatedAt ? new Date(topic.updatedAt) : undefined,
        }));
      }
      return [];
    } catch (error) {
      console.error('Error getting topics from storage:', error);
      return [];
    }
  },

  // Save topics to storage
  async saveTopics(topics: Topic[]): Promise<void> {
    try {
      const topicsJson = JSON.stringify(topics);
      await AsyncStorage.setItem(TOPICS_KEY, topicsJson);
    } catch (error) {
      console.error('Error saving topics to storage:', error);
      throw error;
    }
  },

  // Add a new topic
  async addTopic(topic: Omit<Topic, 'id' | 'createdAt' | 'updatedAt'>): Promise<Topic> {
    try {
      const existingTopics = await this.getTopics();
      const newTopic: Topic = {
        ...topic,
        id: Date.now().toString(), // Simple ID generation
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      const updatedTopics = [...existingTopics, newTopic];
      await this.saveTopics(updatedTopics);
      return newTopic;
    } catch (error) {
      console.error('Error adding topic:', error);
      throw error;
    }
  },

  // Update an existing topic
  async updateTopic(id: string, updates: Partial<Topic>): Promise<Topic | null> {
    try {
      const existingTopics = await this.getTopics();
      const topicIndex = existingTopics.findIndex(topic => topic.id === id);
      
      if (topicIndex === -1) {
        return null;
      }

      const updatedTopic: Topic = {
        ...existingTopics[topicIndex],
        ...updates,
        updatedAt: new Date(),
      };

      existingTopics[topicIndex] = updatedTopic;
      await this.saveTopics(existingTopics);
      return updatedTopic;
    } catch (error) {
      console.error('Error updating topic:', error);
      throw error;
    }
  },

  // Delete a topic
  async deleteTopic(id: string): Promise<boolean> {
    try {
      const existingTopics = await this.getTopics();
      const filteredTopics = existingTopics.filter(topic => topic.id !== id);
      
      if (filteredTopics.length === existingTopics.length) {
        return false; // Topic not found
      }

      await this.saveTopics(filteredTopics);
      return true;
    } catch (error) {
      console.error('Error deleting topic:', error);
      throw error;
    }
  },

  // Get a single topic by ID
  async getTopic(id: string): Promise<Topic | null> {
    try {
      const topics = await this.getTopics();
      return topics.find(topic => topic.id === id) || null;
    } catch (error) {
      console.error('Error getting topic:', error);
      return null;
    }
  },

  // Clear all topics (useful for development/testing)
  async clearTopics(): Promise<void> {
    try {
      await AsyncStorage.removeItem(TOPICS_KEY);
    } catch (error) {
      console.error('Error clearing topics:', error);
      throw error;
    }
  },
};
