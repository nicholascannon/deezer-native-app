import React from 'react';
import { Image, View } from 'react-native';
import { TrackSearchResult } from '@/api/types';
import { Text } from '@/components/ui/text';
import { Link } from 'expo-router';

export function TrackResult({ track }: { track: TrackSearchResult }) {
  return (
    <Link href={`/track-details/${track.id}`}>
      <View className="gap-4 flex-row items-center">
        <Image src={track.album.cover_medium} className="h-[100] w-[100]" />

        <Text className="flex-shrink">
          {track.artist.name} - {track.title}
        </Text>
      </View>
    </Link>
  );
}
