import { Box, Button, Container, Typography } from '@mui/material';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import DownloadIcon from '@mui/icons-material/Download';

import pdfUrl from '../assets/file/Le Truong Cong Hieu - Internship Software Developer.pdf';

const Resume = () => {
  const defaultLayout = defaultLayoutPlugin();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
        py: { xs: 6, md: 10 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontFamily: '"PT Mono", monospace',
            fontWeight: 700,
            textAlign: 'center',
            letterSpacing: '0.03em',
            fontSize: { xs: '2.2rem', md: '3.2rem' },
            mb: { xs: 2, md: 3 },
          }}
        >
          Resume
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DownloadIcon />}
            href={pdfUrl}
            download
            sx={{
              fontFamily: '"PT Mono", monospace',
              background: '#c770f0',
              color: 'white',
              '&:hover': { background: '#a050c0' },
            }}
          >
            Download PDF
          </Button>
        </Box>
        <Box
          sx={{
            border: '1px solid #c770f0',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 4px 24px 0 rgba(199,112,240,0.10)',
            background: 'rgba(31, 35, 55, 0.95)',
            mb: 2,
          }}
        >
          <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
            <Viewer fileUrl={pdfUrl} plugins={[defaultLayout]} />
          </Worker>
        </Box>
      </Container>
    </Box>
  );
};

export default Resume;
