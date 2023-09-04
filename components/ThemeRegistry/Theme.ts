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
      light: '#0179e9',
      main: '#0179e9',
      dark: '#000522',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#fdbdff',
      main: '#fdbdff',
      dark: '#159c59',
      contrastText: '#ffffff',
    },
    warning: {
      light: '#3267d1',
      main: '#3267d1',
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
