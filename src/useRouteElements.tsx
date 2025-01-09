import { useRoutes } from "react-router-dom";
import path from "./constants/path";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

export default function useRouteElements() {
  const routElements = useRoutes([
    {
      path: path.home,
      index: true,
      element: <Home></Home>,
    },
    {
      path: path.menu,
      index: true,
      element: <Menu></Menu>,
    },
  ]);
  return routElements;
}
