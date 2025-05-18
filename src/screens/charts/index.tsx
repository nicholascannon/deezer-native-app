import { useCharts } from '@/api/charts';
import { Track } from '@/components/track';
import { Heading } from '@/components/ui/heading';
import { Screen } from '@/components/ui/screen';
import { Spinner } from '@/components/ui/spinner';
import { TabbedLayout } from '@/components/ui/tabbed-layout';
import { Text } from '@/components/ui/text';
import { FlatList } from 'react-native';

export function ChartsScreen() {
  const { data, isLoading } = useCharts();

  return (
    <Screen>
      <Heading size="2xl">Charts</Heading>

      {isLoading && <Spinner size="small" className="color-gray-500" />}

      {data && (
        <TabbedLayout
          tabs={{
            Tracks: (
              <FlatList
                data={data.tracks.data}
                contentContainerClassName="gap-4"
                renderItem={({ item }) => <Track track={item as any} />}
              />
            ),
            Albums: (
              <FlatList
                data={data.albums.data}
                renderItem={({ item }) => <Text>{item.title}</Text>}
              />
            ),
          }}
        />
      )}
    </Screen>
  );
}
