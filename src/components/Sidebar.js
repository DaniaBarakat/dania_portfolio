import { Avatar, Typography, Box, IconButton, Button } from '@mui/material';
import profileImage from '../assets/profileImage.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 280,
        minHeight: '100vh',
        padding: 3,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar
        alt="Dania Barakat"
        src={profileImage}
        sx={{
          width: 120,
          height: 120,
          marginBottom: 2,
        }}
      />

      <Typography variant="h5" component="h2" sx={{ textAlign: 'center', fontWeight: 700 }}>
        Dania Barakat
      </Typography>

      <Typography variant="body2" component="p" sx={{ textAlign: 'center', mt: 1 }}>
        Front-End Developer
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mt: 3 }}>
        <IconButton aria-label="github">
          <GitHubIcon />
        </IconButton>

        <IconButton aria-label="linkedin">
          <LinkedInIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 4, width: '100%' }}>
        <Button fullWidth>Home</Button>
        <Button fullWidth>About</Button>
        <Button fullWidth>Skills</Button>
        <Button fullWidth>Projects</Button>
        <Button fullWidth>Contact</Button>
      </Box>

      <Button variant="contained" fullWidth sx={{ mt: 4 }}>
        Download CV
      </Button>
    </Box>
  );
}
