import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function About() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        py: 10,
        px: 6,
      }}
    >
      <Typography
        variant="h3"
        fontWeight={700}
        gutterBottom
      >
        About Me
      </Typography>

      <Typography
        variant="body1"
        sx={{
          maxWidth: 800,
          lineHeight: 1.8,
        }}
      >
        I'm a Computer Science student passionate about Front-End
        Development and creating modern web applications using React.
        I enjoy solving problems, learning new technologies, and building
        responsive user interfaces that provide a great user experience.
      </Typography>
    </Box>
  );
}

export default About;