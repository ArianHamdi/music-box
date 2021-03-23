import styles from './styles.module.scss'

import Slider from '../../../Components/Slider/Slider'
import Artist from '../../../Components/Artist/Artist'

const TopArtists = ({ artists }) => {

    if (!artists) return null

    const items = artists.map(artist => {
        const { id, name, picture_medium: picture } = artist;
        return (
            <div key={id} className={styles.slide}>
                <Artist id={id} name={name} artist_picture={picture} />
            </div >
        )
    })

    return (
        <section className={styles.slider}>
            <Slider title='Top Artists'>
                {items}
            </Slider>
        </section>
    )
}

export default TopArtists;