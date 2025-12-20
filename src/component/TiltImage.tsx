import { Box } from '@mui/material';
import { useRef, useState } from 'react';

type TiltImageProps = {
  src: string;
  alt: string;
  size?: { xs: number; md: number };
  maxTilt?: number;
};

const TiltImage = ({ src, alt, size = { xs: 220, md: 300 }, maxTilt = 12 }: TiltImageProps) => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width; // 0..1
    const py = (event.clientY - rect.top) / rect.height; // 0..1

    const rotateY = (px - 0.5) * (maxTilt * 2);
    const rotateX = -(py - 0.5) * (maxTilt * 2);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setRotation({ x: rotateX, y: rotateY });
    });
  };

  const reset = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <Box
      ref={wrapperRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        reset();
      }}
      onMouseMove={handleMove}
      sx={{
        display: 'grid',
        placeItems: 'center',
        perspective: '900px',
      }}
    >
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          width: { xs: size.xs, md: size.md },
          height: { xs: size.xs, md: size.md },
          borderRadius: '50%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovering ? 'scale(1.03)' : 'scale(1)'}`,
          transition: isHovering ? 'transform 40ms linear' : 'transform 260ms ease-out',
          willChange: 'transform',
          boxShadow: '0 18px 50px rgba(0, 0, 0, 0.35)',
          filter: 'drop-shadow(0 0 22px rgba(199, 112, 240, 0.18))',
          userSelect: 'none',
          WebkitUserDrag: 'none',
        }}
      />
    </Box>
  );
};

export default TiltImage;
