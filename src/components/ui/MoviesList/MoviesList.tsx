import { Pagination, Stack } from "@mui/material"
import MovieCard, { IMovie } from "../MovieCard/MovieCard"

interface IMoviesList {
    movies: IMovie[],
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    totalPages: number
}

const MoviesList = ({movies, page, setPage, totalPages}: IMoviesList) => {

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
          setPage(value)
        }}
        variant="outlined"
        shape="rounded"
        page={page}/>
    </>
  )
}

export default MoviesList
