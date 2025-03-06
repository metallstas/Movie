import { Pagination, Stack } from "@mui/material"
import MovieCard, { IMovie } from "../MovieCard/MovieCard"
import { useAppDispatch } from "../../../hooks/hooks"
import { selectQuery } from "../../../features/qurrentMoviSlice"

interface IMoviesList {
    movies: IMovie[],
    page: number,
    totalPages: number
}

const MoviesList = ({movies, page, totalPages}: IMoviesList) => {
  const dispatch = useAppDispatch()
  return (
    <>
      <Stack direction="row" justifyContent='center' flexWrap='wrap' >
          {movies.map((movie: IMovie) => <MovieCard key={movie.kinopoiskId} movie={movie}/>)}
      </Stack>
      <Pagination 
        sx={{margin: '0 auto'}} 
        count={totalPages} 
        color="primary" 
        onChange={(_, value) => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
          dispatch(selectQuery({page: value}))
        }}
        variant="outlined"
        shape="rounded"
        page={page}/>
    </>
  )
}

export default MoviesList
