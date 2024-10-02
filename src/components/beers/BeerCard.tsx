import { Box } from '../Box';
import { Text } from '../Text';

import { BeerResponse } from '~/api/models';

export function BeerCard({ item }: Props) {
  return (
    <Box
      margin="s"
      flex={1}
      backgroundColor="white"
      elevation={4}
      borderRadius={8}
      padding="m"
      justifyContent="space-between"
      height={140}
    >
      <Box>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box maxWidth="90%">
            <Text
              fontSize={16}
              fontWeight="bold"
              ellipsizeMode="tail"
              numberOfLines={2}
            >
              {item.name}
            </Text>
          </Box>
          <Box
            borderRadius={6}
            width={12}
            height={12}
            borderWidth={1}
            borderColor="lightGray"
            style={{ backgroundColor: alcoholToColor(item.alcohol) }}
          />
        </Box>
        <Text fontSize={12}>By {item.brand}</Text>
      </Box>
      <Box>
        <Text fontSize={14} fontWeight="500">
          Hop
        </Text>
        <Text fontSize={14}>{item.hop}</Text>
      </Box>
    </Box>
  );
}

function alcoholToColor(value: string): string {
  const alcValue = parseFloat(value.replace('%', ''));

  if (alcValue <= 5) {
    return 'green';
  }

  if (alcValue <= 10) {
    return 'yellow';
  }

  return alcValue > 10 ? 'red' : 'black';
}

interface Props {
  item: BeerResponse;
}
