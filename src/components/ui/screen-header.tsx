import { Pressable, View } from 'react-native';
import { ChevronLeftIcon, Icon } from './icon';
import { useNavigation } from 'expo-router';

export function ScreenHeader() {
  const { goBack } = useNavigation();

  return (
    <View className="h-12">
      <Pressable className="w-8" onPress={() => goBack()}>
        <Icon as={ChevronLeftIcon} size="xl" />
      </Pressable>
    </View>
  );
}
