import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projects from '../../data/projects';

const CARD_COLORS = ['#1A0A0F', '#003049', '#4C050C', '#0D1520'];

const BASE = import.meta.env.BASE_URL;

/**
 * ThumbnailCard — 썸네일 이미지가 있는 프로젝트 카드
 *
 * @param {object} project - 프로젝트 데이터 [Required]
 * @param {number} idx     - 인덱스 (폴백 배경색 결정) [Required]
 */
function ThumbnailCard({ project, idx }) {
  const isLink = project.link && project.link !== '#';

  return (
    <Box
      component={isLink ? 'a' : 'div'}
      href={isLink ? project.link : undefined}
      target={isLink ? '_blank' : undefined}
      rel={isLink ? 'noopener noreferrer' : undefined}
      sx={{
        display: 'block',
        height: { xs: '320px', md: '380px' },
        position: 'relative',
        overflow: 'hidden',
        cursor: isLink ? 'pointer' : 'default',
        textDecoration: 'none',
        bgcolor: CARD_COLORS[idx % CARD_COLORS.length],
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': isLink ? {
          transform: 'translateY(-6px)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
        } : {},
        '&:hover .thumb-overlay': { opacity: 1 },
        '&:hover .link-icon': { opacity: 1, transform: 'translate(0,0)' },
      }}
    >
      {/* 썸네일 이미지 */}
      <Box
        component="img"
        src={`${BASE}thumbnails/${project.thumbnail}`}
        alt={project.title}
        sx={{
          width: '100%',
          height: '68%',
          objectFit: 'cover',
          objectPosition: 'top',
          display: 'block',
        }}
      />

      {/* 이미지 오버레이 (호버 시) */}
      <Box
        className="thumb-overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '68%',
          bgcolor: 'rgba(120,0,0,0.15)',
          opacity: 0,
          transition: 'opacity 0.25s ease',
        }}
      />

      {/* 외부 링크 아이콘 (호버 시) */}
      {isLink && (
        <Box
          className="link-icon"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            bgcolor: '#E3DFCE',
            borderRadius: '50%',
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            transform: 'translate(4px, -4px)',
            transition: 'opacity 0.25s ease, transform 0.25s ease',
          }}
        >
          <OpenInNewIcon sx={{ fontSize: 16, color: '#780000' }} />
        </Box>
      )}

      {/* 하단 정보 영역 */}
      <Box
        sx={{
          height: '32%',
          bgcolor: CARD_COLORS[idx % CARD_COLORS.length],
          p: { xs: 2, md: 2.5 },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            sx={{
              color: 'rgba(227,223,206,0.45)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              mb: 0.5,
            }}
          >
            {project.category}
          </Typography>
          <Typography
            component="h3"
            sx={{
              color: '#E3DFCE',
              fontSize: { xs: '1rem', md: '1.15rem' },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {project.title}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap' }}>
            {project.tags.map((tag) => (
              <Box
                key={tag}
                sx={{
                  bgcolor: 'rgba(227,223,206,0.08)',
                  color: '#94B1C8',
                  px: 1,
                  py: 0.25,
                  fontSize: '0.65rem',
                  letterSpacing: '0.05em',
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
          <Typography sx={{ color: 'rgba(227,223,206,0.35)', fontSize: '0.7rem', flexShrink: 0, ml: 1 }}>
            {project.year}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

/**
 * DarkCard — 썸네일 없는 프로젝트 카드 (기본 다크 스타일)
 *
 * @param {object} project - 프로젝트 데이터 [Required]
 * @param {number} idx     - 인덱스 (배경색 결정) [Required]
 */
function DarkCard({ project, idx }) {
  const isLink = project.link && project.link !== '#';

  return (
    <Box
      component={isLink ? 'a' : 'div'}
      href={isLink ? project.link : undefined}
      target={isLink ? '_blank' : undefined}
      rel={isLink ? 'noopener noreferrer' : undefined}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: { xs: '320px', md: '380px' },
        bgcolor: CARD_COLORS[idx % CARD_COLORS.length],
        p: { xs: 3, md: 3.5 },
        cursor: isLink ? 'pointer' : 'default',
        textDecoration: 'none',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        '&:hover': isLink ? {
          transform: 'translateY(-6px)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.35)',
        } : {},
      }}
    >
      <Box>
        <Typography
          sx={{
            color: 'rgba(227,223,206,0.45)',
            fontSize: '0.65rem',
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
        <Typography sx={{ color: 'rgba(227,223,206,0.35)', fontSize: '0.72rem', flexShrink: 0, ml: 1 }}>
          {project.year}
        </Typography>
      </Box>
    </Box>
  );
}

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
              {project.thumbnail ? (
                <ThumbnailCard project={project} idx={idx} />
              ) : (
                <DarkCard project={project} idx={idx} />
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default WorksSection;
