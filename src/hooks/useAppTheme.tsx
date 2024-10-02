import useColorScheme from './useColorScheme';

import { darkTheme } from '~/constants/themes/dark';
import { lightTheme } from '~/constants/themes/light';

export default function useAppTheme() {
  const scheme = useColorScheme();
  return scheme === 'dark' ? darkTheme : lightTheme;
}
