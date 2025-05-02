import { useTrackSearch } from '@/api/search';
import { Track } from '@/api/types';
import { DebouncedTextInput } from '@/components/ui/debounced-text-input';
import React from 'react';
import { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { SearchIcon } from '@/components/ui/icon';

export function Home() {
  const [track, setTrack] = useState('');
  const { data, isLoading } = useTrackSearch(track);

  return (
    <SafeAreaView className="flex-col flex-1 gap-4 m-4 mt-8">
      <DebouncedTextInput
        icon={SearchIcon}
        onSearch={(query) => setTrack(query)}
        placeholder="Search for a track, artist, album..."
      />

      <View className="flex-1">
        {isLoading && <Text>Loading...</Text>}
        {data && data?.data?.length && (
          <View className="flex-col gap-4">
            <Text className="text-gray-600">
              Showing {data.data.length} of {data.total}
            </Text>
            <TrackList tracks={data.data} />
          </View>
        )}
        {!isLoading && !data?.data?.length && <Text>No tracks</Text>}
      </View>
    </SafeAreaView>
  );
}

function TrackList({ tracks }: { tracks: Track[] }) {
  return (
    <FlatList
      data={tracks}
      showsVerticalScrollIndicator={false}
      contentContainerClassName="gap-4 w-full"
      renderItem={({ item }) => (
        <View className="gap-4 flex-row items-center">
          <Image src={item.album.cover_medium} className="h-[100] w-[100]" />

          <Text className="flex-shrink">
            {item.artist.name} - {item.title}
          </Text>
        </View>
      )}
    />
  );
}
