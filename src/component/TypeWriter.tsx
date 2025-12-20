import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';

type TypeWriterProps = {
  phrases: string[];
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';
};

const TypeWriter = ({ phrases, variant = 'h3' }: TypeWriterProps) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

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
      variant={variant}
      component="span"
      sx={{
        color: '#c770f0',
        fontWeight: 700,
        fontFamily: '"Poppins", sans-serif',
        fontSize: { xs: '2rem', md: '2.5rem' },
      }}
    >
      {text}
      <span
        style={{
          borderRight: '3px solid #c770f0',
          animation: 'blink 0.7s infinite',
        }}
      >
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

export default TypeWriter;
