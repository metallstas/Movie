import { useState } from "react"
import { useGetFilmsTopQuery } from "../../../services/kinopoiskApi"
import { TOP_LISTS } from "../../constants"
import { useLocation } from "react-router"
import { Button, Stack, Typography } from "@mui/material"
import MoviesList from "../../ui/MoviesList/MoviesList"

const MoviesListTop: React.FC = () => {
  const location = useLocation()
  const [page, setPage] = useState<number>(1)

  const collection = TOP_LISTS.find(el => el.url === location.pathname)

  const {data, error, isLoading} = useGetFilmsTopQuery({type: collection ? collection.value : '', page})

  if (error) return <h2>Some error</h2>

  if (isLoading) return <h2>Loading...</h2>

  return (
    <>
      <Stack flexDirection={'row'}>
        <Button>Назад</Button>
        <Typography>{collection?.title}</Typography>
      </Stack>
      <MoviesList 
        movies={data.items} 
        totalPages={data.totalPages}
        page={data.page}
        setPage={setPage}/>
    </>
  )
}

export default MoviesListTop
