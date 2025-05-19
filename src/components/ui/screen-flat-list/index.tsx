import { FlatList, FlatListProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function ScreenFlatList<T>(props: FlatListProps<T>) {
  const insets = useSafeAreaInsets();

  return (
    <FlatList
      {...props}
      contentContainerStyle={{
        paddingBottom: insets.bottom + 80,
        // @ts-ignore
        ...(props.contentContainerStyle || {}),
      }}
    />
  );
}
