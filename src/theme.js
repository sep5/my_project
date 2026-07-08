import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#780000',
      light: '#AE1F25',
      dark: '#4C050C',
    },
    secondary: {
      main: '#003049',
      light: '#94B1C8',
    },
    background: {
      default: '#F5F0E8',
      paper: '#E3DFCE',
    },
    text: {
      primary: '#1A0A0F',
      secondary: '#3D2B30',
      disabled: '#7A6A6E',
    },
    error: {
      main: '#C1125F',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.03em' },
    h2: { fontWeight: 700, letterSpacing: '-0.02em' },
    h3: { fontWeight: 600 },
  },
  spacing: 8,
  shape: { borderRadius: 0 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          transition: 'all 0.2s ease',
          borderRadius: 0,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: { borderRadius: 0 },
      },
    },
  },
});

export default theme;
