import { useTrackSearch } from '@/api/search';
import { TrackSearchResult } from '@/api/types';
import { DebouncedTextInput } from '@/components/ui/debounced-text-input';
import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { SearchIcon } from '@/components/ui/icon';
import { Spinner } from '@/components/ui/spinner';
import { Text } from '@/components/ui/text';
import { Track } from '@/components/track';
import { Screen } from '@/components/ui/screen';
import { VStack } from '@/components/ui/vstack';
import { ScreenFlatList } from '@/components/ui/screen-flat-list';

export function SearchScreen() {
  const [track, setTrack] = useState('');
  const { data, isLoading } = useTrackSearch(track);

  return (
    <Screen>
      <VStack className="flex-1" space="md">
        <DebouncedTextInput
          icon={SearchIcon}
          onSearch={(query) => setTrack(query)}
          placeholder="Search for a track, artist, album..."
          autoCorrect={false}
        />

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
      </VStack>
    </Screen>
  );
}

function TrackList({ tracks }: { tracks: TrackSearchResult[] }) {
  return (
    <ScreenFlatList
      data={tracks}
      showsVerticalScrollIndicator={false}
      contentContainerClassName="gap-4"
      renderItem={({ item }) => <Track track={item} />}
    />
  );
}
