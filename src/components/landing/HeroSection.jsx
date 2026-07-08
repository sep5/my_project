import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const handleScroll = (href) => (e) => {
  e.preventDefault();
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

/* ── 원형 타이포 SVG 심볼 ── */
function CircleTypo() {
  return (
    <svg
      viewBox="0 0 400 400"
      style={{ width: '100%', maxWidth: '540px' }}
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
        <text fontSize="10.5" fill="#780000" fontWeight="700" letterSpacing="5.8" fontFamily="Pretendard, sans-serif">
          <textPath href="#outerCirclePath">
            PORTFOLIO · FRONTEND · DEVELOPER · REACT · UI/UX ·
          </textPath>
        </text>
      </g>

      {/* 내부 반시계방향 회전 텍스트 */}
      <g className="circle-rotate-reverse" style={{ transformOrigin: '200px 200px' }}>
        <text fontSize="9" fill="#003049" fontWeight="600" letterSpacing="5.2" fontFamily="Pretendard, sans-serif">
          <textPath href="#innerCirclePath">
            2026 · DESIGN · CODE · CREATE · BUILD ·
          </textPath>
        </text>
      </g>

      {/* 중앙 심볼 텍스트 */}
      <text x="200" y="188" textAnchor="middle" fontSize="42" fontWeight="800"
        fill="#1A0A0F" fontFamily="Pretendard, sans-serif" letterSpacing="-2">
        PORT
      </text>
      <text x="200" y="232" textAnchor="middle" fontSize="42" fontWeight="800"
        fill="#780000" fontFamily="Pretendard, sans-serif" letterSpacing="-2">
        FOLIO
      </text>

      {/* 4방향 포인트 마커 */}
      <circle cx="200" cy="41"  r="4.5" fill="#780000" />
      <circle cx="359" cy="200" r="4.5" fill="#780000" />
      <circle cx="200" cy="359" r="4.5" fill="#780000" />
      <circle cx="41"  cy="200" r="4.5" fill="#780000" />

      {/* 대각 포인트 */}
      <circle cx="312" cy="88"  r="2.5" fill="#003049" />
      <circle cx="312" cy="312" r="2.5" fill="#003049" />
      <circle cx="88"  cy="312" r="2.5" fill="#003049" />
      <circle cx="88"  cy="88"  r="2.5" fill="#003049" />
    </svg>
  );
}

/* ── 프로필 카드 ── */
function ProfileCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: 3,
      }}
    >
      {/* 아바타 */}
      <Avatar
        sx={{
          width: { xs: 110, md: 140 },
          height: { xs: 110, md: 140 },
          bgcolor: '#780000',
          fontSize: { xs: '2.5rem', md: '3rem' },
          fontWeight: 800,
          fontFamily: 'Pretendard, sans-serif',
          border: '3px solid #D4C5C0',
        }}
      >
        P
      </Avatar>

      {/* 이름 · 포지션 */}
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography
          sx={{
            color: '#7A6A6E',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            mb: 0.75,
          }}
        >
          Frontend Developer
        </Typography>
        <Typography
          component="h3"
          sx={{
            color: '#1A0A0F',
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            mb: 1.5,
          }}
        >
          Your Name
        </Typography>
        <Typography
          sx={{
            color: '#3D2B30',
            fontSize: { xs: '0.9rem', md: '1rem' },
            lineHeight: 1.75,
            maxWidth: '320px',
          }}
        >
          사용자 경험을 디자인하고 코드로 구현합니다.
          React · MUI · Supabase 기반 웹 서비스를 개발합니다.
        </Typography>
      </Box>

      {/* 소셜 링크 */}
      <Box sx={{ display: 'flex', gap: 1.5 }}>
        <Box
          component="a"
          href="mailto:your@email.com"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            color: '#780000',
            fontSize: '0.82rem',
            fontWeight: 600,
            textDecoration: 'none',
            border: '1px solid #D4C5C0',
            px: 2,
            py: 0.75,
            transition: 'all 0.2s ease',
            '&:hover': { bgcolor: '#780000', color: '#E3DFCE', borderColor: '#780000' },
          }}
        >
          <EmailIcon sx={{ fontSize: 15 }} />
          Email
        </Box>
        <Box
          component="a"
          href="https://github.com/sep5"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.75,
            color: '#003049',
            fontSize: '0.82rem',
            fontWeight: 600,
            textDecoration: 'none',
            border: '1px solid #D4C5C0',
            px: 2,
            py: 0.75,
            transition: 'all 0.2s ease',
            '&:hover': { bgcolor: '#003049', color: '#E3DFCE', borderColor: '#003049' },
          }}
        >
          <GitHubIcon sx={{ fontSize: 15 }} />
          GitHub
        </Box>
      </Box>
    </Box>
  );
}

/* ── HeroSection 메인 ── */
function HeroSection() {
  return (
    <Box sx={{ bgcolor: '#E3DFCE' }}>

      {/* ── Part 1: 원형 심볼 풀스크린 중앙 ── */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: 8,
          position: 'relative',
        }}
      >
        <CircleTypo />

        {/* 스크롤 유도 화살표 */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 32,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.5,
            cursor: 'pointer',
            opacity: 0.5,
            animation: 'bounce 2s infinite',
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(6px)' },
            },
          }}
          onClick={() =>
            document.getElementById('hero-intro')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <Typography sx={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#7A6A6E', textTransform: 'uppercase' }}>
            Scroll
          </Typography>
          <KeyboardArrowDownIcon sx={{ color: '#7A6A6E', fontSize: 20 }} />
        </Box>
      </Box>

      {/* ── Part 2: 텍스트 + 프로필 (스크롤 후 등장) ── */}
      <Box
        id="hero-intro"
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          borderTop: '1px solid #D4C5C0',
        }}
      >
        <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">

            {/* 좌측 — 타이포 + CTA */}
            <Grid size={{ xs: 12, md: 7 }}>
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
                  fontSize: { xs: '4rem', sm: '5.5rem', md: '7.5rem' },
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
                  fontSize: { xs: '4rem', sm: '5.5rem', md: '7.5rem' },
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
                  maxWidth: '420px',
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
            </Grid>

            {/* 우측 — 프로필 */}
            <Grid
              size={{ xs: 12, md: 5 }}
              sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' } }}
            >
              <ProfileCard />
            </Grid>

          </Grid>
        </Container>
      </Box>

    </Box>
  );
}

export default HeroSection;
