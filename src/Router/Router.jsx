import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Authentication/Login/Login";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
      ],
   },
   {
      path: "/login",
      element: <Login />,
   },
]);

export default router;
