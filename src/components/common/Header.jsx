import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const handleScroll = (href) => (e) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ bgcolor: '#003049', borderBottom: '1px solid rgba(148,177,200,0.15)' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 5 } }}>
        <Typography
          sx={{
            fontWeight: 700,
            color: '#E3DFCE',
            letterSpacing: '0.15em',
            fontSize: { xs: '0.9rem', md: '1rem' },
            textTransform: 'uppercase',
          }}
        >
          Portfolio
        </Typography>
        <Box sx={{ display: 'flex', gap: { xs: 0.5, md: 1 } }}>
          {NAV_LINKS.map(({ label, href }) => (
            <Button
              key={label}
              href={href}
              onClick={handleScroll(href)}
              sx={{
                color: '#94B1C8',
                fontSize: '0.85rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                minWidth: 'auto',
                px: { xs: 1, md: 2 },
                '&:hover': { color: '#E3DFCE', bgcolor: 'transparent' },
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
