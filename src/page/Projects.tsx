import { Box, Button, Container, Grid, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import QlttAdminImg from '../assets/img/qltt-admin.png';
import QlttFeImg from '../assets/img/qltt-fe.png';
import RealtimeChatImg from '../assets/img/realtime-chat.png';
import DeliveryAppImg from '../assets/img/delivery-app.png';
import QlBidaImg from '../assets/img/ql-bida.png';

const projects = [
  {
    title: 'Quản Lý Trung Tâm Ngoại Ngữ (Admin)',
    repo: 'https://github.com/ltchieu/quan-ly-trung-tam-ngoai-ngu-fe-admin',
    desc:
      'Admin dashboard for managing classrooms, students and categories. Built with TypeScript and React (Create React App). Includes refresh-token handling and admin features for room management.',
    demo: 'https://quan-ly-trung-tam-ngoai-ngu-admin.vercel.app/',
    image: QlttAdminImg,
  },
  {
    title: 'Quản Lý Trung Tâm Ngoại Ngữ (Frontend)',
    repo: 'https://github.com/ltchieu/quan-ly-trung-tam-ngoai-ngu-fe',
    desc:
      'Public frontend for the language center. Built with TypeScript + React. Contains teacher introduction pages, schedule views and account management UI.',
    demo: 'https://quan-ly-trung-tam-ngoai-ngu.vercel.app/',
    image: QlttFeImg,
  },
  {
    title: 'Realtime Chat App',
    repo: 'https://github.com/ltchieu/realtime-chat-app',
    desc:
      'A real-time chat application with rooms, file uploads and search. Server-side implemented in Java/Node stack and client includes HTML/CSS/JS front-end.',
    image: RealtimeChatImg,
  },
  {
    title: 'Delivery App',
    repo: 'https://github.com/ltchieu/Delivery-App',
    desc:
      'A Flutter-based delivery application (mobile + web). Provides authentication and delivery features. Mobile clients live under `android`/`ios` folders.',
    image: DeliveryAppImg,
  },
  {
    title: 'Quản Lý Quán Bida',
    repo: 'https://github.com/ltchieu/quan-ly-quan-bida',
    desc:
      'A C#/.NET desktop solution for managing a billiards club (inventory and room management). Classic Windows Forms / desktop project structure.',
    image: QlBidaImg,
  },
];

const Projects = () => {
  return (
    <Box sx={{ minHeight: '100vh', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            sx={{
              fontFamily: '"PT Mono", monospace',
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '2.8rem' },
            }}
          >
            My Recent <span style={{ color: '#c770f0' }}>Works</span>
          </Typography>
          <Typography sx={{ fontFamily: '"PT Mono", monospace', color: 'rgba(255,255,255,0.7)' }}>
            Here are a few projects I&apos;ve worked on recently.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((p) => (
            <Grid size={{ xs: 12, md: 4 }} key={p.title}>
              <Box
                sx={{
                  height: '100%',
                  background: 'rgba(0,0,0,0.28)',
                  border: '1px solid rgba(199,112,240,0.2)',
                  borderRadius: 2,
                  p: 3,
                  minHeight: 360,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.4s ease-in-out',
                  boxShadow: '0 0 5px rgba(199, 112, 240, 0.1)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 4px 25px rgba(199, 112, 240, 0.6)',
                    borderColor: 'rgba(199,112,240,0.6)',
                  },
                }}
              >
                <div>
                  <Box
                    component="img"
                    src={p.image}
                    alt={p.title}
                    sx={{
                      width: '100%',
                      height: 150,
                      objectFit: 'cover',
                      borderRadius: 1,
                      mb: 3,
                      border: '1px solid rgba(199,112,240,0.1)',
                    }}
                  />

                  <Typography
                    sx={{ fontFamily: '"PT Mono", monospace', fontSize: '1.25rem', mb: 1 }}
                  >
                    {p.title}
                  </Typography>

                  <Typography sx={{ fontFamily: '"PT Mono", monospace', color: 'rgba(255,255,255,0.75)' }}>
                    {p.desc}
                  </Typography>
                </div>

                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  <Button
                    startIcon={<GitHubIcon />}
                    component="a"
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    variant="contained"
                    sx={{
                      background: '#6f2dbd',
                      '&:hover': { background: '#5a2496' },
                      fontFamily: '"PT Mono", monospace',
                    }}
                  >
                    GitHub
                  </Button>

                  {p.demo && (
                    <Button
                      component="a"
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      variant="outlined"
                      sx={{
                        borderColor: 'rgba(199,112,240,0.6)',
                        color: 'rgba(255,255,255,0.92)',
                        fontFamily: '"PT Mono", monospace',
                      }}
                    >
                      Demo
                    </Button>
                  )}
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
