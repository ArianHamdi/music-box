import styles from './item.module.scss'

import Carousel from '../../../Components/Carousel/Carousel';
import Icon from '../../../Components/Icon/Icon'
import { numberWithCommas } from '../../../utilities/utilities'

import favorite from '../../../assets/SVGs/Favorite-fill.svg'

import deepFocus from '../../../assets/Deep Focus.png'
import productiveMorning from '../../../assets/Productive Morning.png'
import whiteNoise from '../../../assets/White Noise.png'
import natureSong from '../../../assets/Nature Song.png'
import brainFood from '../../../assets/Brain Food.png'
import morningRush from '../../../assets/Morning Rush.png'

const Productive = () => {

    const images = [
        { src: deepFocus, name: 'Deep Focus', like: 678612 },
        { src: productiveMorning, name: 'Productive Morning', like: 244412 },
        { src: whiteNoise, name: 'White Noise', like: 146264 },
        { src: natureSong, name: 'Nature Song', like: 89460 },
        { src: brainFood, name: 'Brain Food', like: 727743 },
        { src: morningRush, name: 'Morning Rush', like: 291818 },
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
        <Carousel title='Make monday more productive'>
            {items}
        </Carousel>

    )

}

export default Productive;