import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ParticleBackground from '../component/ParticleBackground';

const TypeWriter = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const phrases = ['Software Developer', 'Lê Trương Công Hiếu'];

  useEffect(() => {
    const handleType = () => {
      const currentPhrase = phrases[loopNum % phrases.length];
      
      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(150);

        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(100);

        if (text === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, phrases]);

  return (
    <Typography
      variant="h3"
      component="span"
      sx={{
        color: '#c770f0',
        fontWeight: 700,
        fontFamily: '"Poppins", sans-serif',
        fontSize: { xs: '2rem', md: '2.5rem' },
      }}
    >
      {text}
      <span style={{ 
        borderRight: '3px solid #c770f0', 
        animation: 'blink 0.7s infinite' 
      }}>
        |
      </span>
      <style>
        {`
          @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
          }
        `}
      </style>
    </Typography>
  );
};

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#1f2337',
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
      }}
    >
      {/* Starry Background */}
      <ParticleBackground />
      
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          minHeight: 'calc(100vh - 80px)',
          py: 5,
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Left Content */}
          <Box sx={{ color: 'white' }}>
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
                fontFamily: '"Poppins", sans-serif',
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 2,
              }}
            >
              I'M <span style={{ color: '#c770f0' }}>SOUMYAJIT BEHERA</span>
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 3 }}>
              <TypeWriter />
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
              src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/master/src/Assets/home-main.svg"
              alt="home pic"
              sx={{
                maxWidth: '100%',
                height: 'auto',
                filter: 'drop-shadow(0 0 30px rgba(199, 112, 240, 0.3))',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
