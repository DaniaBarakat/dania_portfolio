import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "HTML",
        level: "Proficient",
      },
      {
        name: "CSS",
        level: "Proficient",
      },
      {
        name: "JavaScript",
        level: "Intermediate",
      },
      {
        name: "React",
        level: "Intermediate",
      },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      {
        name: "Git & GitHub",
        level: "Intermediate",
      },
      {
        name: "Material UI",
        level: "Intermediate",
      },
      {
        name: "Jira",
        level: "Intermediate",
      },
    ],
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
        {skillGroups.map((group) => (
          <Box
            key={group.title}
            sx={{
              mb: 5,
            }}
          >
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                mb: 2,
              }}
            >
              {group.title}
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {group.skills.map((skill) => (
                <Box
                  key={skill.name}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                    p: 2,
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="body1"
                    fontWeight={600}
                  >
                    {skill.name}
                  </Typography>

                  <Chip
                    label={skill.level}
                    size="small"
                  />
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Skills;