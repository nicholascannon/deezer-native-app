import React from 'react';
import { Image, View } from 'react-native';
import { ChartAlbum } from '@/api/types';
import { Heading } from '@/components/ui/heading';
import { VStack } from './ui/vstack';
import { Text } from './ui/text';

export function Album({ album }: { album: ChartAlbum }) {
  return (
    // TODO: link to an album details page
    <View className="gap-4 flex-row items-center">
      <Image src={album.cover_medium} className="h-[100] w-[100]" />

      <VStack className="flex-shrink">
        <Heading>{album.title}</Heading>
        <Text>{album.artist.name}</Text>
        <Text size="sm">{album.record_type}</Text>
      </VStack>
    </View>
  );
}
