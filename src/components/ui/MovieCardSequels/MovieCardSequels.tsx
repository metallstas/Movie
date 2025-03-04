import { Stack } from "@mui/material"
import { ISequelsAndPrequels } from "../../../services/kinopoiskApi"
import { Link as RouterLink } from "react-router"
import { Link } from "@mui/material"
import styles from '../MovieCard/MovieCard.module.css'

const MovieCardSquels = ({movie}: {movie: ISequelsAndPrequels}) => {
    return (
      <Stack className={styles.card}>
          <div className={styles.card__link}>
              <RouterLink to={`/movie/${movie.filmId}`}>
                  <img src={movie.posterUrlPreview} alt={movie.nameRu ? movie.nameRu : 'posterFilm'} className={styles.img}/>
              </RouterLink>
              <Link 
                sx={{width: '200px', margin: '0 auto'}} 
                component={RouterLink} 
                to={`/movie/${movie.filmId}`} 
                textAlign='center'>{movie.nameRu ? movie.nameRu : movie.nameEn}</Link>
          </div>
      </Stack>
    )
  }

  export default MovieCardSquels
