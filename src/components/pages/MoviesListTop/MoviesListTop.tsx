import { useState } from "react"
import { useGetFilmsTopQuery } from "../../../services/kinopoiskApi"
import { TOP_LISTS } from "../../constants"
import { useLocation } from "react-router"

const MoviesListTop: React.FC = () => {
  const location = useLocation()
  const [page, setPage] = useState<number>(1)

  const movieType = () => {
    const type = TOP_LISTS.find(el => el.url === location.pathname)
    if (type) return type.value
    else return ''
  }
  const {data, error, isLoading} = useGetFilmsTopQuery({type: movieType(), page})

  return (
    <div>MoviesListTop</div>
  )
}

export default MoviesListTop
