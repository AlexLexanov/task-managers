import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/default";
import { AuthorizationLayout } from "./layouts/authorization";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ProjectPage } from "./pages/ProjectPage";

const HomePageLazy = lazy(() => import("./pages/HomePage"));
const SignInPageLazy = lazy(() => import("./pages/Authorization/SignInPage"));
const SignUpPageLazy = lazy(() => import("./pages/Authorization/SignUpPage"));


export const Routers = () => {  

  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute toRedirect="/authorization" children={ <DefaultLayout /> } /> }>
        <Route index element={<HomePageLazy />} />
        <Route path="/project" element={ <ProjectPage /> } />
      </Route>
      <Route path="/authorization" element={<AuthorizationLayout />}>
        <Route index element={<SignInPageLazy />} />
        <Route path="sign_up" element={<SignUpPageLazy />} />
      </Route>
    </Routes>
  );
};
