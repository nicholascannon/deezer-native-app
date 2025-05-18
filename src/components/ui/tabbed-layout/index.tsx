import { ReactNode, useState } from 'react';
import { Button, ButtonText } from '../button';
import { HStack } from '../hstack';
import { VStack } from '../vstack';

export function TabbedLayout({ tabs }: { tabs: Record<string, ReactNode> }) {
  const titles = Object.keys(tabs);
  const [current, setCurrent] = useState(titles[0]);

  return (
    <VStack space="sm">
      <HStack space="lg">
        {titles.map((title, index) => (
          <Button
            key={title}
            size="xl"
            variant="link"
            action={current === title ? 'primary' : 'secondary'}
            onPress={() => setCurrent(titles[index])}
          >
            <ButtonText>{title}</ButtonText>
          </Button>
        ))}
      </HStack>

      {tabs[current]}
    </VStack>
  );
}
