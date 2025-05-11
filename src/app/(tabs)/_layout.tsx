import { Tabs } from 'expo-router';
import { Icon, GlobeIcon, SearchIcon } from '@/components/ui/icon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: '#000000',
        },
        tabBarStyle: {
          backgroundColor: '#000000',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Charts',
          tabBarIcon: ({ color }) => <Icon as={GlobeIcon} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <Icon as={SearchIcon} color={color} />,
        }}
      />
    </Tabs>
  );
}
