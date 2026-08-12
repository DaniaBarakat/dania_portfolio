import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import profileImage from "../assets/profileImage.jpg";

function Sidebar() {
  return (
    <Box
      sx={{
        width: 280,
        minHeight: "100vh",
        padding: 3,
        boxSizing: "border-box",
        borderRight: "1px solid #e0e0e0",
      }}
    >
      <Avatar
        alt="Dania Barakat"
        src={profileImage}
        sx={{
          width: 120,
          height: 120,
          margin: "0 auto 20px",
        }}
      />

      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Dania Barakat
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mt: 1,
          color: "text.secondary",
        }}
      >
        Front-End Developer
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          mt: 3,
        }}
      >
        <IconButton
        component="a"
        href="https://github.com/DaniaBarakat"
        target="_blank"
        rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>

        <IconButton
        component="a"
        href="https://www.linkedin.com/in/dania-barakat-bb878a33a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
        target="_blank"
        rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>

        <IconButton
        component="a"
        href="mailto:daniabarakat88@gmail.com"
        aria-label="Email"
        >
          <EmailIcon />
        </IconButton>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          mt: 5,
        }}
      >
        <Button href="#home">Home</Button>
<Button href="#about">About</Button>
<Button href="#skills">Skills</Button>
<Button href="#what-i-do">What I Do</Button>
<Button href="#projects">Projects</Button>
<Button href="#education">Education</Button>
<Button href="#contact">Contact</Button>
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 5,
        }}
      >
        Download CV
      </Button>
    </Box>
  );
}

export default Sidebar;