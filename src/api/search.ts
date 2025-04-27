import { useQuery } from '@tanstack/react-query';
import { Track } from './types';

export function useTrackSearch() {
  return useQuery<{ data: Track[] }>({
    queryKey: ['track-search'],
    queryFn: () =>
      fetch('https://api.deezer.com/search?q=john+summit').then((res) =>
        res.json()
      ),
  });
}
