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
        minHeight: "100vh",
        padding: {
          xs: 3,
          md: 6,
        },
        gap: 4,
      }}
    >
      <Box
        sx={{
          flex: 1,
          width: "100%",
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
          }}
        >
          View My Work
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={profileImage}
          alt="Hero"
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