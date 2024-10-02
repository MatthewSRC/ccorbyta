import { createTheme } from '@shopify/restyle';

const palette = {
  black: '#0B0B0B',
  white: '#F0F2F3',
  lightGray: '#D3D3D3',
  darkGray: '#5A5A5A',
};

const theme = createTheme({
  colors: {
    white: palette.white,
    lightGray: palette.lightGray,
    darkGray: palette.darkGray,
    black: palette.black,
    main: palette.black,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontWeight: 'bold',
      fontSize: 34,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaults: {},
  },
});

export type ThemeType = typeof theme;
export { theme };
