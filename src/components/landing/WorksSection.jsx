import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import projects from '../../data/projects';

const CARD_COLORS = ['#1A0A0F', '#003049', '#4C050C', '#0D1520'];

function WorksSection() {
  return (
    <Box id="works" sx={{ bgcolor: '#F5F0E8', py: { xs: 7, md: 11 } }}>
      <Container maxWidth="lg">
        {/* 섹션 헤더 */}
        <Box
          sx={{
            mb: { xs: 5, md: 7 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <Box>
            <Typography
              sx={{
                color: '#780000',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                mb: 1.5,
              }}
            >
              02 — Works
            </Typography>
            <Typography
              component="h2"
              sx={{
                color: '#1A0A0F',
                fontSize: { xs: '2.2rem', md: '3.5rem' },
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.025em',
              }}
            >
              Selected<br />Projects
            </Typography>
          </Box>
          <Typography
            sx={{
              color: '#7A6A6E',
              fontSize: '0.85rem',
              letterSpacing: '0.05em',
              display: { xs: 'none', md: 'block' },
              mb: 1,
            }}
          >
            {projects.length} Projects
          </Typography>
        </Box>

        {/* 프로젝트 카드 그리드 */}
        <Grid container spacing={2.5}>
          {projects.map((project, idx) => (
            <Grid key={project.id} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  bgcolor: CARD_COLORS[idx % CARD_COLORS.length],
                  height: { xs: '260px', md: '340px' },
                  p: { xs: 3, md: 3.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: 'rgba(227,223,206,0.45)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      mb: 1.5,
                    }}
                  >
                    {project.category}
                  </Typography>
                  <Typography
                    component="h3"
                    sx={{
                      color: '#E3DFCE',
                      fontSize: { xs: '1.2rem', md: '1.4rem' },
                      fontWeight: 700,
                      lineHeight: 1.2,
                      mb: 2,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: 'rgba(227,223,206,0.6)',
                      fontSize: '0.83rem',
                      lineHeight: 1.65,
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    pt: 2,
                    borderTop: '1px solid rgba(227,223,206,0.08)',
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <Box
                        key={tag}
                        sx={{
                          bgcolor: 'rgba(227,223,206,0.08)',
                          color: '#94B1C8',
                          px: 1,
                          py: 0.3,
                          fontSize: '0.68rem',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {tag}
                      </Box>
                    ))}
                  </Box>
                  <Typography
                    sx={{
                      color: 'rgba(227,223,206,0.35)',
                      fontSize: '0.72rem',
                      flexShrink: 0,
                      ml: 1,
                    }}
                  >
                    {project.year}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WorksSection;
