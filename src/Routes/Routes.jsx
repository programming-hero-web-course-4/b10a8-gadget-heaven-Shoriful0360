
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Layout from "../Component/MainLayout/Layout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
    },
  ]);

  export default(router)