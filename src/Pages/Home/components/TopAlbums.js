import styles from './styles.module.scss'

import Slider from '../../../Components/Slider/Slider'
import Album from '../../../Components/Album/Album'

const TopAlbums = ({ albums }) => {

    if (!albums) return null

    const items = albums.map(album => {
        const { id, title, cover_medium: cover } = album;
        const { id: artist_id } = album.artist
        const { picture_medium: picture } = album.artist
        return (
            <div key={id} className={styles.slide}>
                <Album album_id={id} artist_id={artist_id} title={title} artist_picture={picture} cover={cover} />
            </div >
        )
    })

    return (
        <section className={styles.slider}>
            <Slider title='Top Albums'>
                {items}
            </Slider>
        </section>
    )
}

export default TopAlbums;