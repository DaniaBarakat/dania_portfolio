import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",

    background: {
      default: "#080812",
      paper: "#11111D",
    },

    primary: {
      main: "#8B5CF6",
      light: "#A78BFA",
      dark: "#6D28D9",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#22D3EE",
      light: "#67E8F9",
      dark: "#0891B2",
      contrastText: "#061018",
    },

    error: {
      main: "#FB7185",
    },

    success: {
      main: "#34D399",
    },

    text: {
      primary: "#F8FAFC",
      secondary: "#A1A1B5",
    },

    divider: "rgba(255, 255, 255, 0.10)",
  },

  typography: {
    fontFamily:
      '"Inter", "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',

    h1: {
      fontWeight: 800,
      letterSpacing: "-0.04em",
      lineHeight: 1.05,
    },

    h2: {
      fontWeight: 800,
      letterSpacing: "-0.035em",
      lineHeight: 1.1,
    },

    h3: {
      fontWeight: 800,
      letterSpacing: "-0.025em",
      lineHeight: 1.15,
    },

    h4: {
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },

    h5: {
      fontWeight: 700,
    },

    h6: {
      fontWeight: 700,
    },

    body1: {
      lineHeight: 1.8,
    },

    body2: {
      lineHeight: 1.7,
    },

    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 16,
  },

  shadows: [
    "none",
    "0 2px 8px rgba(0, 0, 0, 0.18)",
    "0 4px 14px rgba(0, 0, 0, 0.20)",
    "0 6px 20px rgba(0, 0, 0, 0.22)",
    "0 8px 28px rgba(0, 0, 0, 0.24)",
    "0 12px 36px rgba(0, 0, 0, 0.28)",
    "0 16px 44px rgba(0, 0, 0, 0.30)",
    "0 20px 52px rgba(0, 0, 0, 0.32)",
    "0 24px 60px rgba(0, 0, 0, 0.34)",
    "0 28px 68px rgba(0, 0, 0, 0.36)",
    "0 32px 76px rgba(0, 0, 0, 0.38)",
    "0 36px 84px rgba(0, 0, 0, 0.40)",
    "0 40px 92px rgba(0, 0, 0, 0.42)",
    "0 44px 100px rgba(0, 0, 0, 0.44)",
    "0 48px 108px rgba(0, 0, 0, 0.46)",
    "0 52px 116px rgba(0, 0, 0, 0.48)",
    "0 56px 124px rgba(0, 0, 0, 0.50)",
    "0 60px 132px rgba(0, 0, 0, 0.52)",
    "0 64px 140px rgba(0, 0, 0, 0.54)",
    "0 68px 148px rgba(0, 0, 0, 0.56)",
    "0 72px 156px rgba(0, 0, 0, 0.58)",
    "0 76px 164px rgba(0, 0, 0, 0.60)",
    "0 80px 172px rgba(0, 0, 0, 0.62)",
    "0 84px 180px rgba(0, 0, 0, 0.64)",
    "0 88px 188px rgba(0, 0, 0, 0.66)",
  ],

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          backgroundColor: "#080812",
          color: "#F8FAFC",
        },

        "::selection": {
          backgroundColor: "rgba(139, 92, 246, 0.35)",
          color: "#FFFFFF",
        },

        "::-webkit-scrollbar": {
          width: "8px",
        },

        "::-webkit-scrollbar-track": {
          background: "#080812",
        },

        "::-webkit-scrollbar-thumb": {
          background: "rgba(139, 92, 246, 0.45)",
          borderRadius: "999px",
        },

        "::-webkit-scrollbar-thumb:hover": {
          background: "rgba(34, 211, 238, 0.65)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 18px",
          transition:
            "transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease",

          "&:hover": {
            transform: "translateY(-2px)",
          },
        },

        containedPrimary: {
          background:
            "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",

          boxShadow:
            "0 8px 24px rgba(139, 92, 246, 0.25)",

          "&:hover": {
            background:
              "linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)",

            boxShadow:
              "0 12px 30px rgba(139, 92, 246, 0.35)",
          },
        },

        outlinedPrimary: {
          borderColor: "rgba(139, 92, 246, 0.5)",

          "&:hover": {
            borderColor: "#8B5CF6",
            backgroundColor: "rgba(139, 92, 246, 0.08)",
          },
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(145deg, rgba(24, 24, 40, 0.96), rgba(15, 15, 27, 0.96))",

          border:
            "1px solid rgba(255, 255, 255, 0.08)",

          borderRadius: 20,

          boxShadow:
            "0 12px 40px rgba(0, 0, 0, 0.24)",

          transition:
            "transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease",

          "&:hover": {
            borderColor:
              "rgba(139, 92, 246, 0.35)",

            boxShadow:
              "0 18px 50px rgba(0, 0, 0, 0.32)",
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontWeight: 600,
          backgroundColor:
            "rgba(139, 92, 246, 0.12)",

          border:
            "1px solid rgba(139, 92, 246, 0.20)",
        },

        label: {
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          transition:
            "transform 200ms ease, color 200ms ease, background-color 200ms ease",

          "&:hover": {
            transform: "translateY(-2px)",
            backgroundColor:
              "rgba(139, 92, 246, 0.10)",
          },
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },

      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 14,
            backgroundColor:
              "rgba(255, 255, 255, 0.025)",

            transition:
              "border-color 200ms ease, box-shadow 200ms ease",

            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor:
                "rgba(139, 92, 246, 0.55)",
            },

            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#8B5CF6",

              boxShadow:
                "0 0 0 3px rgba(139, 92, 246, 0.12)",
            },
          },
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          background:
            "linear-gradient(180deg, #11111D 0%, #0B0B14 100%)",

          borderColor:
            "rgba(255, 255, 255, 0.08)",
        },
      },
    },
  },
});

export default theme;