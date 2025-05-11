import React from 'react';
import { Image, View } from 'react-native';
import { TrackSearchResult } from '@/api/types';
import { Link } from 'expo-router';
import { Heading } from '@/components/ui/heading';

export function TrackResult({ track }: { track: TrackSearchResult }) {
  return (
    <Link href={`/track-details/${track.id}`}>
      <View className="gap-4 flex-row items-center">
        <Image src={track.album.cover_medium} className="h-[100] w-[100]" />

        <Heading className="flex-shrink">
          {track.artist.name} - {track.title}
        </Heading>
      </View>
    </Link>
  );
}
