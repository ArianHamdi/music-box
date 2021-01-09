import styles from './item.module.scss'
import Carousel from '../../../Components/Carousel/Carousel'

import hipHop from '../../../assets/HIP-HOP.png';
import pop from '../../../assets/POP.png';
import rock from '../../../assets/Rock.png';
import country from '../../../assets/Country.png';
import electro from '../../../assets/DANCE-ELECTRO.png';
import indie from '../../../assets/Indie.png';

const Browse = () => {

    const images = [hipHop, pop, rock, country, electro, indie];

    const items = images.map(image => {
        return (
            <img src={image} className={styles.item} />
        )
    })

    return (
        <Carousel title='Browse' message='Explore be gennre and mood'>
            {items}
        </Carousel>
    )
}

export default Browse