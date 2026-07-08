import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const handleScroll = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: '#E3DFCE',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* 배경 장식 원 */}
      <Box
        sx={{
          position: 'absolute',
          top: '-15%',
          right: '-8%',
          width: { xs: '280px', md: '520px' },
          height: { xs: '280px', md: '520px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,48,73,0.08), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: { xs: '150px', md: '250px' },
          height: { xs: '150px', md: '250px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(120,0,0,0.06), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, position: 'relative', zIndex: 1 }}>
        {/* 분야 태그 */}
        <Typography
          sx={{
            color: '#780000',
            fontSize: { xs: '0.7rem', md: '0.8rem' },
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            mb: { xs: 3, md: 4 },
          }}
        >
          Frontend Developer&nbsp;&nbsp;·&nbsp;&nbsp;UI/UX&nbsp;&nbsp;·&nbsp;&nbsp;React
        </Typography>

        {/* 메인 디스플레이 타이포 */}
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '4rem', sm: '6rem', md: '8.5rem', lg: '10rem' },
            fontWeight: 800,
            color: '#1A0A0F',
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
          }}
        >
          Portfolio
        </Typography>
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '4rem', sm: '6rem', md: '8.5rem', lg: '10rem' },
            fontWeight: 800,
            color: '#780000',
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            mb: { xs: 5, md: 7 },
          }}
        >
          2026.
        </Typography>

        {/* 슬로건 */}
        <Typography
          sx={{
            color: '#3D2B30',
            fontSize: { xs: '1rem', md: '1.2rem' },
            maxWidth: '460px',
            lineHeight: 1.7,
            mb: { xs: 5, md: 6 },
          }}
        >
          안녕하세요. 사용자 경험을 디자인하고<br />
          코드로 구현하는 개발자입니다.
        </Typography>

        {/* CTA 버튼 */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          <Button
            href="#works"
            onClick={handleScroll('#works')}
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
            Works 보기
          </Button>
          <Button
            href="#contact"
            onClick={handleScroll('#contact')}
            variant="outlined"
            sx={{
              borderColor: '#003049',
              color: '#003049',
              px: { xs: 3, md: 4 },
              py: 1.5,
              fontWeight: 600,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              '&:hover': {
                bgcolor: '#003049',
                color: '#E3DFCE',
                borderColor: '#003049',
              },
            }}
          >
            연락하기
          </Button>
        </Box>

        {/* 하단 이름 / 연도 */}
        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid #D4C5C0',
            pt: 2,
          }}
        >
          <Typography
            sx={{
              color: '#7A6A6E',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Your Name
          </Typography>
          <Typography
            sx={{
              color: '#7A6A6E',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
            }}
          >
            © 2026
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default HeroSection;
