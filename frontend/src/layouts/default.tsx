import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navigation/Navbar";

export const DefaultLayout = () => {

  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Outlet />
    </Suspense>
  );
};
