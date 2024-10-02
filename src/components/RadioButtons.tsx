import { FlatList, Pressable } from 'react-native';

import { Box } from './Box';
import { Text } from './Text';

export function RadioButtons({ onCheck, checked, malts }: Props) {
  return (
    <Box>
      <FlatList
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        horizontal
        data={malts}
        ListHeaderComponent={
          <RadioButton
            name="All"
            isChecked={checked === 'All'}
            onPress={() => onCheck('All')}
          />
        }
        renderItem={({ item }) => (
          <RadioButton
            name={item}
            isChecked={item === checked}
            onPress={() => onCheck(item)}
          />
        )}
      />
    </Box>
  );
}

function RadioButton({
  name,
  onPress,
  isChecked,
}: {
  name: string;
  onPress: () => void;
  isChecked: boolean;
}) {
  return (
    <Pressable onPress={onPress}>
      <Box marginHorizontal="s" flexDirection="row" alignItems="center" gap="s">
        <Box
          borderRadius={10}
          backgroundColor="lightGray"
          width={20}
          height={20}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            borderRadius={6}
            backgroundColor={isChecked ? 'darkGray' : 'lightGray'}
            width={12}
            height={12}
          />
        </Box>
        <Text fontWeight="500">{name}</Text>
      </Box>
    </Pressable>
  );
}

interface Props {
  checked: string;
  malts: string[];
  onCheck: (value: string) => void;
}
