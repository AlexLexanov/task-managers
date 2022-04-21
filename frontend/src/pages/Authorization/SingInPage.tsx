import { useForm } from "react-hook-form";
import { SING_IN } from "../../apollo/models/users";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
};

const SchemaSingIn = yup.object().shape({
  email: yup.string().email().required("Must be a valid email"),
  password: yup.string().required(),
});

export default () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(SchemaSingIn),
  });

  const [mutateFunction, { loading, error }] = useMutation(SING_IN, {
    onCompleted({ SingIn }) {
      const { access_token, refresh_token } = SingIn;
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      navigate("/");
    },
  });

  return (
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleSubmit((variables) => mutateFunction({ variables }))}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
            <p className="text-center text-red-500 text-xs h-5 p-2">
              {errors.email ? errors.email.message : ""}{" "}
            </p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              className="input input-bordered"
            />
            <p className="text-center text-red-500 text-xs h-5 p-2">
              {errors.password ? errors.password.message : ""}
            </p>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className={`btn border-0 text-white bg-blue-500 hover:border-2 hover:border-blue-500 hover:text-blue-500 ${loading ? "loading" : ""}`}
            >
              Login
            </button>
            <p className="text-center text-red-500 text-xs h-5 p-2">
ъ              {error ? error.message : ""}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
