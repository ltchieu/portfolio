import { Box } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="about-section" id="about">
        <div className="about-me">
          <h3 className="title">Know Who I&apos;M</h3>
          <p className="para">
            Hi Everyone, I am <span style={{ color: '#c770f0' }}>Lê Trương Công Hiếu</span>.
            I am a responsible and sociable developer who thrives in teamwork and continuous learning.
            My primary focus is Back-End Development, where I enjoy building complex, high-performance systems using Java and C#/.NET.
          </p>
          <p className="para" style={{ marginTop: '1.5rem' }}>
            I also have experience creating responsive front-end interfaces with React and TypeScript.
            Outside of coding, I love engaging in activities that keep me creative and inspired: Playing Games, Play guitar and sing, and Traveling and Exploring New Places.
          </p>
          <p className="para" style={{ marginTop: '2.5rem', color: 'rgba(199, 112, 240, 0.65)', fontStyle: 'italic' }}>
            “If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” — Steve Jobs
          </p>
        </div>
      </div>

    </Box>
  );
};

export default About;
