import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import heroImage from "../assets/hero.png";

function Hero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "100vh",
        padding: 6,
        gap: 4,
      }}
    >
      <Box
        sx={{
          flex: 1,
        }}
      >
        <Typography variant="h6">
          Hi, I'm
        </Typography>

        <Typography
          variant="h2"
          fontWeight={700}
        >
          Dania Barakat
        </Typography>

        <Typography
          variant="h4"
          color="primary"
          sx={{
            mb: 3,
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
        >
          View My Work
        </Button>
      </Box>

      <Box
        sx={{
          flex: 1,
          textAlign: "center",
        }}
      >
        <Box
          component="img"
          src={heroImage}
          alt="Hero"
          sx={{
            width: "100%",
            maxWidth: 420,
          }}
        />
      </Box>
    </Box>
  );
}

export default Hero;