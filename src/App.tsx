import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import AppRoute from './route/route';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c770f0',
    },
    background: {
      default: '#0b0816',
      paper: '#15102a',
    },
    text: {
      primary: '#ffffff',
      secondary: '#c7c7c7',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoute />
    </ThemeProvider>
  );
}

export default App;
