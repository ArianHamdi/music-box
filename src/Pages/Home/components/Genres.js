import { useMemo } from 'react'
import styles from './styles.module.scss'

import genresImage from '../../../assets/images/genres/index'
import genres from '../../../data/genres'
import Genre from '../../../Components/Genre/Genre'

import Slider from '../../../Components/Slider/Slider'
import  sampleSize  from 'lodash/sampleSize'
import  range  from 'lodash/range'

const Genres = () => {

    const randomList = useMemo(() => {
        const list = range(0, 14);
        return sampleSize(list, 8)
    }, [])

    const genresKey = Object.keys(genres);

    const items = randomList.map(genre => {
        const genreName = genresKey[genre];
        const genreImage = genresImage[genre].default
        return (
            <div key={genre} className={styles.genre} >
                <Genre className={styles.slide} cover={genreImage} alt={genreName} genre={genreName} />
            </div>
        )
    })

    return (
        <section className={styles.slider}>
            <Slider title='Genres' to='/category'>
                {items}
            </Slider>
        </section>
    )
}

export default Genres