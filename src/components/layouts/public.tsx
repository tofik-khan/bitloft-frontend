import { Outlet } from "react-router";
import { AppBar, Footer } from "@/components/nav";

export const PublicLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <Footer />
    </>
  );
};
