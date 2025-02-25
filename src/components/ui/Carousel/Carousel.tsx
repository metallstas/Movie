import { Link } from 'react-router';
import style from './Carousel.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface ICarousel {
  items: {poster: string, id: number}[],
}

const CarouselFilm = ({items}: ICarousel) => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 900, min: 500 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    bigMobile: {
      breakpoint: { max: 500, min: 300 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 300, min: 0 },
      items: 1,
      slidesToSlide: 1,
      autoPlay: false, // optional, default to 1.
    }
  }
 
  return (
    <div className={style.container}>
      <Carousel responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={responsive.mobile ? false : true}
        minimumTouchDrag={50}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5s"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px">
        {items.map((film, i) => (
        <Link to={`/movie/${film.id}`} key={i}>
          <img tabIndex={1} className={style.img} src={film.poster}/>
        </Link>))}
      </Carousel>
    </div>
  )
}

export default CarouselFilm
