import { PublicLayout } from "@/components/layouts/public";
import { HomePage } from "@/pages/home";
import { Route, Routes } from "react-router";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};
