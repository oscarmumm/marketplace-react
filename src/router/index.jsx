import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import NotFound from "../views/NotFound";
import Home from "../views/Home";
import ShoppingCart from "../views/ShoppingCart";
import Categories from "../views/Categories";
import Category from "../views/Category";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Search from "../views/Search";

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
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/search/:product',
        element: <Search />,
      },
      {
        path: '/category/:id',
        element: <Category />,
      },
    ]  
  }
])