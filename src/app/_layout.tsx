import '../global.css';
import { queryClient } from '@/lib/query';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="dark">
      <QueryClientProvider client={queryClient}>
        <StatusBar barStyle="light-content" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: {
              backgroundColor: '#000000',
            },
          }}
        />
      </QueryClientProvider>
    </GluestackUIProvider>
  );
}
