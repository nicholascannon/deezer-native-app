import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useDebounce } from 'use-debounce';

interface SearchInputProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  delay?: number;
}

const DEBOUNCE_LATENCY = 500;

export function DebouncedTextInput({
  onSearch,
  placeholder,
  delay = DEBOUNCE_LATENCY,
}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, delay);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <TextInput
      style={styles.input}
      value={searchTerm}
      onChangeText={setSearchTerm}
      placeholder={placeholder}
      placeholderTextColor="#666"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});
