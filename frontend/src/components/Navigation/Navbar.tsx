import { Link, NavLink } from "react-router-dom";
import { Search } from "./Search";
import { UserMenu } from "./UserMenu";
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className="head-navbar">
      <div>
        <Link to="/" className="btn btn-ghost normal-case text-3xl">
          Jira
        </Link>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link to="/project">Project</Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2 z-20">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="menu menu-horizontal p-0">
          <li tabIndex={0}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-blue-500 text-white" : ""
              }
              to="/projects"
            >
              Projects
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul className="p-2 bg-white z-20 shadow rounded-box">
              <li className="hover:bg-slate-100 w-96">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-blue-500 text-white" : ""
                  }
                  to="/projects/1"
                >
                  Submenu 1
                </NavLink>
              </li>
              <li className="hover:bg-slate-100">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-blue-500 text-white" : ""
                  }
                  to="/projects/2"
                >
                  Submenu 2
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div>
        <Search />
        <UserMenu />
      </div>
    </div>
  );
};
