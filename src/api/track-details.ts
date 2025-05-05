import { useQuery } from '@tanstack/react-query';
import { Track } from './types';

export function useTrackDetails(id: string) {
  return useQuery<Track>({
    queryKey: ['track', id],
    queryFn: () =>
      fetch(`https://api.deezer.com/track/${id}`).then((res) => res.json()),
    enabled: id !== '',
  });
}
