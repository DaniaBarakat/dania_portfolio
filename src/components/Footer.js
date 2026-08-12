import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 6,
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
      >
        © {new Date().getFullYear()} Dania Barakat. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;