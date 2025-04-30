import { useQuery } from '@tanstack/react-query';
import { Track } from './types';

export function useTrackSearch(query: string) {
  return useQuery<TrackSearchResponse>({
    queryKey: ['track-search', query],
    queryFn: () =>
      fetch(
        `https://api.deezer.com/search?q=${encodeURIComponent(query)}`
      ).then((res) => res.json()),
    enabled: query !== '',
  });
}

interface TrackSearchResponse {
  data?: Track[];
  next?: string;
  total: number;
}
