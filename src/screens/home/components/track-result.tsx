import React from 'react';
import { Image, Pressable, View } from 'react-native';
import { Track } from '@/api/types';
import { Text } from '@/components/ui/text';
import { Icon, PlayIcon } from '@/components/ui/icon';

export function TrackResult({ track }: { track: Track }) {
  return (
    <View className="gap-4 flex-row items-center">
      <Image src={track.album.cover_medium} className="h-[100] w-[100]" />

      <Text className="flex-shrink">
        {track.artist.name} - {track.title}
      </Text>

      <Pressable onPress={() => {}}>
        <Icon as={PlayIcon} />
      </Pressable>
    </View>
  );
}
