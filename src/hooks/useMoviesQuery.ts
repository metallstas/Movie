import { useGetFilmsQuery, useGetFilmsTopQuery } from "../services/kinopoiskApi"
import { TOP_LISTS } from "../components/constants"
import { useAppSelector } from "./hooks"

const useMoviesQuery = () => {
  const {page, countries, order, year} = useAppSelector(state => state.mainPage)
  const responsePopular = useGetFilmsTopQuery({
    type: TOP_LISTS[0].value,
    page,
  })

  const responseBest = useGetFilmsTopQuery({
    type: TOP_LISTS[1].value,
    page,
  })

  const responseFilms = useGetFilmsQuery({
    page, 
    countries, 
    gengreId: 1, 
    order, 
    year,
    type: 'FILM',
  })

  const responseSerials = useGetFilmsQuery({
    page, 
    countries, 
    gengreId: 1, 
    order, 
    year,
    type: 'TV_SERIES',
  })

  const responseCartoons = useGetFilmsQuery({
    page, 
    countries, 
    gengreId: 18, 
    order, 
    year,
    type: 'FILM',
  })

  const isLoading = 
  responsePopular.isLoading || 
  responseBest.isLoading || 
  responseFilms.isLoading || 
  responseSerials.isLoading || 
  responseCartoons.isLoading

  const hasError = 
  responsePopular.error || 
  responseBest.error || 
  responseFilms.error || 
  responseSerials.error || 
  responseCartoons.error

  return {
    isLoading,
    hasError,
    responseBest,
    responseCartoons,
    responseFilms,
    responsePopular,
    responseSerials,
  }
}

export default useMoviesQuery
