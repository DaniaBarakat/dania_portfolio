import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";

function Education() {
  return (
    <Box
      component="section"
      id="education"
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
        Education & Training
      </Typography>

      <Card
        sx={{
          maxWidth: 850,
          borderRadius: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight={700}
            gutterBottom
          >
            B.Sc. in Computer Science
          </Typography>

          <Typography
            variant="subtitle1"
            color="primary"
            gutterBottom
          >
            University Name
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 3 }}
          >
            202X - Present
          </Typography>

          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              mb: 3,
            }}
          >
            Studying computer science with an interest in
            front-end development, software testing, and
            modern web technologies.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Chip label="React" />
            <Chip label="JavaScript" />
            <Chip label="Git & GitHub" />
            <Chip label="Software Testing" />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Education;