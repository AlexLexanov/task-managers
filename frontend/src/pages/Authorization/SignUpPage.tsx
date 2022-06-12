import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SING_UP } from "../../apollo/models/users";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

const SchemaSingIn = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
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

  const [mutateFunction, { loading, error }] = useMutation(SING_UP, {
    onCompleted({ SingUp }) {
      const { access_token, refresh_token } = SingUp;
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("refreshToken", refresh_token);
      navigate("/");
    },
  });

  return (
    <form onSubmit={handleSubmit((variables) => mutateFunction({ variables }))}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Firstname</span>
        </label>
        <input
          {...register("firstname")}
          type="text"
          placeholder="firstname"
          className="input input-bordered"
        />
        <p className="text-center text-red-500 text-xs h-5 p-2">
          {errors.firstname ? errors.firstname.message : ""}
        </p>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Lastname</span>
        </label>
        <input
          {...register("lastname")}
          type="text"
          placeholder="lastname"
          className="input input-bordered"
        />
        <p className="text-center text-red-500 text-xs h-5 p-2">
          {errors.lastname ? errors.lastname.message : ""}
        </p>
      </div>
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
          {errors.email ? errors.email.message : ""}
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
          className={`btn border-0 text-white bg-blue-500 hover:border-2 hover:border-blue-500 hover:text-blue-500 ${
            loading ? "loading" : ""
          }`}
        >
          Sing in
        </button>
      </div>
      <p className="text-center text-red-500 text-xs h-5 p-2">
        {error ? error.message : ""}
      </p>
    </form>
  );
};
