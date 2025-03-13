import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./Layout"
import Movies from "./pages/Movies/Movies"
import MovieDetail from "./pages/MovieDetail/MovieDetail"
import ActorDetail from "./pages/ActorDitale/ActorDetail"
import { MOVIE_LISTS, TOP_LISTS } from "./constants"
import MoviesListTop from "./pages/MoviesListTop/MoviesListTop"
import MoviesListMain from "./pages/MoviesListMain/MoviesListMain"

function App() {
  // interface iA {
  //   a: number,
  //   b: number,
  //   id: number
  // }
  // const a: iA[] = [{a: 1, b: 2, id: 113}, {a: 1, b: 2, id: 113}, {a: 4, b: 2, id: 222}]
  // const arr = a.reduce((acc, cur) => {
 
  //     const id = acc.find(el => el.id === cur.id)

  //     if (id) {
  //       return acc
  //     }

  //     return [...acc, cur]
    
    
  // },[] as iA[])

  //  console.log('result', arr)

  
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
          element: <MovieDetail/>
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
