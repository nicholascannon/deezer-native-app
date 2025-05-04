import React from 'react';
import { Track } from '@/api/types';
import { Image, View } from 'react-native';
import { Text } from '@/components/ui/text';

export function TrackResult({ track }: { track: Track }) {
  return (
    <View className="gap-4 flex-row items-center">
      <Image src={track.album.cover_medium} className="h-[100] w-[100]" />

      <Text className="flex-shrink">
        {track.artist.name} - {track.title}
      </Text>
    </View>
  );
}
