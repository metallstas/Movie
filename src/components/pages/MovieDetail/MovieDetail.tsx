import { useParams } from "react-router"
import { useGetFilmByIdQuery, useGetSequelsAndPrequelsQuery, useGetStuffByFilmQuery } from "../../../services/kinopoiskApi"
import style from './MovieDetail.module.css'
import { Box, CircularProgress } from "@mui/material"
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage"

const MovieDetail = () => {
  const {id} = useParams()
  const responseFilm = useGetFilmByIdQuery({id: id ? +id : 0})
  const responseSequels = useGetSequelsAndPrequelsQuery({id: id ? +id : 0})
  const responseStuff = useGetStuffByFilmQuery({id: id ? +id : 0})
  // console.log(responseFilm, responseSequels, responseStuff)
  // console.log(responseSequels)
  // console.log(id ? +id : '')

  if (responseFilm.isLoading ||
     responseSequels.isLoading || 
     responseStuff.isLoading) {
      return <Box sx={{margin: 'auto'}} display={'flex'} justifyContent={'center'}><CircularProgress size={'8rem'} /></Box>
  }

  if (responseFilm.error ||
    responseStuff.error) {
     return <ErrorMessage />
 }

  return (
    <section className={style.container}>
        <div className={style.main_section}>
            <div className={style.poster}>
                <img className={style.img} src={responseFilm.data.posterUrl} alt={responseFilm.data.nameRu} />
            </div>
            <div className={style.info}>
                <div className={style.navigate}>
                    <button>back</button>
                    <h3>title</h3>
                </div>
                <div className={style.info_year}>
                    <p style={{width: '50%', textAlign: 'left'}}>Год</p>
                    <p style={{width: '50%', textAlign: 'left'}}>2013</p>
                </div>
            </div>
            <div className={style.actors}>
                <p>rating</p>
            </div>
        </div>
        <div></div>
        <div></div>
        <div></div>

    </section>
  )
}

export default MovieDetail
