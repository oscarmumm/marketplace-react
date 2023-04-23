import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../views/NotFound";
import Home from "../views/Home";
import ShoppingCart from "../views/ShoppingCart";
import Categories from "../views/Categories";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/cart',
        element: <ShoppingCart />
      },
      {
        path: '/categories',
        element: <Categories />
      }
    ]  
  }
])