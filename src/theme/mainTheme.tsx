import { createTheme } from "@mui/material";
import { colors } from "@/lib/colors";

export const theme = createTheme({
  palette: colors,
  typography: {
    h2: {
      fontFamily: `Lato`,
      fontWeight: "bold",
      fontSize: "56px",
      marginBottom: "8px",
    },
  },
});
