import { useMemo } from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import avatarSvg from '../assets/avatar.svg';
import TiltImage from '../component/TiltImage';
import TypeWriter from '../component/TypeWriter';

const Home = () => {
  const highlightSx = useMemo(
    () => ({ color: '#c770f0', fontWeight: 700, fontStyle: 'italic' }),
    []
  );

  const socialLinks = useMemo(
    () => [
      { label: 'GitHub', href: 'https://github.com/ltchieu', icon: <GitHubIcon /> },
      { label: 'Facebook', href: 'https://www.facebook.com/conghiu04', icon: <FacebookIcon /> },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/letruongconghieu/', icon: <LinkedInIcon /> },
      { label: 'Instagram', href: 'https://www.instagram.com/ltc.hiu/', icon: <InstagramIcon /> },
    ],
    []
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          minHeight: 'calc(100vh - 160px)',
          py: 5,
        }}
      >
        <Grid
          container
          columnSpacing={{ xs: 0, md: 6 }}
          rowSpacing={{ xs: 6, md: 0 }}
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Grid size={{ xs: 12, md: 8 }} sx={{ color: 'white' }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 400,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
              }}
            >
              Hi There!{' '}
              <span style={{ display: 'inline-block', animation: 'wave 1.5s infinite' }}>
                👋
              </span>
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontFamily: '"PT Mono", monospace',
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 8,
              }}
            >
              I'M <span style={{ color: '#c770f0' }}>Lê Trương Công Hiếu</span>
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
              <TypeWriter phrases={['Software Developer', 'Lê Trương Công Hiếu']} />
            </Box>

            <style>
              {`
                @keyframes wave {
                  0% { transform: rotate(0deg); }
                  10% { transform: rotate(14deg); }
                  20% { transform: rotate(-8deg); }
                  30% { transform: rotate(14deg); }
                  40% { transform: rotate(-4deg); }
                  50% { transform: rotate(10deg); }
                  60% { transform: rotate(0deg); }
                  100% { transform: rotate(0deg); }
                }
              `}
            </style>
          </Grid>

          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: { xs: 5, md: 0 },
            }}
          >
            <Box
              component="img"
              src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/home-main.svg"
              alt="home pic"
              sx={{
                maxWidth: { xs: '75%', md: '100%' },
                height: 'auto',
                filter: 'drop-shadow(0 0 30px rgba(199, 112, 240, 0.3))',
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Introduce Section */}
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"PT Mono", monospace',
                fontWeight: 700,
                textAlign: "center",
                letterSpacing: '0.03em',
                fontSize: { xs: '1.8rem', md: '2.7rem' },
                mb: 3,
              }}
            >
              LET ME <span style={{ color: '#c770f0' }}>INTRODUCE</span> MYSELF
            </Typography>

            <Typography
              sx={{
                fontFamily: '"PT Mono", monospace',
                color: 'rgba(255,255,255,0.92)',
                lineHeight: 1.9,
                fontSize: { xs: '1.05rem', md: '1.4rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              I'm a Software Engineer who loves transforming ideas into reliable, scalable products. Over time,
              I've explored different technologies and found my passion in building high-performance systems
              and intuitive user experiences.
              <br />
              <br />
              I'm proficient in <Box component="span" sx={highlightSx}>JavaScript</Box>,{' '}
              <Box component="span" sx={highlightSx}>TypeScript</Box>, and modern frameworks like{' '}
              <Box component="span" sx={highlightSx}>React</Box>.
              <br />
              <br />
              My key areas of interest include developing{' '}
              <Box component="span" sx={highlightSx}>Web Applications</Box>, learning system design,
              and continuously improving performance and UX.
            </Typography>

          </Grid>

          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              order: { xs: -1, md: 0 },
            }}
          >
            <TiltImage src={avatarSvg} alt="Avatar" size={{ xs: 200, md: 260 }} />
          </Grid>
        </Grid>
      </Container>

      {/* Find Me On */}
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 8, md: 10 },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              fontFamily: '"PT Mono", monospace',
              fontWeight: 700,
              letterSpacing: '0.03em',
              fontSize: { xs: '2.1rem', md: '3rem' },
              mb: 1.5,
            }}
          >
            Find Me On
          </Typography>

          <Typography
            sx={{
              fontFamily: '"PT Mono", monospace',
              color: 'rgba(255,255,255,0.85)',
              fontSize: { xs: '1rem', md: '1.1rem' },
              mb: 3.5,
            }}
          >
            Feel free to <Box component="span" sx={{ color: '#c770f0' }}>connect</Box> with me
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: 2, md: 3 },
              flexWrap: 'wrap',
            }}
          >
            {socialLinks.map((item) => (
              <IconButton
                key={item.label}
                component="a"
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                sx={{
                  width: 46,
                  height: 46,
                  backgroundColor: 'rgba(255,255,255,0.95)',
                  color: '#6f2dbd',
                  transition: 'transform 180ms ease, background-color 180ms ease, color 180ms ease',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,1)',
                    color: '#c770f0',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {item.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
