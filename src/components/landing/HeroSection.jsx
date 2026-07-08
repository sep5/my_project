import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const handleScroll = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

function CircleTypo() {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <svg
        viewBox="0 0 400 400"
        width="100%"
        style={{ maxWidth: '460px' }}
        aria-hidden="true"
      >
        <defs>
          <path
            id="outerCirclePath"
            d="M 200,200 m -158,0 a 158,158 0 1,1 316,0 a 158,158 0 1,1 -316,0"
          />
          <path
            id="innerCirclePath"
            d="M 200,200 m -112,0 a 112,112 0 1,1 224,0 a 112,112 0 1,1 -224,0"
          />
        </defs>

        {/* 원형 가이드 선 */}
        <circle cx="200" cy="200" r="158" fill="none" stroke="#780000" strokeWidth="0.6" strokeDasharray="2,7" />
        <circle cx="200" cy="200" r="112" fill="none" stroke="#003049" strokeWidth="0.5" />
        <circle cx="200" cy="200" r="68"  fill="none" stroke="#D4C5C0" strokeWidth="0.5" />

        {/* 외곽 시계방향 회전 텍스트 */}
        <g className="circle-rotate" style={{ transformOrigin: '200px 200px' }}>
          <text
            fontSize="10.5"
            fill="#780000"
            fontWeight="700"
            letterSpacing="5.8"
            fontFamily="Pretendard, sans-serif"
          >
            <textPath href="#outerCirclePath">
              PORTFOLIO · FRONTEND · DEVELOPER · REACT · UI/UX ·
            </textPath>
          </text>
        </g>

        {/* 내부 반시계방향 회전 텍스트 */}
        <g className="circle-rotate-reverse" style={{ transformOrigin: '200px 200px' }}>
          <text
            fontSize="9"
            fill="#003049"
            fontWeight="600"
            letterSpacing="5.2"
            fontFamily="Pretendard, sans-serif"
          >
            <textPath href="#innerCirclePath">
              2026 · DESIGN · CODE · CREATE · BUILD ·
            </textPath>
          </text>
        </g>

        {/* 중앙 심볼 텍스트 */}
        <text
          x="200" y="188"
          textAnchor="middle"
          fontSize="42"
          fontWeight="800"
          fill="#1A0A0F"
          fontFamily="Pretendard, sans-serif"
          letterSpacing="-2"
        >
          PORT
        </text>
        <text
          x="200" y="232"
          textAnchor="middle"
          fontSize="42"
          fontWeight="800"
          fill="#780000"
          fontFamily="Pretendard, sans-serif"
          letterSpacing="-2"
        >
          FOLIO
        </text>

        {/* 4방향 포인트 마커 */}
        <circle cx="200" cy="41"  r="4.5" fill="#780000" />
        <circle cx="359" cy="200" r="4.5" fill="#780000" />
        <circle cx="200" cy="359" r="4.5" fill="#780000" />
        <circle cx="41"  cy="200" r="4.5" fill="#780000" />

        {/* 45도 대각 포인트 */}
        <circle cx="312" cy="88"  r="2.5" fill="#003049" />
        <circle cx="312" cy="312" r="2.5" fill="#003049" />
        <circle cx="88"  cy="312" r="2.5" fill="#003049" />
        <circle cx="88"  cy="88"  r="2.5" fill="#003049" />
      </svg>
    </Box>
  );
}

function HeroSection() {
  return (
    <Box
      sx={{
        bgcolor: '#E3DFCE',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: 8,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">

          {/* 좌측 — 텍스트 */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                color: '#780000',
                fontSize: { xs: '0.68rem', md: '0.78rem' },
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                mb: { xs: 3, md: 4 },
              }}
            >
              Frontend Developer&nbsp;&nbsp;·&nbsp;&nbsp;UI/UX&nbsp;&nbsp;·&nbsp;&nbsp;React
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '3.5rem', sm: '4.5rem', md: '6rem' },
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
                fontSize: { xs: '3.5rem', sm: '4.5rem', md: '6rem' },
                fontWeight: 800,
                color: '#780000',
                lineHeight: 0.88,
                letterSpacing: '-0.03em',
                mb: { xs: 4, md: 5 },
              }}
            >
              2026.
            </Typography>

            <Typography
              sx={{
                color: '#3D2B30',
                fontSize: { xs: '0.95rem', md: '1.05rem' },
                maxWidth: '400px',
                lineHeight: 1.75,
                mb: { xs: 4, md: 5 },
              }}
            >
              안녕하세요. 사용자 경험을 디자인하고<br />
              코드로 구현하는 개발자입니다.
            </Typography>

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
                  fontSize: '0.88rem',
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
                  fontSize: '0.88rem',
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

            <Box
              sx={{
                mt: { xs: 5, md: 7 },
                display: 'flex',
                justifyContent: 'space-between',
                borderTop: '1px solid #D4C5C0',
                pt: 2,
                maxWidth: '420px',
              }}
            >
              <Typography sx={{ color: '#7A6A6E', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Your Name
              </Typography>
              <Typography sx={{ color: '#7A6A6E', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
                © 2026
              </Typography>
            </Box>
          </Grid>

          {/* 우측 — 원형 타이포 심볼 */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <CircleTypo />
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default HeroSection;
