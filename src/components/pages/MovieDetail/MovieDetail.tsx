import { useLocation, useParams } from "react-router"
import { useGetFilmByIdQuery } from "../../../services/kinopoiskApi"
import style from './MovieDetail.module.css'
import Carus from "./Carus"

const MovieDetail = () => {
  // const {id} = useParams()
  // const res = useGetFilmByIdQuery({id: id ? +id : 0})
  // console.log(res)
  // console.log(id ? +id : '')


  return (
    <Carus slidesToShow={2} slidesToScroll={2}>
      <div className={`${style.carousel__item} ${style.item_1}`}>item 1</div>
      <div className={`${style.carousel__item} ${style.item_2}`}>item 2</div>
      <div className={`${style.carousel__item} ${style.item_3}`}>item 3</div>
      <div className={`${style.carousel__item} ${style.item_4}`}>item 4</div>
      <div className={`${style.carousel__item} ${style.item_5}`}>item 5</div>
    </Carus>
  )
}

export default MovieDetail
