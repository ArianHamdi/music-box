import { useMemo } from 'react'
import styles from './styles.module.scss'

import genresImage from '../../../assets/images/genres/index'
import genres from '../../../data/genres'
import { useHistory } from 'react-router-dom'

import Slider from '../../../Components/Slider/Slider'
import { range, sampleSize } from 'lodash'

const Genres = () => {

    const history = useHistory();

    const randomList = useMemo(() => {
        const list = range(0, 14);
        return sampleSize(list, 8)
    }, [])

    const genrePageHandler = genre => {
        history.push(`/category/${genre}`)
    }

    const genresKey = Object.keys(genres);

    const items = randomList.map(genre => {
        const genreName = genresKey[genre];
        const genreImage = genresImage[genre].default
        return (
            <div key={genre} className={styles.genre} onClick={() => genrePageHandler(genreName)}>
                <img className={styles.slide} src={genreImage} alt={genreName} />
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