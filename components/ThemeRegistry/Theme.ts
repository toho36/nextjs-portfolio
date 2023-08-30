import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#FFFFFF',
    },
    primary: {
      light: '#355875',
      main: '#002f49',
      dark: '#000522',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#8cffb7',
      main: '#57ce87',
      dark: '#159c59',
      contrastText: '#ffffff',
    },
    warning: {
      light: '#f06292',
      main: '#a84466',
      dark: '#f06292',
      contrastText: '#ffffff',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
  },
});

export default theme;
