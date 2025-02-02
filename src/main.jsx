import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayOut from "./assets/MainLayOut";
import Home from "./assets/Home/Home";
import AddCraftItem from "./assets/AddCraftItem/AddCraftItem";
import AllArtCraftItem from "./assets/All_PAINTING_DRAWING_ITEM/AllPaintingAndDrawing";
import ViewDetails from "./assets/ViewDetails/ViewDetails";
import MyArtAndCraft from "./assets/My_Painting_drawing/MyPaintingAndDrawing";
import MyPaintingAndDrawing from "./assets/My_Painting_drawing/MyPaintingAndDrawing";
import AllPaintingAndDrawing from "./assets/All_PAINTING_DRAWING_ITEM/AllPaintingAndDrawing";
import Register from "./assets/Register";
import LogIn from "./assets/LogIn";
import Update from "./assets/Update/Update";
import PrivateRoute from "./assets/PrivateRoute";
import NotFound from "./assets/NotFound/NotFound";





const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      { path: "/",
      element: <Home></Home>,
      loader:()=>fetch('https://drawing-painting-server.vercel.app/data')
    },
    { path: "/AddCraftItem",
    element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
  },
  { path: "/AllPaintingAndDrawing",
  element: <AllPaintingAndDrawing></AllPaintingAndDrawing>
},
{ path: "/ViewDetails/:id",
element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
loader:({params})=>fetch(`https://drawing-painting-server.vercel.app/data/${params.id}`)

},
{ path: "/MyPaintingAndDrawing",
element: <PrivateRoute><MyPaintingAndDrawing></MyPaintingAndDrawing></PrivateRoute>,
loader:()=>fetch('https://drawing-painting-server.vercel.app/data')
},
{ path: "/LogIn",
element: <LogIn></LogIn>
},
{ path:"/Register",
element: <Register></Register>
},
{ path:"/Update/:id",
element: <Update></Update>,
loader:({params})=>fetch(`https://drawing-painting-server.vercel.app/data/${params.id}`)

},
{ path:"/NotFound",
element:<NotFound></NotFound>


},

    
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  
   <RouterProvider router={router} />
  </React.StrictMode>
);