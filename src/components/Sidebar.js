import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import profileImage from "../assets/profileImage.jpg";

function Sidebar({ mobileOpen, onClose }) {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const navigationItems = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "What I Do",
      href: "#what-i-do",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const handleNavigationClick = () => {
    if (isMobile) {
      onClose();
    }
  };

  const sidebarContent = (
    <Box
      sx={{
        width: 280,
        minHeight: "100vh",
        padding: 3,
        boxSizing: "border-box",
        borderRight: {
          xs: "none",
          md: "1px solid #e0e0e0",
        },
      }}
    >
      {/* Profile Image */}
      <Avatar
        alt="Dania Barakat"
        src={profileImage}
        sx={{
          width: 120,
          height: 120,
          margin: "0 auto 20px",
        }}
      />

      {/* Name */}
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: 700,
        }}
      >
        Dania Barakat
      </Typography>

      {/* Job Title */}
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

      {/* Social Links */}
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
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/dania-barakat-bb878a33a?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
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

      {/* Navigation */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
          mt: 5,
        }}
      >
        {navigationItems.map((item) => (
          <Button
            key={item.href}
            href={item.href}
            onClick={handleNavigationClick}
          >
            {item.label}
          </Button>
        ))}
      </Box>

      {/* Download CV */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 5,
        }}
        onClick={isMobile ? onClose : undefined}
      >
        Download CV
      </Button>
    </Box>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          anchor="left"
          open
          sx={{
            width: 280,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 280,
              boxSizing: "border-box",
              borderRight: "1px solid #e0e0e0",
            },
          }}
        >
          {sidebarContent}
        </Drawer>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={onClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              width: 280,
              boxSizing: "border-box",
            },
          }}
        >
          {sidebarContent}
        </Drawer>
      )}
    </>
  );
}

export default Sidebar;