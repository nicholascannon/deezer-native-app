import { useQuery } from '@tanstack/react-query';
import {
  ChartTrack,
  ChartAlbum,
  ChartArtist,
  ChartPlaylist,
  ChartPodcast,
} from './types';

const TEN_MINUTES = 60 * 60 * 10;

export function useCharts() {
  return useQuery<ChartResponse>({
    queryKey: ['charts'],
    queryFn: () =>
      fetch(`https://api.deezer.com/chart`).then((res) => res.json()),
    staleTime: TEN_MINUTES,
  });
}

interface ChartResponse {
  tracks: {
    data: ChartTrack[];
    total: number;
  };
  albums: {
    data: ChartAlbum[];
    total: number;
  };
  artists: {
    data: ChartArtist[];
    total: number;
  };
  playlists: {
    data: ChartPlaylist[];
    total: number;
  };
  podcasts: {
    data: ChartPodcast[];
    total: number;
  };
}
