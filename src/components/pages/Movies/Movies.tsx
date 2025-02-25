import { Link as RouterLink } from "react-router"
import useMoviesQuery from "../../../hooks/useMoviesQuery"
import { Link, Stack } from "@mui/material"
import Slider from "../../ui/Carousel/Carousel"
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage"

const Movies = () => {
  const {
    isLoading,
    hasError,
    responseBest,
    responseCartoons,
    responseFilms,
    responsePopular,
    responseSerials,
  } = useMoviesQuery()
  console.log(responseBest.data ? responseBest.data.items : null)

  const carouselArr = [
    {
      title: 'Популярные фильмы',
      url: '/popular',
      data: responsePopular.data?.items,
    },
    {
      title: 'Лучшие фильмы',
      url: '/best',
      data: responseBest.data?.items,
    },
    {
      title: 'Фильмы',
      url: '/films',
      data: responseFilms.data?.items,
    },
    {
      title: 'Сериалы',
      url: '/serials',
      data: responseSerials.data?.items,
    },
    {
      title: 'Мультфильмы',
      url: '/cartoons',
      data: responseCartoons.data?.items,
    }
  ]

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (hasError) {
    return <ErrorMessage />
  }

  return (
      <Stack>
        {carouselArr.map(el => {
          return (
            <div key={el.title}>
              <Link 
                sx={{mt: 2, mb: 2}} 
                to={carouselArr[0].url} 
                variant="h4" 
                component={RouterLink}>
                  {el.title}
                </Link>
              {!isLoading && el.data ?
                <Slider items={el.data.map(film => {
                  return {
                    poster: film.posterUrlPreview,
                    id: film.kinopoiskId, 
                  }
                })}/> :
                <h2>No Films</h2>}
              </div>
          )
        })}
      </Stack>
  )
}

export default Movies
