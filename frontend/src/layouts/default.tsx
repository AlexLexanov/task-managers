import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/Loading";
import { Navbar } from "../components/Navigation/Navbar";
import { SideBar } from "../components/Navigation/SideBar";

export const DefaultLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col w-full space-x-8 px-8 lg:flex-row bg-sky-100 h-screen">
        <div className="grid flex-grow basis-auto rounded-box place-items-center">
          <SideBar />
        </div>
        <div className="grid flex-grow basis-full rounded-box place-items-center">
          <div className="card w-full h-[calc(100vh-4rem)] shadow-md bg-white">
            <Outlet />
          </div>
        </div>
      </div>
    </Suspense>
  );
};
