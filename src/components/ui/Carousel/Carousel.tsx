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
      breakpoint: { max: 900, min: 460 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 460, min: 0 },
      items: 2,
      slidesToSlide: 1,
      autoPlay: false, // optional, default to 1.
    }
  };

  // const settings = {
  //   swipeable={false}
  //   draggable={false}
  //   showDots={true}
  //   responsive={responsive}
  //   ssr={true} // means to render carousel on server-side.
  //   infinite={true}
  //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  //   autoPlaySpeed={1000}
  //   keyBoardControl={true}
  //   customTransition="all .5"
  //   transitionDuration={500}
  //   containerClass="carousel-container"
  //   removeArrowOnDeviceType={["tablet", "mobile"]}
  //   deviceType={this.props.deviceType}
  //   dotListClass="custom-dot-list-style"
  //   itemClass="carousel-item-padding-40-px"
  // }

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: 'grey', borderRadius: '100%'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: 'grey', borderRadius: '100%' }}
        onClick={onClick}
      />
    );
  }
 
  return (
    <div className={style.container}>
      <Carousel responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        autoPlay={true}
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
