import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { Button, Stack, Typography } from "@mui/material"
import MoviesList from "../../ui/MoviesList/MoviesList"
import { ArrowBack } from "@mui/icons-material"
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage"
import MovieListSkeleton from "../../ui/MovieListSkeleton/MovieListSkeleton"
import { MOVIE_LISTS } from "../../constants"
import { useGetFilmsQuery } from "../../../services/kinopoiskApi"
import SelectMovies from "../../ui/SelectMovies/SelectMovies"
// import { useAppDispatch, useAppSelector } from "../../../hooks/hooks"
// import { selectQuery } from "../../../features/qurrentMoviSlice"

const MoviesListMain: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [page, setPage] = useState<number>(1)
  // const {gengreId, order, countries} = useAppSelector(state => state.mainPage)
  // console.log(gengreId, order, countries)
  
  const movieType = MOVIE_LISTS.find(el => el.url === location.pathname)
  const {data, error, isLoading} = useGetFilmsQuery({
    page, 
    countries: 0, 
    gengreId: movieType?.title === 'Мультфильмы' ? 18 : 1, 
    order: '', 
    type: movieType ? movieType.value : 'FILM',
  })

  useEffect(() => {
    setPage(1)
  }, [location])

  if (error) return <ErrorMessage />

  if (isLoading) return <MovieListSkeleton />

  return (
    <>
      <Stack flexDirection={'row'} sx={{mt: 2, mb: 2}}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} ></Button>
        <Typography variant="h4">{movieType?.title}</Typography>
      </Stack>
      <SelectMovies />

      {data ? <MoviesList 
        movies={data.items} 
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}/>: <h2>No Movies</h2>}
    </>
  )
}

export default MoviesListMain
