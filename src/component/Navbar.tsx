import { AppBar, Toolbar, Box, Button, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import ArticleIcon from '@mui/icons-material/Article';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(31, 35, 55, 0.95)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
        <Box sx={{ 
          fontSize: '2rem', 
          fontWeight: 700,
          color: '#c770f0',
          fontFamily: '"PT Mono", monospace',
          letterSpacing: '0.02em',
        }}>
          Sb.
        </Box>
        
        <Box sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          <Button
            component={Link}
            to="/"
            startIcon={<HomeIcon />}
            sx={{
              color: 'white',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: '"PT Mono", monospace',
              letterSpacing: '0.02em',
              '&:hover': {
                color: '#c770f0',
                backgroundColor: 'rgba(199, 112, 240, 0.1)',
              },
            }}
          >
            Home
          </Button>
          
          <Button
            component={Link}
            to="/about"
            startIcon={<PersonIcon />}
            sx={{
              color: 'white',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: '"PT Mono", monospace',
              letterSpacing: '0.02em',
              '&:hover': {
                color: '#c770f0',
                backgroundColor: 'rgba(199, 112, 240, 0.1)',
              },
            }}
          >
            About
          </Button>
          
          <Button
            component={Link}
            to="/projects"
            startIcon={<WorkIcon />}
            sx={{
              color: 'white',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: '"PT Mono", monospace',
              letterSpacing: '0.02em',
              '&:hover': {
                color: '#c770f0',
                backgroundColor: 'rgba(199, 112, 240, 0.1)',
              },
            }}
          >
            Projects
          </Button>
          
          <Button
            component={Link}
            to="/resume"
            startIcon={<DescriptionIcon />}
            sx={{
              color: 'white',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: '"PT Mono", monospace',
              letterSpacing: '0.02em',
              '&:hover': {
                color: '#c770f0',
                backgroundColor: 'rgba(199, 112, 240, 0.1)',
              },
            }}
          >
            Resume
          </Button>
          
          <Button
            component={Link}
            to="/blogs"
            startIcon={<ArticleIcon />}
            sx={{
              color: 'white',
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              fontFamily: '"PT Mono", monospace',
              letterSpacing: '0.02em',
              '&:hover': {
                color: '#c770f0',
                backgroundColor: 'rgba(199, 112, 240, 0.1)',
              },
            }}
          >
            Blogs
          </Button>
          
          <IconButton
            sx={{
              border: '2px solid #c770f0',
              color: '#c770f0',
              '&:hover': {
                backgroundColor: 'rgba(199, 112, 240, 0.1)',
              },
            }}
          >
            <StarIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
