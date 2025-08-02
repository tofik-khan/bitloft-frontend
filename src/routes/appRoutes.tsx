import { PublicLayout } from "@/components/layouts/public";
import { Typography } from "@mui/material";
import { Route, Routes } from "react-router";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route
            path="/"
            element={
              <Typography variant="h2" color="primary">
                Homepage
              </Typography>
            }
          />
        </Route>
      </Routes>
    </>
  );
};
