import { createBrowserRouter } from "react-router-dom";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Main from "../Layouts/Main/Main";
import TravelDetails from "../Pages/TravelDetails/TravelDetails";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/travel-details/:id",
        element: <TravelDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/travel-details/${params.id}`),
      },
    ],
  },
  // {
  //   path: "/travel-details",
  //   element: <TravelDetails />,
  //   children: [
  //     {
  //       path: "/travel-details/:id",
  //       element: <Contact />,
  //       loader: ({ params }) =>
  //         fetch(`http://localhost:5000/travel-details/${params.id}`),
  //     },
  //   ],
  // },
]);

export default router;
