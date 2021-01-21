import styles from './item.module.scss';
import Carousel from '../../../Components/Carousel/Carousel';

import lp5 from '../../../assets/LP5.png'
import numb from '../../../assets/Numb Numb Juice.png'
import drip from '../../../assets/Drip or Down 2.png'
import shadows from '../../../assets/Shadows.png'
import dontFeed from '../../../assets/Dont Feed the Pop Monster.png'
import hef from '../../../assets/HEF.png'

const Releases = () => {

    const images = [
        { src: lp5, name: 'LP5', artist: 'Apparat' },
        { src: numb, name: 'Guitar Solos ', artist: 'Schoolboy Q' },
        { src: drip, name: 'Drip or Down 2', artist: 'Gunna ' },
        { src: shadows, name: 'Shadows', artist: 'Remy Van Kesteren' },
        { src: dontFeed, name: "Don't Feed the Pop Monster", artist: 'Broods' },
        { src: hef, name: 'HEF', artist: 'Koud' },
    ]

    const items = images.map((image, index) => {
        return (
            <div className={styles.song} key={index}>
                <img src={image.src} alt='song album' />
                <p>{image.name}</p>
                <p>{image.artist}</p>
            </div>
        )
    })


    return (
        <Carousel title='New releases for you'>
            {items}
        </Carousel>
    )
}

export default Releases