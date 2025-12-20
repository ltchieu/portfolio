import { Box, Container, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 6, md: 10 },
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          position: 'relative',
          zIndex: 1,
          px: 2.5,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: '"PT Mono", monospace',
                fontWeight: 700,
                textAlign: { xs: 'center', md: 'left' },
                letterSpacing: '0.03em',
                fontSize: { xs: '2rem', md: '3rem' },
                mb: { xs: 3, md: 4 },
              }}
            >
              Know Who <Box component="span" sx={{ color: '#c770f0' }}>I&apos;M</Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: '"PT Mono", monospace',
                color: 'rgba(255,255,255,0.92)',
                lineHeight: 1.9,
                fontSize: { xs: '1.02rem', md: '1.2rem' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Hi everyone! I&apos;m{' '}
              <Box component="span" sx={{ color: '#c770f0' }}>Lê Trương Công Hiếu</Box>.
              <br />
              I enjoy building web applications and learning system design.
              <br />
              I love working with{' '}
              <Box component="span" sx={{ color: '#c770f0', fontWeight: 700, fontStyle: 'italic' }}>
                JavaScript, TypeScript, React
              </Box>{' '}
              and modern tooling.
              <br />
              <br />
              Outside of coding, I love engaging in activities that keep me creative and inspired:
            </Typography>

            <Box
              sx={{
                mt: { xs: 3, md: 4 },
                display: 'grid',
                gap: 1.25,
                justifyContent: { xs: 'center', md: 'start' },
              }}
            >
              {[
                'Playing Games',
                'Writing Tech Blogs',
                'Traveling and Exploring New Places',
              ].map((text) => (
                <Box
                  key={text}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.25,
                    color: 'rgba(255,255,255,0.92)',
                    fontFamily: '"PT Mono", monospace',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                  }}
                >
                  <ArrowRightAltIcon sx={{ color: '#c770f0' }} />
                  <span>{text}</span>
                </Box>
              ))}
            </Box>

            <Typography
              sx={{
                mt: { xs: 4, md: 5 },
                fontFamily: '"PT Mono", monospace',
                color: 'rgba(199, 112, 240, 0.65)',
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
              “Strive to build things that make a difference!”
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontFamily: '"PT Mono", monospace',
                color: 'rgba(199, 112, 240, 0.65)',
                textAlign: { xs: 'center', md: 'left' },
                fontSize: { xs: '0.95rem', md: '1.05rem' },
              }}
            >
              — Hieu
            </Typography>
          </Box>

          {/* Right Illustration */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component="img"
              src="https://undraw.co/api/illustrations/7a55cc8c-7dd5-4b37-9c4a-4e1e2c1fda47"
              alt="about illustration"
              sx={{
                maxWidth: { xs: '80%', md: '100%' },
                height: 'auto',
                filter: 'drop-shadow(0 0 30px rgba(199, 112, 240, 0.25))',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
