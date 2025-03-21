import { Link, useNavigate, useParams } from "react-router"
import { useGetFilmByIdQuery, useGetSequelsAndPrequelsQuery, useGetStuffByFilmQuery } from "../../../services/kinopoiskApi"
import style from './MovieDetail.module.css'
import { Box, Button, CircularProgress, Rating, useMediaQuery } from "@mui/material"
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage"
import { ArrowBack, Language, Movie } from "@mui/icons-material"
import MovieCardSquels from "../../ui/MovieCardSequels/MovieCardSequels"
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import VideoPlayer from "../../ui/VideoPlayer/VideoPlayer"

const MovieDetail = () => {
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width: 630px)')
    const {id} = useParams()
    const responseFilm = useGetFilmByIdQuery({id: id ? +id : 0})
    const responseSequels = useGetSequelsAndPrequelsQuery({id: id ? +id : 0})
    const responseStuff = useGetStuffByFilmQuery({id: id ? +id : 0})

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
                <div className={style.wrapper}>
                    <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} ></Button>
                    <h3>{responseFilm.data.nameRu ? responseFilm.data.nameRu : responseFilm.data.nameEn}</h3>
                </div>
                <div className={style.wrapper}>
                    <p className={style.item}>Год</p>
                    <p className={style.item}>{responseFilm.data.year}</p>
                </div>
                <div className={style.wrapper}>
                    <div className={style.item}>
                        <p>Страна</p>
                    </div>
                    <div className={style.item}>
                        {responseFilm.data?.countries.map((el: {country: string}) => <p key={el.country}>{el.country}</p>)}
                    </div>
                </div>
                <div className={style.wrapper}>
                    <div className={style.item}>
                        <p>Жанр</p>
                    </div>
                    <div className={style.item}>
                        {responseFilm.data.genres.map((el: {genre: string}) => <p key={el.genre}>{el.genre}</p>)}
                    </div>
                </div>
                <div className={style.wrapper}>
                    <p className={style.item}>Режиссер</p>
                    <div className={style.item}>
                    {responseStuff.data?.filter(el => el.professionKey === 'DIRECTOR')
                        .slice(0, 4)
                        .map(el => <p key={el.staffId}>{el.nameRu}</p>)}
                    </div>
                </div>
                <div className={style.wrapper}>
                    <p className={style.item}>Время</p>
                    <p className={style.item}>
                        {responseFilm.data.filmLength ?
                         `${responseFilm.data.filmLength} мин` : 
                        <AllInclusiveIcon />}</p>
                </div>

                <div>
                    <p>Описание</p>
                    <p>{responseFilm.data.description ? responseFilm.data.description : 'Нет описания'}</p>
                </div>
            </div>

            <div className={style.actors}>
                <div>
                    <Box>
                        <Rating name="read-only" value={responseFilm.data.ratingKinopoisk / 2 } readOnly precision={0.1}/>  
                        {responseFilm.data.ratingKinopoisk ? <p style={{marginBottom: '15px'}}>{`${responseFilm.data.ratingKinopoisk} / 10`} </p> : <p style={{marginBottom: '15px'}}>Нет оценок</p>}  
                    </Box>
                </div>
                <div className={style.actors__list}>
                    <p>В главных ролях: </p>
                    {responseStuff.data?.filter((el) => el.professionKey === 'ACTOR')
                        .slice(0, 10)
                        .map(el => isMobile ? 
                        <Link 
                            to={`/actor/${el.staffId}`} 
                            className={style.actor} 
                            key={el.staffId}>
                                {el.nameRu},&nbsp;
                            </Link> : 
                        <Link 
                            to={`/actor/${el.staffId}`} 
                            className={style.actor} 
                            key={el.staffId}>
                                {el.nameRu}
                        </Link> )}
                </div>
            </div>
            
        </div>
        <div className={style.block}>
            <Button 
                target="_blank" 
                href={responseFilm.data.webUrl} 
                size={"small"} 
                variant="outlined"
                endIcon={<Language />}>Кинопоиск</Button>
            <Button 
            target="_blank"
            href={`https://www.imdb.com/title/${responseFilm.data.imdbId}`}
            size={"small"} 
            variant="outlined"
            endIcon={<Movie />}>IMDB</Button>
        </div>
        <div className={style.block}>
            <VideoPlayer />
        </div>
        <div className={`${style.block} ${style.sequels}`}>
            {!responseSequels.error ? <p>Сиквелы и приквелы</p> : null}
            <div className={style.cards}>
                {responseSequels.data?.map(el => <MovieCardSquels key={el.filmId} movie={el}/>)}
            </div>
        </div>

    </section>
  )
}

export default MovieDetail
