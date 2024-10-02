import { ThemeType, theme } from './base';

const palette = {
  greenDark: '#0A906E',
};

const darkTheme: ThemeType = {
  ...theme,
  colors: {
    ...theme.colors,
    main: palette.greenDark,
  },
};

export { darkTheme };
