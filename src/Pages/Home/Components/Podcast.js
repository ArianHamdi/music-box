import styles from './item.module.scss'
import Carousel from '../../../Components/Carousel/Carousel'

import stories from '../../../assets/STORIES.png'
import educational from '../../../assets/EDUCATIONAL.png'
import music from '../../../assets/MUSIC.png'
import lifeStyle from '../../../assets/Lifestyle.png'
import business from '../../../assets/Business.png'
import games from '../../../assets/GAMES.png'

const Podcast = () => {
    const images = [stories, educational, music, lifeStyle, business, games];

    const items = images.map(image => {
        return <img src={image} alt="podcast" className={styles.item} />
    })

    return (
        <Carousel title='Podcasts' message='Explore by categories and popularity'>
            {items}
        </Carousel>
    )
}

export default Podcast;