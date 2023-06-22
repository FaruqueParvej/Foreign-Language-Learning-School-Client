import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Main from "../Layout/Main";
import Classes from "../Layout/Pages/CLasses/Classes";
import AddClass from "../Layout/Pages/Dashboard/AddClass/AddClass";

import ManageClasses from "../Layout/Pages/Dashboard/AdminHome/ManageClasses";
import ManageUser from "../Layout/Pages/Dashboard/AdminHome/ManageUser";
import MyClasses from "../Layout/Pages/Dashboard/Instructor/MyClasses";
import Home from "../Layout/Pages/Home/Home/Home";
import Instructors from "../Layout/Pages/Instructors/Instructors";
import Login from "../Layout/Pages/Login/Login";
import Register from "../Layout/Pages/Register/Register";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/Classes",
        element: <Classes></Classes>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/Dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "selectedClasses",
        element: <div>my classes</div>,
      },
      {
        path: "enrolledClasses",
        element: <div>enrolledClasses</div>,
      },
      {
        path: "payment",
        element: <div>payment</div>,
      },
      {
        path: "payHistory",
        element: <div>History</div>,
      },
      {
        path: "manageUser",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "addClass",
        element: <AddClass></AddClass>,
      },
      {
        path: "myClasses",
        element: <MyClasses></MyClasses>,
      },
      // {
      //   path: "manageitems",
      //   element: (
      //     <AdminRoute>
      //       <ManageItems></ManageItems>
      //     </AdminRoute>
      //   ),
      // },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
