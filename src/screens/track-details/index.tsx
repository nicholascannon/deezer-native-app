import { useTrackDetails } from '@/api/track-details';
import { ScreenHeader } from '@/components/ui/screen-header';
import { Text } from '@/components/ui/text';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function TrackDetails({ id }: { id: string }) {
  const { data } = useTrackDetails(id);

  return (
    <SafeAreaView className="m-4">
      <ScreenHeader />

      <View>
        <Image
          src={data?.artist.picture_xl}
          className="w-48 h-48 rounded-full"
        />
        <Text>
          {data?.artist.name} - {data?.title}
        </Text>
      </View>
    </SafeAreaView>
  );
}
