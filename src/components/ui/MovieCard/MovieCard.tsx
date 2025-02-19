import { Box, Link, Rating, Stack, Tooltip } from "@mui/material"
import { Link as RouterLink } from "react-router"
import styles from './MovieCard.module.css'

export interface IMovie {
    countries: [{country: string}],
    coverUrl: string,
    description: string,
    genres:[{genre: string}],
    imdbId: string,
    kinopoiskId: number,
    logoUrl: null | string,
    nameEn:null | string,
    nameOriginal: null | string,
    nameRu: null | string,
    posterUrl:string,
    posterUrlPreview: string,
    ratingAgeLimits: string,
    ratingImdb: null | string,
    ratingKinopoisk: number,
    type: string,
    year: number,
}

const MovieCard = ({movie}: {movie: IMovie}) => {
  return (
    <Stack className={styles.card}>
        <div className={styles.card__link}>
            <RouterLink to={`movie/${movie.kinopoiskId}`}>
                <img src={movie.posterUrlPreview} alt={movie.nameRu ? movie.nameRu : 'posterFilm'} className={styles.img}/>
            </RouterLink>
            <Link sx={{width: '200px', margin: '0 auto'}} component={RouterLink} to={`movie/${movie.kinopoiskId}`} textAlign='center'>{movie.nameRu ? movie.nameRu : movie.nameEn}</Link>
        </div>
        {movie.ratingKinopoisk && (
            <Tooltip sx={{margin: '0 auto'}} title={`${movie.ratingKinopoisk} / 10`}>
                <Box>
                    <Rating name="read-only" value={movie.ratingKinopoisk / 2 } readOnly precision={0.1}/>    
                </Box>
            </Tooltip>
            ) }
    </Stack>
  )
}

export default MovieCard
