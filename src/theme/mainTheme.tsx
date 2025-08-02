import { createTheme } from "@mui/material";
import { colors } from "@/lib/colors";

export const theme = createTheme({
  palette: colors,
  typography: {
    h2: {
      fontFamily: `Lato`,
      fontWeight: "bold",
      fontSize: "48px",
      marginBottom: "8px",
    },
    body1: {
      fontFamily: "Barlow",
      fontSize: "20px",
    },
  },
});
