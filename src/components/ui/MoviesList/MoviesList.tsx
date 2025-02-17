import { Stack } from "@mui/material"
import { Link } from "react-router"

interface IMoviesList {
    movies: [],
    page: number,
    setPage: (prevNum: number) => void,
    totalPages: number
}

const MoviesList = ({movies, page, setPage, totalPages}: IMoviesList) => {
    console.log(page)
  return (
    <>
      <Stack>
          <Stack>
            <Link to={`movie/${movie.kinopoiskId}`}>
            </Link>
          </Stack>
      </Stack>
    </>
  )
}

export default MoviesList
