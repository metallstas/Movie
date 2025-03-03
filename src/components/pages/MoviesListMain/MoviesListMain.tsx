import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router"
import { Button, Stack, Typography } from "@mui/material"
import { ArrowBack } from "@mui/icons-material"
import { MOVIE_LISTS } from "../../constants"
import { useGetFilmsQuery } from "../../../services/kinopoiskApi"
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
import { resetQuery, selectQuery } from "../../../features/qurrentMoviSlice"

import MoviesList from "../../ui/MoviesList/MoviesList"
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage"
import MovieListSkeleton from "../../ui/MovieListSkeleton/MovieListSkeleton"
import SelectMovies from "../../ui/SelectMovies/SelectMovies"


const MoviesListMain: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const initialState = (path: string) => {
    switch (path) {
      case '/cartoons':
        return {
          genreId: 18, 
          type: 'FILM'
        }
      case '/serials': 
        return {
          type: 'TV_SERIES'
        }
    }
  }

  const {genreId, order, country, type, year, page} = useAppSelector(state => state.mainPage)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    dispatch(resetQuery(null))
    dispatch(selectQuery(initialState(location.pathname)))
  }, [location])
  
  const movieType = MOVIE_LISTS.find(el => el.url === location.pathname)
  const {data, error, isLoading} = useGetFilmsQuery({
    page, 
    country, 
    genreId,
    order, 
    type,
    year,
  })

  if (error) return <ErrorMessage />

  if (isLoading) return <MovieListSkeleton />

  return (
    <>
      <Stack flexDirection={'row'} sx={{mt: 2, mb: 2}}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} ></Button>
        <Typography variant="h4">{movieType?.title}</Typography>
      </Stack>
      <SelectMovies initialState={initialState(location.pathname)}/>

      {data ? <MoviesList 
        movies={data.items} 
        totalPages={data.totalPages}
        page={page}/>: <h2>No Movies</h2>}
    </>
  )
}

export default MoviesListMain
