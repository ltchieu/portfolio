import { Box } from "@mui/material";

type PillProps = {
  label: string;
  iconSrc: string;
  iconAlt: string;
};

const Pill = ({ label, iconSrc, iconAlt }: PillProps) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.25,
        px: { xs: 2.1, md: 2.4 },
        py: { xs: 1.1, md: 1.2 },
        borderRadius: 999,
        border: '1px solid rgba(199, 112, 240, 0.45)',
        backgroundColor: 'rgba(21, 16, 42, 0.35)',
        backdropFilter: 'blur(6px)',
        transform: 'scale(1)',
        transition: 'transform 180ms ease, border-color 180ms ease, background-color 180ms ease',
        '&:hover': {
          transform: 'scale(1.06)',
          borderColor: 'rgba(199, 112, 240, 0.7)',
          backgroundColor: 'rgba(21, 16, 42, 0.45)',
        },
      }}
    >
      <Box
        sx={{
          width: 28,
          height: 28,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.15)',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={iconSrc}
          alt={iconAlt}
          sx={{
            width: 24,
            height: 24,
            display: 'block',
          }}
        />
      </Box>

      <Box
        sx={{
          color: 'rgba(255,255,255,0.95)',
          fontFamily: '"PT Mono", monospace',
          letterSpacing: '0.02em',
          fontSize: { xs: '0.95rem', md: '1.02rem' },
        }}
      >
        {label}
      </Box>
    </Box>
  );
};

export default Pill;