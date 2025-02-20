import { Link } from 'react-router';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import style from './Carousel.module.css'

interface ICarousel {
  items: string[],
}

const Carousel = ({items}: ICarousel) => {

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


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    accessibility: true,
    adaptiveHeight: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  }
 
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((el, i) => <div key={i}>
          <img tabIndex={1} className={style.img} src={el}/>
        </div>)}
      </Slider>
    </div>
  )
}

export default Carousel
