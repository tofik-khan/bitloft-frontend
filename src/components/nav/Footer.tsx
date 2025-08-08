import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <>
      <Box sx={{ padding: 2 }}>
        <Typography align="center">
          &copy; {new Date().getFullYear()} &mdash; BitLoft LLC
        </Typography>
      </Box>
    </>
  );
};
