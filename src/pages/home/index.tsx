import { useTrackSearch } from '@/api/search';
import { FlatList, Image, SafeAreaView, Text, View } from 'react-native';

export function Home() {
  const { data, isLoading } = useTrackSearch();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        gap: 32,
        margin: 16,
      }}
    >
      <Text style={{ fontSize: 32 }}>Search for a track</Text>

      <View style={{ flex: 1 }}>
        {isLoading && <Text>Loading...</Text>}
        {data && (
          <FlatList
            data={data.data}
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
        )}
      </View>
    </SafeAreaView>
  );
}
