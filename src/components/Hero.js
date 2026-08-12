import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";

import profileImage from "../assets/profileImage.jpg";

function Hero() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: "relative",
        minHeight: {
          xs: "calc(100vh - 72px)",
          md: "100vh",
        },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        px: {
          xs: 3,
          sm: 5,
          md: 8,
          lg: 10,
        },
        py: {
          xs: 8,
          md: 10,
        },
      }}
    >
      {/* Background Glow */}
      <Box
        sx={{
          position: "absolute",
          width: {
            xs: 280,
            md: 500,
          },
          height: {
            xs: 280,
            md: 500,
          },
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.22) 0%, rgba(139,92,246,0) 70%)",
          top: {
            xs: "-80px",
            md: "-120px",
          },
          right: {
            xs: "-100px",
            md: "-80px",
          },
          pointerEvents: "none",
        }}
      />

      {/* Second Glow */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0) 70%)",
          bottom: "-180px",
          left: "-120px",
          pointerEvents: "none",
        }}
      />

      {/* Decorative Grid */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.035,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1250,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: {
            xs: 6,
            md: 8,
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        {/* Text */}
        <Box
          sx={{
            flex: 1,
            animation: "heroTextIn 800ms ease-out",
            "@keyframes heroTextIn": {
              from: {
                opacity: 0,
                transform: "translateY(30px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Chip
            icon={<CodeIcon />}
            label="Front-End Developer"
            variant="outlined"
            sx={{
              mb: 3,
              color: "secondary.main",
              borderColor: "rgba(34, 211, 238, 0.35)",
              backgroundColor: "rgba(34, 211, 238, 0.06)",
            }}
          />

          <Typography
            variant="h6"
            sx={{
              color: "text.secondary",
              mb: 1,
              fontWeight: 500,
            }}
          >
            Hi, I'm
          </Typography>

          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: {
                xs: "3rem",
                sm: "4rem",
                md: "4.8rem",
                lg: "5.5rem",
              },
              mb: 1,
            }}
          >
            Dania
            <Box
              component="span"
              sx={{
                display: "block",
                background:
                  "linear-gradient(90deg, #A78BFA 0%, #22D3EE 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Barakat.
            </Box>
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontSize: {
                xs: "1.35rem",
                sm: "1.6rem",
                md: "2rem",
              },
              color: "text.primary",
              mb: 3,
              fontWeight: 600,
            }}
          >
            I build things for the web.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 600,
              color: "text.secondary",
              fontSize: {
                xs: "1rem",
                md: "1.08rem",
              },
              mb: 4,
            }}
          >
            I build responsive and interactive web interfaces
            using React, JavaScript, and Material UI, with a
            focus on creating clean and enjoyable user
            experiences.
          </Typography>

          <Stack
            direction={{
              xs: "column",
              sm: "row",
            }}
            spacing={2}
          >
            <Button
              variant="contained"
              size="large"
              href="#projects"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 3,
                py: 1.5,
              }}
            >
              View My Work
            </Button>

            <Button
              variant="outlined"
              size="large"
              href="#contact"
              sx={{
                px: 3,
                py: 1.5,
                color: "text.primary",
                borderColor: "divider",
              }}
            >
              Let's Talk
            </Button>
          </Stack>
        </Box>

        {/* Image */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animation: "heroImageIn 900ms ease-out",
            "@keyframes heroImageIn": {
              from: {
                opacity: 0,
                transform: "translateX(40px) scale(0.95)",
              },
              to: {
                opacity: 1,
                transform: "translateX(0) scale(1)",
              },
            },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: {
                xs: 260,
                sm: 330,
                md: 400,
                lg: 450,
              },
              height: {
                xs: 320,
                sm: 400,
                md: 480,
                lg: 530,
              },
              animation: "floating 5s ease-in-out infinite",
              "@keyframes floating": {
                "0%, 100%": {
                  transform: "translateY(0)",
                },
                "50%": {
                  transform: "translateY(-10px)",
                },
              },
            }}
          >
            {/* Purple Glow */}
            <Box
              sx={{
                position: "absolute",
                inset: "-20px",
                borderRadius: 8,
                background:
                  "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(34,211,238,0.12))",
                filter: "blur(35px)",
                zIndex: 0,
              }}
            />

            {/* Image Frame */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: 8,
                overflow: "hidden",
                border:
                  "1px solid rgba(139,92,246,0.35)",
                background:
                  "linear-gradient(145deg, rgba(24,24,40,0.9), rgba(15,15,27,0.9))",
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.45)",
                zIndex: 1,
              }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Dania Barakat"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 500ms ease",
                  "&:hover": {
                    transform: "scale(1.04)",
                  },
                }}
              />

              {/* Image Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 60%, rgba(8,8,18,0.55) 100%)",
                }}
              />
            </Box>

            {/* Decorative Circle */}
            <Box
              sx={{
                position: "absolute",
                width: 80,
                height: 80,
                borderRadius: "50%",
                border:
                  "1px solid rgba(34,211,238,0.4)",
                right: -25,
                top: 50,
                boxShadow:
                  "0 0 30px rgba(34,211,238,0.12)",
              }}
            />

            {/* Decorative Dot */}
            <Box
              sx={{
                position: "absolute",
                width: 14,
                height: 14,
                borderRadius: "50%",
                backgroundColor: "secondary.main",
                boxShadow:
                  "0 0 20px rgba(34,211,238,0.65)",
                left: -7,
                bottom: 90,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;