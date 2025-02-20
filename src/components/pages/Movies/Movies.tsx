import useMoviesQuery from "../../../hooks/useMoviesQuery"
import Slider from "../../ui/Carousel/Carousel"

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

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (hasError) {
    return <h2>Some error</h2>
  }

  return (
    <>
      {/* Todo add skeleton */}
      {/* todo add error component */}
      {!isLoading && responseBest.data ?
        <Slider items={responseBest.data?.items.map(el => el.posterUrlPreview)}/> :
        <h2>No Films</h2>
      }
    </>
  )
}

export default Movies
