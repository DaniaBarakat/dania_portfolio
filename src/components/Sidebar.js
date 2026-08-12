import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import profileImage from "../assets/profileImage.jpg";

function Sidebar({ isDarkMode, onToggleTheme }) {
  return (
    <Box
      sx={{
        width: 280,
        minHeight: "100vh",
        padding: 3,
        boxSizing: "border-box",
        borderRight: "1px solid #e0e0e0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      <Typography variant="h5" sx={{ textAlign: "center", fontWeight: 700 }}>
        Dania Barakat
      </Typography>

      <Typography
        variant="body2"
        sx={{ textAlign: "center", mt: 1, color: "text.secondary" }}
      >
        Front-End Developer
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
        <IconButton onClick={onToggleTheme} aria-label="Toggle dark mode">
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        <IconButton aria-label="github" component="a" href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>

        <IconButton aria-label="linkedin" component="a" href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 5, width: "100%" }}>
        <Button href="#home" fullWidth>
          Home
        </Button>
        <Button href="#about" fullWidth>
          About
        </Button>
        <Button href="#skills" fullWidth>
          Skills
        </Button>
        <Button href="#what-i-do" fullWidth>
          What I Do
        </Button>
        <Button href="#projects" fullWidth>
          Projects
        </Button>
        <Button href="#education" fullWidth>
          Education
        </Button>
        <Button href="#contact" fullWidth>
          Contact
        </Button>
      </Box>

      <Button variant="contained" fullWidth sx={{ mt: 4 }}>
        Download CV
      </Button>
    </Box>
  );
}

export default Sidebar;
