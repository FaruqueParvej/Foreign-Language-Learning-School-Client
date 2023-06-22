import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useAdmin from "../../../../Hooks/useAdmin";
import useInstructor from "../../../../Hooks/useInstructor";
import { AuthContext } from "../../../AuthProviders/AuthProvider";

const Navbar = () => {
  const { user, logout, themeClass, toggleDarkMode } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  // console.log(isAdmin);
  // console.log(isInstructor);
  console.log(user?.photoURL);
  const handleLogOut = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", themeClass);
  }, [themeClass]);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="Instructors">Instructors</Link>
      </li>
      <li>
        <Link to="Classes">Classes</Link>
      </li>
      <li>{user && <Link to="Dashboard">Dashboard</Link>}</li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">FLLS</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <img
              className="rounded-full w-12 me-2"
              src={`${user?.photoURL}`}
              alt=""
            />
            <button onClick={handleLogOut} className="btn">
              LogOut
            </button>
          </div>
        ) : (
          <>
            <Link className="btn" to="login">
              Login
            </Link>
          </>
        )}
        <button onClick={toggleDarkMode} className="btn btn-outline ml-2">
          Theme
        </button>
      </div>
    </div>
  );
};

export default Navbar;
