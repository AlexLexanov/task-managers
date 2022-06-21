import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { DefaultLayout } from "./layouts/default";
import { AuthorizationLayout } from "./layouts/authorization";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ProjectByIdPage } from "./pages/Projects/ProjectByIdPage";
import { ProjectsPage } from "./pages/Projects/ProjectsPage";

const HomePageLazy = lazy(() => import("./pages/HomePage"));
const SignInPageLazy = lazy(() => import("./pages/Authorization/SignInPage"));
const SignUpPageLazy = lazy(() => import("./pages/Authorization/SignUpPage"));
const ProjectCreatePageLazy = lazy(
  () => import("./pages/Projects/ProjectCreatePage")
);

export const Routers = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute
            toRedirect="/authorization"
            children={<DefaultLayout />}
          />
        }
      >
        <Route index element={<HomePageLazy />} />
        <Route path="/projects">
          <Route index element={<ProjectsPage />} />
          <Route path="/projects/:projectId" element={<ProjectByIdPage />} />
          <Route path="/projects/create" element={<ProjectCreatePageLazy />} />
        </Route>
      </Route>
      <Route path="/authorization" element={<AuthorizationLayout />}>
        <Route index element={<SignInPageLazy />} />
        <Route path="sign_up" element={<SignUpPageLazy />} />
      </Route>
    </Routes>
  );
};
