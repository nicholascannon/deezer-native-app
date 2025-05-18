import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';

const style = tva({
  base: 'm-2 mt-12',
});

export function Screen({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <SafeAreaView className={style({ class: className })}>
      {children}
    </SafeAreaView>
  );
}
