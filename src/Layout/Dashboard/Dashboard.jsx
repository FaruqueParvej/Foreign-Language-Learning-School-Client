import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const userDashItems = (
    <>
      <li>
        <NavLink to="selectedClasses">Selected Classes</NavLink>
      </li>
      <li>
        <NavLink to="enrolledClasses">Enrolled Classes</NavLink>
      </li>
      <li>
        <NavLink to="payment">Payment</NavLink>
      </li>
      <li>
        <NavLink to="payHistory">Payment History</NavLink>
      </li>
    </>
  );
  const adminDashItems = (
    <>
      <li>
        <NavLink to="manageUser">Manage User</NavLink>
      </li>
      <li>
        <NavLink to="manageClasses">Manage Classes</NavLink>
      </li>
    </>
  );
  const instructorDashItems = (
    <>
      <li>
        <NavLink to="myClasses">My Classes</NavLink>
      </li>
      <li>
        <NavLink to="addClass">Add Class</NavLink>
      </li>
    </>
  );

  return (
    <>
      <Helmet>
        <title>FLLS | Dashboard</title>
      </Helmet>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              {!isAdmin && !isInstructor && <strong>Student Dashboard</strong>}
              {isAdmin && <strong>Admin Dashboard</strong>}
              {!isAdmin && isInstructor && (
                <strong>Instructor Dashboard</strong>
              )}
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                {!isAdmin && !isInstructor && userDashItems}
                {isAdmin && adminDashItems}
                {!isAdmin && isInstructor && instructorDashItems}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200">
            {/* Sidebar content here */}
            {!isAdmin && !isInstructor && userDashItems}
            {isAdmin && adminDashItems}
            {!isAdmin && isInstructor && instructorDashItems}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
