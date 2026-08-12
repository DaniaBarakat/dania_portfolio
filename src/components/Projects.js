import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";

import projects from "../data/projects";

function Projects() {
  return (
    <Box
      component="section"
      id="projects"
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
        My Projects
      </Typography>

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid
            key={project.title}
            size={{ xs: 12, sm: 6, md: 4 }}
          >
            <ProjectCard
              project={project}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Projects;