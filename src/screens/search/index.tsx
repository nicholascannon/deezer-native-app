import { useTrackSearch } from '@/api/search';
import { TrackSearchResult } from '@/api/types';
import { DebouncedTextInput } from '@/components/ui/debounced-text-input';
import React from 'react';
import { useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { SearchIcon } from '@/components/ui/icon';
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { TrackResult } from './components/track-result';

export function Search() {
  const [track, setTrack] = useState('');
  const { data, isLoading } = useTrackSearch(track);

  return (
    <SafeAreaView className="flex-col flex-1 gap-4 m-4 mt-10">
      <DebouncedTextInput
        icon={SearchIcon}
        onSearch={(query) => setTrack(query)}
        placeholder="Search for a track, artist, album..."
        autoCorrect={false}
      />

      <View className="flex-1 w-full">
        {isLoading && <Spinner size="small" className="color-gray-500" />}

        {data && data?.data?.length && (
          <View className="flex-col gap-4">
            <Text>
              Showing {data.data.length} of {data.total}
            </Text>
            <TrackList tracks={data.data} />
          </View>
        )}

        {!isLoading && !data?.data?.length && (
          <Text className="text-center">No tracks</Text>
        )}
      </View>
    </SafeAreaView>
  );
}

function TrackList({ tracks }: { tracks: TrackSearchResult[] }) {
  return (
    <FlatList
      data={tracks}
      showsVerticalScrollIndicator={false}
      contentContainerClassName="gap-4 pb-12"
      renderItem={({ item }) => <TrackResult track={item} />}
    />
  );
}
