import React, { ElementType, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input';
import { CloseCircleIcon } from '@/components/ui/icon';

type Props = {
  onSearch: (query: string) => void;
  icon?: ElementType<any, any>;
  placeholder?: string;
  delay?: number;
};

const DEBOUNCE_LATENCY = 250;

export function DebouncedTextInput({
  onSearch,
  placeholder,
  icon,
  delay = DEBOUNCE_LATENCY,
}: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm] = useDebounce(searchTerm, delay);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  return (
    <Input variant="outline" size="xl">
      {icon && (
        <InputSlot className="pl-3">
          <InputIcon as={icon} />
        </InputSlot>
      )}

      <InputField
        value={searchTerm}
        onChangeText={setSearchTerm}
        placeholder={placeholder}
      />

      {searchTerm !== '' && (
        <InputSlot className="pr-3" onPress={() => setSearchTerm('')}>
          <InputIcon as={CloseCircleIcon} />
        </InputSlot>
      )}
    </Input>
  );
}
