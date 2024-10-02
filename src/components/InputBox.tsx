import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TextInput } from 'react-native';

import { Box } from './Box';

import useAppTheme from '~/hooks/useAppTheme';

export function InputBox({ placeholder, type, onType }: Props) {
  const theme = useAppTheme();

  const options = {
    search: {
      icon: true,
      width: undefined,
      keyboardType: 'web-search' as 'web-search' | 'number-pad',
    },
    numeric: {
      icon: false,
      width: 120,
      keyboardType: 'number-pad' as 'web-search' | 'number-pad',
    },
  }[type];

  return (
    <Box gap="s">
      {options.icon && (
        <FontAwesome name="search" size={20} color={theme.colors.darkGray} />
      )}
      <Box
        borderWidth={2}
        borderColor="lightGray"
        borderRadius={8}
        paddingHorizontal="s"
        paddingVertical="xs"
        width={options.width}
      >
        <TextInput
          keyboardType={options.keyboardType}
          placeholder={placeholder}
          onChangeText={onType}
        />
      </Box>
    </Box>
  );
}

interface Props {
  type: 'search' | 'numeric';
  placeholder: string;
  onType: (value: string) => void;
}
