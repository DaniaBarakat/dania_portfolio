import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function About() {
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
        I'm a Computer Science student interested in
        Front-End Development and modern web technologies.
        I enjoy building interactive and responsive web
        interfaces using React.
      </Typography>
    </Box>
  );
}
