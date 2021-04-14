import { Children, useRef } from 'react'
import styles from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useHistory } from 'react-router-dom'
import Icon from '../Icon/Icon'

import next from '../../assets/svg/next.svg'
import previous from '../../assets/svg/previous.svg'

import 'swiper/swiper.scss';

const Slider = ({ children, title, description, to }) => {

    const sliderRef = useRef();
    const history = useHistory();

    const nextSlideHandler = () => {
        sliderRef.current.swiper.slideNext()
    }

    const previousSlideHandler = () => {
        sliderRef.current.swiper.slidePrev()
    }

    const changeRoute = () => {
        history.push(to)
    }

    const slides = Children.map(children, (child, index) => (
        <SwiperSlide className={styles.swiperSlide} key={index} >
            {child}
        </SwiperSlide>
    ))

    return (
        <div>
            <div className={styles.header}>
                <div className={styles.title}>
                    {title && <h3>{title}</h3>}
                    {description && <h4>{description}</h4>}
                </div>
                {to ? <h4 className={styles.view} onClick={changeRoute}>view all</h4> : <div className={styles.controller}>
                    <Icon src={previous} size={20} onClick={previousSlideHandler} />
                    <Icon src={next} size={20} onClick={nextSlideHandler} />
                </div>}
            </div>
            <Swiper ref={sliderRef} className={styles.swiperContainer} slidesPerView='auto' centeredSlides
                centeredSlidesBounds spaceBetween={25} initialSlide={0} >
                {slides}
            </Swiper>
        </div >
    )
}

export default Slider;