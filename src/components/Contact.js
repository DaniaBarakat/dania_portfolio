import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
function Contact() {
  return (
    <Box
      component="section"
      id="contact"
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
        Contact Me
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          maxWidth: 700,
          mb: 4,
        }}
      >
        Have a question, project idea, or just want to connect?
        Feel free to send me a message.
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 1,
          mb: 4,
        }}
      >
        <IconButton
          component="a"
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:your-email@example.com"
        >
          <EmailIcon />
        </IconButton>
      </Box>

      <Paper
        elevation={0}
        sx={{
          maxWidth: 700,
          p: 4,
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 3,
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            fullWidth
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
          />

          <TextField
            label="Message"
            multiline
            rows={5}
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            size="large"
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Contact;