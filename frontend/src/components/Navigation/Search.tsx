export const Search = () => {
  return (
    <div className="dropdown dropdown-end mr-8">
      <label tabIndex={0} className="form-control">
        <input
          type="text"
          placeholder="Search"
          className="input w-56 input-bordered transition-[width] focus:w-96 delay-300 duration-500 ease-in-out"
        />
      </label>
      <ul
        tabIndex={0}
        className="mt-3 p-2 shadow menu menu-compact dropdown-content delay-700 bg-base-100 rounded-box w-96"
      >
        <li className="hover:bg-slate-100">
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li className="hover:bg-slate-100">
          <a>Settings</a>
        </li>
        <li className="hover:bg-slate-100">
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};
