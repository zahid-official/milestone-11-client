import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <h1>Home Page</h1>,
      },
      {
        path: "/route2",
        element: <h1>Route2 Page</h1>,
      },
      {
        path: "/route3",
        element: <h1>Route3 Page</h1>,
      },
      {
        path: "/route4",
        element: <h1>Route4 Page</h1>,
      },
      {
        path: "/route5",
        element: <h1>Route5 Page</h1>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

export default Routes;
