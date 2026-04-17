import { createBrowserRouter } from "react-router";
import  RootLayout from "../Layout/RootLayout/RootLayout";
import Home from "../AllPages/Home/Home";
import Stats from "../AllPages/Stats/Stats";
import Timeline from "../AllPages/Timeline/Timeline";
import NotFound from "../AllPages/error/NotFound";
import FriendDetails from "../AllPages/Frineds/FriendDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
        {
          index:true,
          element:<Home/>
        },
        {
          path:"/stats",
          element:<Stats/>
        },
        {
            path:"/timeline",
          element:<Timeline/>
        }
        ,
        {
            path:"/friendDetails/:paramsId",
            element:<FriendDetails/>
        }
    ],
     errorElement: 
       <NotFound/>
  },
]);