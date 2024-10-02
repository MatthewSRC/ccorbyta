import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Pressable } from 'react-native';

import { Box } from './Box';

export function ArrowButton({ direction, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <Box padding="m" backgroundColor="black" borderRadius={8}>
        <FontAwesome
          name={`rotate-${direction}` as 'rotate-right' | 'rotate-left'}
          size={24}
          color="white"
        />
      </Box>
    </Pressable>
  );
}

interface Props {
  direction: 'right' | 'left';
  onPress: () => void;
}
