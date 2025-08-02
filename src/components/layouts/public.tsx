import { Outlet } from "react-router";
import { AppBar } from "@/components/nav";

export const PublicLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
