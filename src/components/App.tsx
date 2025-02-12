import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"
import Movies from "./pages/Movies/Movies"
import MoviesDetail from "./pages/MovieDetail/MovieDetail"
import ActorDetail from "./pages/ActorDitale/ActorDetail"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Movies/>
        },
        {
          path: '/movie/:id',
          element: <MoviesDetail/>
        },
        {
          path: '/actor/:id',
          element: <ActorDetail/>
        }
      ]
    },
  ])
  
  return <RouterProvider router={router}/>
}

export default App
