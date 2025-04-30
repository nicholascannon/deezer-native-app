import React, { useEffect, useState } from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useDebounce } from 'use-debounce';

type Props = Omit<
  TextInputProps,
  'onChangeText' | 'value' | 'style' | 'placeholderTextColor'
> & {
  onSearch: (query: string) => void;
  delay?: number;
};

const DEBOUNCE_LATENCY = 500;

export function DebouncedTextInput({
  onSearch,
  delay = DEBOUNCE_LATENCY,
  ...props
}: Props) {
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
      placeholderTextColor="#666"
      {...props}
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
