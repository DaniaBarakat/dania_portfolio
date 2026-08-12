import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const services = [
  {
    title: "React Development",
    description:
      "Building interactive user interfaces using React.",
  },
  {
    title: "Front-End Development",
    description:
      "Creating responsive and modern web interfaces.",
  },
  {
    title: "Software Testing",
    description:
      "Writing test cases and identifying software issues.",
  },
  {
    title: "Git & GitHub",
    description:
      "Managing source code using version control.",
  },
];

function WhatIDo() {
  return (
    <Box
      component="section"
      id="what-i-do"
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
        What I Learn
      </Typography>

      <Grid container spacing={3}>
        {services.map((service) => (
          <Grid
            key={service.title}
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <Card
              sx={{
                height: "100%",
                transition:
                  "transform 250ms ease, box-shadow 250ms ease",

                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 5,
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  gutterBottom
                >
                  {service.title}
                </Typography>

                <Typography variant="body2">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default WhatIDo;