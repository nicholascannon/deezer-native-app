import { useTrackSearch } from '@/api/search';
import { Track } from '@/api/types';
import { DebouncedTextInput } from '@/components/ui/debounced-text-input';
import React from 'react';
import { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';

export function Home() {
  const [track, setTrack] = useState('');
  const { data, isLoading } = useTrackSearch(track);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        gap: 16,
        margin: 16,
      }}
    >
      <View style={{ flexDirection: 'column', gap: 8 }}>
        <Text style={{ fontSize: 32 }}>Search for a track</Text>
        <DebouncedTextInput
          onSearch={(query) => setTrack(query)}
          placeholder="Search for a track, artist, album..."
        />
      </View>

      <View style={{ flex: 1 }}>
        {isLoading && <Text>Loading...</Text>}
        {data && data?.data?.length && (
          <View style={{ flexDirection: 'column', gap: 8 }}>
            <Text style={{ color: 'grey' }}>
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
      contentContainerStyle={{
        gap: 16,
        width: '100%',
      }}
      renderItem={({ item }) => (
        <View
          style={{
            flexDirection: 'row',
            gap: 16,
            alignItems: 'center',
          }}
        >
          <Image
            src={item.album.cover_medium}
            style={{ height: 100, width: 100 }}
          />
          <Text style={{ wordWrap: 'break', flexShrink: 1 }}>
            {item.artist.name} - {item.title}
          </Text>
        </View>
      )}
    />
  );
}
