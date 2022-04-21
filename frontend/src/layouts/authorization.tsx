import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loading } from "../components/Loading";


export const AuthorizationLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <Outlet />
        </div>
      </div>
    </Suspense>
  );
}
