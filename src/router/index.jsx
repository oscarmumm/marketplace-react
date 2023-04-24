import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../views/NotFound";
import Home from "../views/Home";
import ShoppingCart from "../views/ShoppingCart";
import Categories from "../views/Categories";
import Category from "../views/Category";

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
        element: <Categories />,
      },
      {
        path: '/category/:id',
        element: <Category />,
      },
    ]  
  }
])