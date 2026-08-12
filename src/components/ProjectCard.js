import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";

function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",

        transition:
          "transform 250ms ease, box-shadow 250ms ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h6"
          fontWeight={700}
          gutterBottom
        >
          {project.title}
        </Typography>

        <Typography variant="body2">
          {project.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
          }}
        >
          {project.technologies.map((technology) => (
            <Chip
              key={technology}
              label={technology}
              size="small"
            />
          ))}
        </Box>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            transition: "transform 200ms ease",

            "&:hover": {
              transform: "translateY(-2px)",
            },
          }}
        >
          GitHub
        </Button>

        <Button
          size="small"
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            transition: "transform 200ms ease",

            "&:hover": {
              transform: "translateY(-2px)",
            },
          }}
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;