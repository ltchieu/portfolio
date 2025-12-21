import { Box, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import cIcon from '../assets/icon/c.svg';
import cppIcon from '../assets/icon/c--4.svg';
import javascriptIcon from '../assets/icon/javascript-1.svg';
import typescriptIcon from '../assets/icon/typescript-2.svg';
import reactIcon from '../assets/icon/react-2.svg';
import javaIcon from '../assets/icon/java-4.svg';
import springBootIcon from '../assets/icon/spring-boot-1.svg';
import laravelIcon from '../assets/icon/laravel-2.svg';
import flutterIcon from '../assets/icon/flutter-logo.svg';
import dartIcon from '../assets/icon/dart.svg';
import bootstrapIcon from '../assets/icon/bootstrap-5-1.svg';
import mongodbIcon from '../assets/icon/mongodb-icon-1.svg';
import mssqlIcon from '../assets/icon/microsoft-sql-server-1.svg';
import gitIcon from '../assets/icon/git-icon.svg';
import materialUiIcon from '../assets/icon/material-ui-1.svg';
import azureIcon from '../assets/icon/azure-2.svg';
import postmanIcon from '../assets/icon/postman.svg';
import vscodeIcon from '../assets/icon/visual-studio-code-1.svg';
import intellijIcon from '../assets/icon/intellij-idea-1.svg';
import visualStudioIcon from '../assets/icon/visual-studio-2013.svg';
import Pill from '../component/Pill';
import GithubActivityCalendar from '../component/GithubActivityCalendar';

type IconItem = {
  label: string;
  iconSrc: string;
  iconAlt: string;
};

const PROFESSIONAL_SKILLSET: IconItem[] = [
  { label: 'C', iconSrc: cIcon, iconAlt: 'C' },
  { label: 'C#', iconSrc: cppIcon, iconAlt: 'C#' },
  { label: 'Javascript', iconSrc: javascriptIcon, iconAlt: 'JavaScript' },
  { label: 'Typescript', iconSrc: typescriptIcon, iconAlt: 'TypeScript' },
  { label: 'React.Js', iconSrc: reactIcon, iconAlt: 'React' },
  { label: 'Java', iconSrc: javaIcon, iconAlt: 'Java' },
  { label: 'Spring Boot', iconSrc: springBootIcon, iconAlt: 'Spring Boot' },
  { label: 'Laravel', iconSrc: laravelIcon, iconAlt: 'Laravel' },
  { label: 'Flutter', iconSrc: flutterIcon, iconAlt: 'Flutter' },
  { label: 'Dart', iconSrc: dartIcon, iconAlt: 'Dart' },
  { label: 'Bootstrap', iconSrc: bootstrapIcon, iconAlt: 'Bootstrap' },
  { label: 'Mongo DB', iconSrc: mongodbIcon, iconAlt: 'MongoDB' },
  { label: 'Microsoft SQL Server', iconSrc: mssqlIcon, iconAlt: 'SQL Server' },
  { label: 'Git', iconSrc: gitIcon, iconAlt: 'Git' },
  { label: 'Material UI', iconSrc: materialUiIcon, iconAlt: 'Material UI' },
  { label: 'Azure', iconSrc: azureIcon, iconAlt: 'Azure' },
];

const TOOLS_I_USE: IconItem[] = [
  { label: 'VS Code', iconSrc: vscodeIcon, iconAlt: 'VS Code' },
  { label: 'IntelliJ IDEA', iconSrc: intellijIcon, iconAlt: 'IntelliJ IDEA' },
  { label: 'Visual Studio', iconSrc: visualStudioIcon, iconAlt: 'Visual Studio' },
  { label: 'Postman', iconSrc: postmanIcon, iconAlt: 'Postman' },
];
const About = () => {
  const hobbies = [
    'Playing Games',
    'Writing Tech Blogs',
    'Traveling and Exploring New Places',
  ];

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
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
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

            <Grid
              container
              direction="column"
              rowSpacing={1.25}
              sx={{
                mt: { xs: 3, md: 4 },
                alignItems: { xs: 'center', md: 'flex-start' },
              }}
            >
              {hobbies.map((hobby) => (
                <Grid key={hobby} size={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      justifyContent: { xs: 'center', md: 'flex-start' },
                    }}
                  >
                    <ArrowRightAltIcon sx={{ color: '#c770f0', fontSize: 20 }} />
                    <Typography
                      sx={{
                        fontFamily: '"PT Mono", monospace',
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: { xs: '1rem', md: '1.08rem' },
                      }}
                    >
                      {hobby}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

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
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
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
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 10, md: 12 } }}>
          <Typography
            sx={{
              fontFamily: '"PT Mono", monospace',
              fontWeight: 700,
              textAlign: 'center',
              letterSpacing: '0.03em',
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              mb: { xs: 4, md: 5 },
            }}
          >
            Professional <Box component="span" sx={{ color: '#c770f0' }}>Skillset</Box>
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {PROFESSIONAL_SKILLSET.map((item) => (
              <Pill key={item.label} label={item.label} iconSrc={item.iconSrc} iconAlt={item.iconAlt} />
            ))}
          </Box>
        </Box>

        <Box sx={{ mt: { xs: 8, md: 10 } }}>
          <Typography
            sx={{
              fontFamily: '"PT Mono", monospace',
              fontWeight: 700,
              textAlign: 'center',
              letterSpacing: '0.03em',
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              mb: { xs: 4, md: 5 },
            }}
          >
            <Box component="span" sx={{ color: '#c770f0' }}>Tools</Box> I use
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {TOOLS_I_USE.map((item) => (
              <Pill key={item.label} label={item.label} iconSrc={item.iconSrc} iconAlt={item.iconAlt} />
            ))}
          </Box>
        </Box>
        
        <Box sx={{ mt: { xs: 10, md: 12 } }}>
          <Typography
            sx={{
              fontFamily: '"PT Mono", monospace',
              fontWeight: 700,
              textAlign: 'center',
              letterSpacing: '0.03em',
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              mb: { xs: 4, md: 5 },
            }}
          >
            Days I <Box component="span" sx={{ color: '#c770f0' }}>Code</Box>
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', px: { xs: 1, md: 0 } }}>
            <GithubActivityCalendar username="ltchieu" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
