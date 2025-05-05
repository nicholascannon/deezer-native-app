import { TrackDetails } from '@/screens/track-details';
import { useLocalSearchParams } from 'expo-router';

export default function TrackDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <TrackDetails id={id} />;
}
