import { useCharts } from '@/api/charts';
import { Album } from '@/components/album';
import { Track } from '@/components/track';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Screen } from '@/components/ui/screen';
import { ScreenFlatList } from '@/components/ui/screen-flat-list';
import { Spinner } from '@/components/ui/spinner';
import { TabbedLayout } from '@/components/ui/tabbed-layout';
import { ReactNode } from 'react';
import { View } from 'react-native';

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
              <ScreenFlatList
                data={data.tracks.data}
                contentContainerClassName="gap-4"
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <ChartListItem rank={index + 1}>
                    <Track track={item as any} />
                  </ChartListItem>
                )}
              />
            ),
            Albums: (
              <ScreenFlatList
                data={data.albums.data}
                contentContainerClassName="gap-4"
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <ChartListItem rank={index + 1}>
                    <Album album={item} />
                  </ChartListItem>
                )}
              />
            ),
          }}
        />
      )}
    </Screen>
  );
}

function ChartListItem({
  children,
  rank,
}: {
  children: ReactNode;
  rank: number;
}) {
  return (
    <HStack space="lg">
      <Heading size="4xl">{rank}</Heading>
      <View className="flex-shrink">{children}</View>
    </HStack>
  );
}
