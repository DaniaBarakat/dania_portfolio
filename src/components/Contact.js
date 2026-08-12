import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMessage("");

    // Validate name
    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      setStatus("error");
      return;
    }

    // Validate email
    if (!formData.email.trim()) {
      setErrorMessage("Please enter your email.");
      setStatus("error");
      return;
    }

    // Validate message
    if (!formData.message.trim()) {
      setErrorMessage("Please enter your message.");
      setStatus("error");
      return;
    }

    // Start loading state
    setStatus("loading");

    // Simulate message submission
    setTimeout(() => {
      setStatus("success");

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        px: 6,
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        fontWeight="bold"
      >
        Contact Me
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Have a project in mind or want to get in touch? Feel free to
        send me a message.
      </Typography>

      {/* Success Message */}
      {status === "success" && (
        <Alert
          severity="success"
          sx={{ mb: 3 }}
        >
          Message sent successfully!
        </Alert>
      )}

      {/* Error Message */}
      {status === "error" && (
        <Alert
          severity="error"
          sx={{ mb: 3 }}
        >
          {errorMessage}
        </Alert>
      )}

      {/* Contact Form */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 700,
        }}
      >
        {/* Name */}
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        {/* Email */}
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        {/* Message */}
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          multiline
          rows={5}
          fullWidth
          margin="normal"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={status === "loading"}
          sx={{ mt: 2 }}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;