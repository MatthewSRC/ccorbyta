import { ThemeType, theme } from './base';

const palette = {
  greenLight: '#56DCBA',
};

const lightTheme: ThemeType = {
  ...theme,
  colors: {
    ...theme.colors,
    main: palette.greenLight,
  },
};

export { lightTheme };
