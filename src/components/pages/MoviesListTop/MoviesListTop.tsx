import { useEffect, useState } from "react"
import { useGetFilmsTopQuery } from "../../../services/kinopoiskApi"
import { TOP_LISTS } from "../../constants"
import { useLocation, useNavigate } from "react-router"
import { Button, Stack, Typography } from "@mui/material"
import MoviesList from "../../ui/MoviesList/MoviesList"
import { ArrowBack } from "@mui/icons-material"
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage"
import MovieListSkeleton from "../../ui/MovieListSkeleton/MovieListSkeleton"

const MoviesListTop: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [page, setPage] = useState<number>(1)

  useEffect(() => {
    setPage(1)
  }, [location])

  const collection = TOP_LISTS.find(el => el.url === location.pathname)

  const {data, error, isLoading} = useGetFilmsTopQuery({type: collection ? collection.value : '', page})

  if (error) return <ErrorMessage />

  if (isLoading) return <MovieListSkeleton />

  return (
    <>
      <Stack flexDirection={'row'} sx={{mt: 2, mb: 2}}>
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} ></Button>
        <Typography variant="h4">{collection?.title}</Typography>
      </Stack>
      {data ? <MoviesList 
        movies={data.items} 
        totalPages={data.totalPages}
        page={page}
        setPage={setPage}/>: <h2>No Movies</h2>}
    </>
  )
}

export default MoviesListTop
