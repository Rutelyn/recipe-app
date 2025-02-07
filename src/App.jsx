
import Categories from "./pages/Categories";
import Recipes from "./pages/Recipes";
import Welcome from "./pages/Welcome";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css"
import Favourites from "./pages/Favourites";

const router = createBrowserRouter(
  [
    {path: '/', element: <Welcome/>},
    {path:'/recipes', element: <Recipes/>},
    {path: '/categories', element: <Categories/>},
    {path: '/favourites', element: <Favourites/>},
    {}
  ]
);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App


