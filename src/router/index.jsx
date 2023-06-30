import { useRoutes } from "react-router-dom";

import Navbar from "../layouts/Navbar";
import Login from "../modules/views/pages/login/Main";
import Register from '../modules/views/pages/register/Main'

import One from '../modules/views/pages/contents/one'
import Two from '../modules/views/pages/contents/two'
import Three from '../modules/views/pages/contents/three'
import Four from '../modules/views/pages/contents/four'
import Five from '../modules/views/pages/contents/five'
import Six from '../modules/views/pages/contents/six'
import Seven from '../modules/views/pages/contents/seven'
import Eight from '../modules/views/pages/contents/eight'
import Nine from '../modules/views/pages/contents/nine'
import Ten from '../modules/views/pages/contents/ten'
import Eleven from '../modules/views/pages/contents/eleven'
import Twelve from '../modules/views/pages/contents/twelve'
import Thirteen from '../modules/views/pages/contents/thirteen'

function Router() {
  const routes = [
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <One />,
        },
        {
          path: "/two",
          element: <Two />,
        },
        {
          path: "/",
          element: <One />,
        },
        {
          path: "/main",
          element: <Two />,
        },
        {
          path: "/three",
          element: <Three />,
        },
        {
          path: "/four",
          element: <Four />,
        },
        {
          path: "/five",
          element: <Five />,
        },
        {
          path: "/six",
          element: <Six />,
        },
        {
          path: "/seven",
          element: <Seven />,
        },
        {
          path: "/eight",
          element: <Eight />,
        },
        {
          path: "/nine",
          element: <Nine />,
        },
        {
          path: "/ten",
          element: <Ten />,
        },
        {
          path: "/eleven",
          element: <Eleven />,
        },
        {
          path: "/twelve",
          element: <Twelve />,
        },
        {
          path: "/thirteen",
          element: <Thirteen />,
        },


        // {
        //   path: "/dashboard/profile",
        //   element: <Profile />,
        // },
        // {
        //   path: "/edit-profile",
        //   element: <EditProfile />,
        // },
        // {
        //   path: "/dashboard/droits",
        //   element: <Droit />,
        // },
        // {
        //   path: "/dashboard/finances",
        //   element: <Finances />,
        // },
        // {
        //   path: "/dashboard/activites",
        //   element: <Activity />,
        // },
        // {
        //   path: "/dashboard/sanctions",
        //   element: <Sanction />,
        // },
        // {
        //   path: "/dashboard/sections",
        //   element: <Section />,
        // },
        // {
        //   path: "/dashboard/traçabilites",
        //   element: <Traçability />,
        // },
        // {
        //   path: "/biens",
        //   element: <Goods />,
        // },
        // {
        //   path: "/biens/details",
        //   element: <Details />,
        // },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    // {
    //   path: "*",
    //   element: <ErrorPage />,
    // },
  ];

  return useRoutes(routes);
}

export default Router;
