import { createBrowserRouter } from "react-router-dom";
import Home from "../views/Home";
import BaseLayout from "../components/BaseLayout";

const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
