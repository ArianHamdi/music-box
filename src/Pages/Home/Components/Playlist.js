import styles from './item.module.scss'

import Carousel from '../../../Components/Carousel/Carousel'
import Icon from '../../../Components/Icon/Icon'
import { numberWithCommas } from '../../../utilities/utilities'

import favorite from '../../../assets/SVGs/Favorite-fill.svg'

import russian from '../../../assets/Russian Composers.png'
import guitar from '../../../assets/Guitar Solos.png'
import workoutRock from '../../../assets/Workout Rock.png'
import rockBallads from '../../../assets/Rock Ballads.png'
import alternative from '../../../assets/80s Alternative.png'
import rockabilly from '../../../assets/ROCKABILLY.png'

const Playlist = () => {
    const images = [
        { src: russian, name: 'Russian Composers', like: 71622 },
        { src: guitar, name: 'Guitar Solos ', like: 299154 },
        { src: workoutRock, name: 'Workout Rock ', like: 414228 },
        { src: rockBallads, name: 'Rock Ballads ', like: 160896 },
        { src: alternative, name: '80s Alternative ', like: 498112 },
        { src: rockabilly, name: 'Rockabilly', like: 82127 },
    ]

    const items = images.map((image, index) => {
        return (
            <div className={styles.like} key={index}>
                <img src={image.src} alt='song album' />
                <p>{image.name}</p>
                <div>
                    <Icon src={favorite} width={10} height={10} />
                    <p>{numberWithCommas(image.like)}</p>
                </div>
            </div>
        )
    })

    return (
        <Carousel title='Playlist picks' message='Selected for you based on your recent activity' slider>
            {items}
        </Carousel>
    )

}

export default Playlist;
