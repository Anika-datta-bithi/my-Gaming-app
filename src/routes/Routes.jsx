import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Hero from "../components/Hero";

// Use ( ) to call the function, then [ ] for the array of routes inside
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children:[
        {
            path:'/hero',
            element:<Hero/>
        }
    ]
  }
]);

export default router;