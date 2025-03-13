import { Link, useNavigate, useParams } from "react-router"
import { IActorFilms, useGetActorByIdQuery } from "../../../services/kinopoiskApi"

import styles from './ActorDetail.module.css'
import { ArrowBack } from "@mui/icons-material"
import { Button } from "@mui/material"

const ActorDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    
    const {data, error, isLoading} = useGetActorByIdQuery({id: id ? +id : 0})
    console.log(data, error, isLoading)

    const filmsUnic = data?.films.reduce((acc, curr) => {
        const id = acc.find(el => el.filmId === curr.filmId)
        if (id) {
            return acc
        }
        return [...acc, curr]
    }, [] as IActorFilms[])

    console.log(filmsUnic)

    return (
        <section className={styles.actor_detail}>
            <div className={styles.actor_info}>
                <img className={styles.actor_img} src={data?.posterUrl} alt="фото актера" />
                <div className={styles.wrapper_info}>
                    <div className={styles.actor_name}>
                        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} ></Button>
                        <div>
                            <h3>{data?.nameRu}</h3>
                            <p>{data?.nameEn}</p>
                        </div>
                    </div>
                    <div>
                        <h4 className={styles.title_about}>Об актере</h4>
                        <div className={styles.about_actor}>
                            <p>Карьера</p>
                            <p>{data?.profession}</p>
                        </div>
                        <div className={styles.about_actor}>
                            <p>Рост</p>
                            <p>{`${data?.growth} см`}</p>
                        </div>
                        <div className={styles.about_actor}>
                            <p>Дата рождения</p>
                            <p>{`${data?.birthday} ${data?.age} лет`}</p>
                        </div>
                        <div className={styles.about_actor}>
                            <p>Всего фильмов</p>
                            <p>{data?.films.length}</p>
                        </div>
                        
                    </div>
                    <div className={styles.facts}>
                        <p>Факты</p>
                        {data?.facts}
                    </div>
                </div>
            </div>
            <div>
                <p>Фильмы</p>
                <ul>
                    {filmsUnic?.map((film, index) => { 
                        return (
                            <Link to={`/movie/${film.filmId}`} key={film.filmId + `${index}`} className={styles.film}> 
                                <p style={{width: '40px'}}>{index + 1}</p>
                                <p 
                                    className={styles.film_name} 
                                    >
                                        {film.nameRu ? film.nameRu : film.nameEn}
                                </p>
                                <p>{film.rating}</p>
                            </Link>
                        )}
                    )}
                </ul>
                
            </div>
        </section>
    )
}
  
export default ActorDetail
  