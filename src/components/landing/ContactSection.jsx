import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function ContactSection() {
  return (
    <Box
      id="contact"
      sx={{
        bgcolor: '#0D1520',
        py: { xs: 9, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 배경 글로우 장식 */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-25%',
          left: '-5%',
          width: { xs: '350px', md: '650px' },
          height: { xs: '350px', md: '650px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,0,0,0.12), transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '-20%',
          right: '-5%',
          width: { xs: '250px', md: '450px' },
          height: { xs: '250px', md: '450px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,48,73,0.2), transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          sx={{
            color: 'rgba(148,177,200,0.55)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            mb: 2.5,
          }}
        >
          03 — Contact
        </Typography>
        <Typography
          component="h2"
          sx={{
            color: '#E3DFCE',
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            mb: 3,
          }}
        >
          함께 만들어요.
          <br />
          <Box component="span" sx={{ color: '#94B1C8' }}>
            Let&apos;s work
          </Box>
          <Box component="span" sx={{ color: '#780000' }}>
            {' '}together.
          </Box>
        </Typography>
        <Typography
          sx={{
            color: 'rgba(227,223,206,0.5)',
            fontSize: { xs: '0.95rem', md: '1.1rem' },
            maxWidth: '500px',
            lineHeight: 1.75,
            mb: { xs: 6, md: 8 },
          }}
        >
          프로젝트 협업, 아이디어 공유, 채용 문의 등
          어떤 연락이든 환영합니다.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            startIcon={<EmailIcon />}
            href="mailto:your@email.com"
            variant="contained"
            sx={{
              bgcolor: '#780000',
              color: '#E3DFCE',
              px: { xs: 3, md: 4 },
              py: 1.5,
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              '&:hover': { bgcolor: '#4C050C' },
            }}
          >
            이메일 보내기
          </Button>
          <Button
            startIcon={<GitHubIcon />}
            href="https://github.com/sep5"
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              borderColor: 'rgba(148,177,200,0.5)',
              color: '#94B1C8',
              px: { xs: 3, md: 4 },
              py: 1.5,
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              '&:hover': {
                bgcolor: '#94B1C8',
                color: '#003049',
                borderColor: '#94B1C8',
              },
            }}
          >
            GitHub
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactSection;
