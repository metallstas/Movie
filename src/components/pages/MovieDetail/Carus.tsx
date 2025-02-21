import { Children, cloneElement, ReactHTMLElement, useEffect, useRef, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import style from './Carus.module.css'

interface ICarus {
    children: any,
    slidesToShow: number,
    slidesToScroll: number,
}

const Carus = ({children, slidesToShow, slidesToScroll = 1}: ICarus) => {
    const [pages, setPages] = useState([])
    const [slidesShow, setSlidesShow] = useState<number>(1)
    const [offset, setOffset] = useState<number>(0)
    const ref = useRef<any>(null)

    const handleLeftArrow = () => {
        setOffset((prev:number) => prev + (ref.current?.childNodes[0].clientWidth * slidesToScroll))
    }

    const handleRightArrow = () => {
        console.log(ref)
        setOffset((prev:number) => prev - ref.current?.childNodes[0].clientWidth * slidesToScroll)
    }

    useEffect(() => {
        const slides = 100 / slidesToShow
        setSlidesShow(100 / slidesToShow)
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: slides + '%',
                        maxWidth: slides + '%',
                    }
                })
            })
        )
    }, [slidesToShow])

    return (
    <div className={style.carousel}>
        <FaChevronLeft className={style.arrow} onClick={handleLeftArrow}/>
            <div className={style.window}>
                <div ref={ref}
                    className={style.all_items_container}
                    style={{
                        transform: `translateX(${offset}px)`
                    }}>
                        {pages}
                    </div>
            </div>
        <FaChevronRight className={style.arrow} onClick={handleRightArrow}/>
    </div>
  )
}

export default Carus
