import useMoviesQuery from "../../../hooks/useMoviesQuery"

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
  console.log(responseBest.data)

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {hasError && <h2>Some error</h2>}
      <div>Movies</div>
    </>
  )
}

export default Movies
