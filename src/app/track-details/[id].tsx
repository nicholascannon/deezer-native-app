import { TrackDetailsScreen } from '@/screens/track-details';
import { useLocalSearchParams } from 'expo-router';

export default function TrackDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return <TrackDetailsScreen id={id} />;
}
