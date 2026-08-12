import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";

function MobileHeader({ onMenuClick }) {
  return (
    <Box
      component="header"
      sx={{
        display: {
          xs: "flex",
          md: "none",
        },
        alignItems: "center",
        justifyContent: "space-between",
        px: 2,
        py: 1.5,
        position: "sticky",
        top: 0,
        zIndex: 1100,
        backgroundColor: "background.paper",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <IconButton
        onClick={onMenuClick}
        aria-label="Open navigation menu"
      >
        <MenuIcon />
      </IconButton>

      <Typography
        variant="h6"
        fontWeight={700}
      >
        Dania
      </Typography>

      <Box
        sx={{
          width: 48,
        }}
      />
    </Box>
  );
}

export default MobileHeader;