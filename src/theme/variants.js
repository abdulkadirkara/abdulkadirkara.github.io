import merge from "deepmerge";
import { green, grey } from "@mui/material/colors";
import { THEMES } from "../utils/constants/themeConstant";

const customBlue = {
  50: "#e9f0fb",
  100: "#c8daf4",
  200: "#a3c1ed",
  300: "#7ea8e5",
  400: "#6395e0",
  500: "#4782da",
  600: "#407ad6",
  700: "#376fd0",
  800: "#2f65cb",
  900: "#2052c2 ",
};

const defaultVariant = {
  name: THEMES.DEFAULT.key,
  palette: {
    mode: "light",
    primary: {
      main: customBlue[700],
      contrastText: "#FFF",
    },
    secondary: {
      main: customBlue[500],
      contrastText: "#FFF",
    },
    background: {
      default: "#F7F9FC",
      paper: "#FFF",
    },
    border: {
      dialogInCard: "#E0E0E0",
    },
  },
  header: {
    color: grey[500],
    background: "#FFF",
    search: {
      color: grey[800],
    },
    indicator: {
      background: customBlue[600],
    },
  },
  footer: {
    color: grey[500],
    background: "#FFF",
  },
  sidebar: {
    color: grey[200],
    background: "#233044",
    header: {
      color: grey[200],
      background: "#233044",
    },
    footer: {
      color: grey[200],
      background: "#1E2A38",
      online: {
        background: green[500],
      },
    },
    badge: {
      color: "#FFF",
      background: customBlue[500],
    },
  },
};

const darkVariant = merge(defaultVariant, {
  name: THEMES.DARK.key,
  palette: {
    mode: "dark",
    primary: {
      main: customBlue[600],
      contrastText: "#FFF",
    },
    background: {
      default: "#011627",
      paper: "#233044",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.95)",
      secondary: "rgba(255, 255, 255, 0.5)",
    },
    border: {
      dialogInCard: "#3E495B",
    },
  },
  header: {
    color: grey[300],
    background: "#010C15",
    item: {
      borderColor: "#252526",
      background: "#1E2D3D",
      activeBackground: "#011627",
      color: "#8F8F8F",
      activeColor: grey[200],
    },
  },
  footer: {
    color: grey[300],
    background: "#122B46",
    item: {
      activeBackground: "#1a222b",
    },
  },
  sidebar: {
    color: grey[200],
    background: "#010C15",
    header: {
      color: "#8f8f8f",
      background: "#010C15",
    },
    content: {
      hover: {
        background: "#1a222b",
      },
    },
    footer: {
      color: grey[200],
      background: "#333333",
    },
    badge: {
      color: "#FFF",
      background: customBlue[500],
    },
  },
});

const variants = [defaultVariant, darkVariant];

export default variants;
