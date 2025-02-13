import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"
import Movies from "./pages/Movies/Movies"
import MoviesDetail from "./pages/MovieDetail/MovieDetail"
import ActorDetail from "./pages/ActorDitale/ActorDetail"
import { MOVIE_LISTS, TOP_LISTS } from "./constants"
import MoviesListTop from "./pages/MoviesListTop/MoviesListTop"
import MoviesListMain from "./pages/MoviesListMain/MoviesListMain"

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
        ...TOP_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListTop />
        })),
        ...MOVIE_LISTS.map(el => ({
          path: el.url,
          element: <MoviesListMain />
        })),
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
