import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './component/Navbar';
import Home from './page/Home';
import ParticleBackground from './component/ParticleBackground';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c770f0',
    },
    background: {
      default: '#1f2337',
      paper: '#2a2e4d',
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
      <Router>
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <ParticleBackground />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div>About Page (Coming Soon)</div>} />
            <Route path="/projects" element={<div>Projects Page (Coming Soon)</div>} />
            <Route path="/resume" element={<div>Resume Page (Coming Soon)</div>} />
            <Route path="/blogs" element={<div>Blogs Page (Coming Soon)</div>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
