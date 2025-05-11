import { useTrackDetails } from '@/api/track-details';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { ScreenHeader } from '@/components/ui/screen-header';
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Image, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function TrackDetails({ id }: { id: string }) {
  const { data, isLoading } = useTrackDetails(id);

  if (isLoading || !data) {
    return (
      <SafeAreaView className="m-4">
        <Spinner size="small" className="color-gray-500" />
      </SafeAreaView>
    );
  }

  const { album, artist, title } = data;

  return (
    <SafeAreaView className="m-4">
      <ScreenHeader />

      <VStack space="xl">
        <Image
          src={album.cover_xl}
          className="w-full aspect-square"
          resizeMode="cover"
        />

        <VStack space="md">
          <Heading size="2xl">{title}</Heading>

          <HStack space="sm" className="items-center">
            <Avatar size="sm">
              <AvatarFallbackText>{artist.name}</AvatarFallbackText>
              <AvatarImage source={{ uri: artist.picture_small }} />
            </Avatar>

            <Text size="xl">{artist.name}</Text>
          </HStack>
        </VStack>
      </VStack>
    </SafeAreaView>
  );
}
