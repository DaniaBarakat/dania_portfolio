import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";

const skills = [
  {
    name: "HTML",
    level: 90,
  },
  {
    name: "CSS",
    level: 85,
  },
  {
    name: "JavaScript",
    level: 80,
  },
  {
    name: "React",
    level: 75,
  },
  {
    name: "Git & GitHub",
    level: 70,
  },
];

function Skills() {
  return (
    <Box
      component="section"
      id="skills"
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
        Skills
      </Typography>

      <Box
        sx={{
          maxWidth: 800,
        }}
      >
        {skills.map((skill) => (
          <Box
            key={skill.name}
            sx={{
              mb: 3,
            }}
          >
            <Typography
              variant="body1"
              fontWeight={600}
              sx={{
                mb: 1,
              }}
            >
              {skill.name}
            </Typography>

            <LinearProgress
              variant="determinate"
              value={skill.level}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;