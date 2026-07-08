import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0D1520',
        borderTop: '1px solid rgba(148,177,200,0.08)',
        py: 3,
        px: { xs: 3, md: 6 },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      <Typography sx={{ color: 'rgba(227,223,206,0.35)', fontSize: '0.78rem', letterSpacing: '0.05em' }}>
        © 2026 Portfolio. All rights reserved.
      </Typography>
      <Typography sx={{ color: 'rgba(148,177,200,0.4)', fontSize: '0.78rem', letterSpacing: '0.05em' }}>
        Built with React + MUI
      </Typography>
    </Box>
  );
}

export default Footer;
