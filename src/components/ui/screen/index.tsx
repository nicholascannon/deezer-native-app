import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';

export function Screen({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView className="m-4 mt-24" style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  );
}
