import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useMatch, useNavigate } from 'react-router-dom';
import { useMemo, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', path: '/', icon: <HomeOutlinedIcon /> },
  { label: 'About', path: '/about', icon: <PersonOutlineIcon /> },
  { label: 'Projects', path: '/projects', icon: <WorkOutlineIcon /> },
  { label: 'Resume', path: '/resume', icon: <DescriptionOutlinedIcon /> },
  { label: 'Blogs', path: '/blogs', icon: <ArticleOutlinedIcon /> },
];

type NavItem = (typeof NAV_ITEMS)[number];

const DesktopNavButton = ({ item }: { item: NavItem }) => {
  const navigate = useNavigate();
  const match = useMatch({ path: item.path, end: item.path === '/' });
  const isActive = Boolean(match);

  return (
    <Button
      onClick={() => navigate(item.path)}
      startIcon={item.icon}
      sx={{
        color: isActive ? '#c770f0' : 'white',
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
      {item.label}
    </Button>
  );
};

const MobileNavItem = ({ item, onNavigate }: { item: NavItem; onNavigate: (path: string) => void }) => {
  const match = useMatch({ path: item.path, end: item.path === '/' });
  const isActive = Boolean(match);

  return (
    <ListItemButton
      onClick={() => onNavigate(item.path)}
      sx={{
        color: isActive ? '#c770f0' : 'white',
        '&:hover': { backgroundColor: 'rgba(199, 112, 240, 0.1)' },
      }}
    >
      <ListItemIcon sx={{ minWidth: 40, color: isActive ? '#c770f0' : 'white' }}>{item.icon}</ListItemIcon>
      <ListItemText
        primary={item.label}
        primaryTypographyProps={{
          sx: {
            fontFamily: '"PT Mono", monospace',
            letterSpacing: '0.02em',
          },
        }}
      />
    </ListItemButton>
  );
};

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);

  const navItems = useMemo(() => NAV_ITEMS, []);

  const closeDrawer = () => setOpen(false);
  const handleNavigate = (path: string) => {
    navigate(path);
    closeDrawer();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgba(31, 35, 55, 0.95)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-evenly', py: 1 }}>
        <Box
          component="button"
          onClick={() => navigate('/')}
          sx={{
            border: 0,
            padding: 0,
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '2rem',
            fontWeight: 700,
            color: '#c770f0',
            fontFamily: '"PT Mono", monospace',
            letterSpacing: '0.02em',
            textDecoration: 'none',
          }}
        >
          Sb.
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 8, alignItems: 'center' }}>
            {navItems.map((item) => (
              <DesktopNavButton key={item.label} item={item} />
            ))}
          </Box>

          {/* Mobile menu */}
          {isMobile ? (
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              sx={{
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(199, 112, 240, 0.1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
        </Box>
      </Toolbar>

      <Drawer
        anchor="top"
        open={open}
        onClose={closeDrawer}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            mt: { xs: '56px', sm: '64px' },
            backgroundColor: 'rgba(31, 35, 55, 0.98)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        <List sx={{ py: 0 }}>
          {navItems.map((item) => (
            <MobileNavItem key={item.label} item={item} onNavigate={handleNavigate} />
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
