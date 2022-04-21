import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { getAuthUser, Logout } from "../../apollo/models/users";

export const UserMenu = () => {
  
  const navigator = useNavigate()
  const { loading, error, data } = useQuery(getAuthUser);
  const [mutateFunction] = useMutation(Logout);

  const LogoutUser = (e: MouseEvent) => {
    e.preventDefault();
    mutateFunction();
    localStorage.clear();
    navigator('/authorization')
  };

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
      >
        <li className="hover:bg-slate-100">
          <a>Profile</a>
        </li>
        <li className="hover:bg-slate-100">
          <a>Settings</a>
        </li>
        <li className="hover:bg-slate-100">
          <a onClick={LogoutUser}>Logout</a>
        </li>
      </ul>
    </div>
  );
};
