import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const SKILLS = ['React', 'JavaScript', 'TypeScript', 'MUI', 'CSS / SCSS', 'Node.js', 'Supabase', 'Git'];

function AboutSection() {
  return (
    <Box id="about">
      <Grid container>
        {/* 좌측 — 버건디 (#780000) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              bgcolor: '#780000',
              minHeight: { xs: '380px', md: '520px' },
              display: 'flex',
              alignItems: 'center',
              px: { xs: 4, md: 8, lg: 10 },
              py: { xs: 7, md: 10 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: 'rgba(227,223,206,0.45)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  mb: 2.5,
                }}
              >
                01 — About
              </Typography>
              <Typography
                component="h2"
                sx={{
                  color: '#E3DFCE',
                  fontSize: { xs: '2rem', md: '2.8rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  mb: 3,
                }}
              >
                안녕하세요,<br />저는 OOO 입니다.
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(227,223,206,0.78)',
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.75,
                  maxWidth: '400px',
                }}
              >
                사용자 중심의 UI/UX를 설계하고,
                React 기반의 모던 웹 애플리케이션을 개발합니다.
                아이디어를 실제 서비스로 구현하는 과정을 즐깁니다.
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* 우측 — 코스모스 블루 (#003049) */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              bgcolor: '#003049',
              minHeight: { xs: '380px', md: '520px' },
              display: 'flex',
              alignItems: 'center',
              px: { xs: 4, md: 8, lg: 10 },
              py: { xs: 7, md: 10 },
            }}
          >
            <Box sx={{ width: '100%' }}>
              <Typography
                sx={{
                  color: 'rgba(148,177,200,0.6)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  mb: 2.5,
                }}
              >
                Skills
              </Typography>
              <Typography
                component="h3"
                sx={{
                  color: '#E3DFCE',
                  fontSize: { xs: '1.6rem', md: '2.2rem' },
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  mb: 3.5,
                }}
              >
                Tech Stack
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {SKILLS.map((skill) => (
                  <Box
                    key={skill}
                    sx={{
                      border: '1px solid rgba(148,177,200,0.35)',
                      color: '#94B1C8',
                      px: 2,
                      py: 0.75,
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      transition: 'all 0.2s ease',
                      cursor: 'default',
                      '&:hover': {
                        bgcolor: '#94B1C8',
                        color: '#003049',
                        borderColor: '#94B1C8',
                      },
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutSection;
