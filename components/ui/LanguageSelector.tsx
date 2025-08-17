import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ViewStyle,
  TextInput,
} from 'react-native';
import { useTheme } from '@/hooks/useTheme';
import { Text } from './Text';
import { Card } from './Card';
import { ChevronDown, Check, X } from 'lucide-react-native';
import { POPULAR_LANGUAGES } from '@/constants/languages';
import { Modal } from './modals';

export interface LanguageSelectorProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  error?: string;
  style?: ViewStyle;
  disabled?: boolean;
}

export function LanguageSelector({
  label,
  placeholder = 'Select a language',
  value,
  onValueChange,
  error,
  style,
  disabled = false,
}: LanguageSelectorProps) {
  const theme = useTheme();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLanguages = POPULAR_LANGUAGES.filter(language =>
    language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLanguageSelect = (language: string) => {
    onValueChange?.(language);
    setIsModalVisible(false);
    setSearchQuery('');
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
    setSearchQuery('');
  };

  const selectorStyles = StyleSheet.create({
    container: {
      width: '100%',
    },
    label: {
      marginBottom: theme.spacing[2],
    },
    selector: {
      backgroundColor: theme.colors.neutral[0],
      borderWidth: 1,
      borderColor: error ? theme.colors.error[600] : theme.colors.neutral[300],
      borderRadius: theme.borderRadius.lg,
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      minHeight: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    selectorDisabled: {
      backgroundColor: theme.colors.neutral[100],
      opacity: 0.6,
    },
    selectorText: {
      flex: 1,
      fontSize: theme.typography.sizes.base,
      lineHeight: theme.typography.lineHeights.base,
      color: value ? theme.colors.neutral[900] : theme.colors.neutral[400],
    },
    icon: {
      marginLeft: theme.spacing[2],
    },
    error: {
      marginTop: theme.spacing[1],
    },

    // Modal styles
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: theme.colors.neutral[0],
      borderRadius: theme.borderRadius.xl,
      width: '90%',
      maxHeight: '80%',
      overflow: 'hidden',
    },
    modalHeader: {
      padding: theme.spacing[4],
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.neutral[200],
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    searchContainer: {
      padding: theme.spacing[4],
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.neutral[200],
    },
    searchInput: {
      backgroundColor: theme.colors.neutral[50],
      borderWidth: 1,
      borderColor: theme.colors.neutral[200],
      borderRadius: theme.borderRadius.lg,
      paddingHorizontal: theme.spacing[3],
      paddingVertical: theme.spacing[2],
      fontSize: theme.typography.sizes.base,
      color: theme.colors.neutral[900],
    },
    languageList: {
      flex: 1,
      paddingTop: theme.spacing[2],
    },
    languageItem: {
      paddingHorizontal: theme.spacing[4],
      paddingVertical: theme.spacing[3],
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.neutral[100],
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    languageItemSelected: {
      backgroundColor: theme.colors.primary[50],
    },
    languageText: {
      fontSize: theme.typography.sizes.base,
      color: theme.colors.neutral[900],
      flex: 1,
    },
    languageTextSelected: {
      color: theme.colors.primary[600],
      fontWeight: '600',
    },
    closeButton: {
      padding: theme.spacing[1],
    },
  });

  return (
    <View style={[selectorStyles.container, style]}>
      {label && (
        <Text variant="label" color="secondary" style={selectorStyles.label}>
          {label}
        </Text>
      )}

      <TouchableOpacity
        style={[
          selectorStyles.selector,
          disabled && selectorStyles.selectorDisabled,
        ]}
        onPress={() => !disabled && setIsModalVisible(true)}
        disabled={disabled}
      >
        <Text style={selectorStyles.selectorText}>
          {value || placeholder}
        </Text>
        <ChevronDown 
          size={20} 
          color={theme.colors.neutral[400]} 
          style={selectorStyles.icon}
        />
      </TouchableOpacity>

      {error && (
        <Text variant="caption" color="error" style={selectorStyles.error}>
          {error}
        </Text>
      )}

      <Modal
        visible={isModalVisible}
        showPanResponder
        onClose={handleModalClose}
        scrollEnabled={false}
        title='Select Language'
      >
            {/* Search */}
            <View style={selectorStyles.searchContainer}>
              <TextInput
                style={selectorStyles.searchInput}
                placeholder="Search languages..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                autoFocus
                placeholderTextColor={theme.colors.neutral[400]}
              />
            </View>

            {/* Language List */}
            <ScrollView style={selectorStyles.languageList}>
              {filteredLanguages.map((language) => {
                const isSelected = language === value;
                return (
                  <TouchableOpacity
                    key={language}
                    style={[
                      selectorStyles.languageItem,
                      isSelected && selectorStyles.languageItemSelected,
                    ]}
                    onPress={() => handleLanguageSelect(language)}
                  >
                    <Text
                      style={[
                        selectorStyles.languageText,
                        ...(isSelected ? [selectorStyles.languageTextSelected] : []),
                      ]}
                    >
                      {language}
                    </Text>
                    {isSelected && (
                      <Check size={20} color={theme.colors.primary[600]} />
                    )}
                  </TouchableOpacity>
                );
              })}
              {filteredLanguages.length === 0 && (
                <View style={selectorStyles.languageItem}>
                  <Text style={selectorStyles.languageText} color="secondary">
                    No languages found
                  </Text>
                </View>
              )}
            </ScrollView>
      </Modal>
    </View>
  );
}
