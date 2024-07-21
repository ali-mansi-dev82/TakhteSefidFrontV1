import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",
  typography: { fontFamily: "YekanBakhFaNum" },
  palette: {
    mode: "light",
    primary: {
      light: "#B6EBE5",
      main: "#008C7B",
      dark: "#006E61",
      contrastText: "#fff",
    },
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#EAF2F7",
          color: "#22668A",
          borderRadius: "8px",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorSecondary: "red",
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        dir: "ltr",
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "YekanBakhFaNum",
          outline: { borderRadius: "18px" },
        },
      },
    },
    MuiMenu: { styleOverrides: {} },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#D1D5DB",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardError: {
          background: "#FDE8E8",
          color: "#C81E1E",
          borderRadius: "8px",
        },
      },
    },
    MuiDialog: { styleOverrides: { paper: { borderRadius: "8px" } } },
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: "8px",
          boxShadow: "none",
        },
      },
      styleOverrides: {
        contained: {
          fontWeight: 100,
        },
        outlined: {
          borderColor: "#E5E7EB",
          color: "#111928",
        },
        // sizeLarge: { paddingY: "12px" },
        // sizeMedium: { paddingY: "10px" },
        // sizeSmall: { paddingY: "6px" },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "#F3F4F6",
          color: "#4B5563",
          padding: "8px",
        },
        expanded: {
          padding: "0px",
          margin: "0px",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: { color: "#6B7280", fontSize: "14px", lineHeight: "28px" },
      },
    },
  },
});

function App({ children }) {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
