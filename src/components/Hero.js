import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import profileImage from "../assets/profileImage.jpg";

function Hero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: {
          xs: "auto",
          md: "100vh",
        },
        padding: {
          xs: 3,
          md: 6,
        },
        gap: 4,
        overflow: "hidden",
      }}
    >
      {/* Hero Text */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          animation: "heroTextEnter 800ms ease forwards",

          "@keyframes heroTextEnter": {
            from: {
              opacity: 0,
              transform: "translateX(-40px)",
            },
            to: {
              opacity: 1,
              transform: "translateX(0)",
            },
          },
        }}
      >
        <Typography variant="h6">
          Hi, I'm
        </Typography>

        <Typography
          variant="h2"
          fontWeight={700}
          sx={{
            fontSize: {
              xs: "2.2rem",
              sm: "3rem",
              md: "3.75rem",
            },
          }}
        >
          Dania Barakat
        </Typography>

        <Typography
          variant="h4"
          color="primary"
          sx={{
            mb: 3,
            fontSize: {
              xs: "1.7rem",
              sm: "2rem",
              md: "2.125rem",
            },
          }}
        >
          Front-End Developer
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: 550,
            mb: 4,
          }}
        >
          I build responsive and interactive web interfaces
          using React, JavaScript, and Material UI.
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="#projects"
          sx={{
            width: {
              xs: "100%",
              sm: "auto",
            },

            transition:
              "transform 200ms ease, box-shadow 200ms ease",

            "&:hover": {
              transform: "translateY(-2px)",
              boxShadow: 4,
            },
          }}
        >
          View My Work
        </Button>
      </Box>

      {/* Hero Image */}
      <Box
        sx={{
          flex: 1,
          width: "100%",
          textAlign: "center",
          animation: "heroImageEnter 900ms ease 150ms forwards",
          opacity: 0,

          "@keyframes heroImageEnter": {
            from: {
              opacity: 0,
              transform: "translateX(40px) scale(0.96)",
            },
            to: {
              opacity: 1,
              transform: "translateX(0) scale(1)",
            },
          },
        }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="Dania Barakat"
          sx={{
            width: "100%",
            maxWidth: {
              xs: 280,
              sm: 350,
              md: 420,
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Hero;