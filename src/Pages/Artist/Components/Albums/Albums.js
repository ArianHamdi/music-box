import { useState } from 'react'
import styles from './Albums.module.scss'
import { useArtistAlbums } from '../../../../Hooks/useAPI'
import Album from '../../../../Components/Album/Album';

const Albums = ({ id, picture, theme }) => {

    const [showAll, setShowAll] = useState(false)

    const { data: albums } = useArtistAlbums(id);

    if (!albums) return null;

    const showHandler = () => {
        setShowAll(prev => !prev)
    }

    const gridAutoRows = showAll ? 'auto' : 0;
    const buttonText = showAll ? 'show less' : 'show more'

    const items = albums.map(album => {
        const { id: album_id, title, cover_medium: cover, release_date } = album;
        return (
            <Album key={album_id} album_id={album_id} artist_id={id} artist_picture={picture} title={title} cover={cover} release_date={release_date} color={theme} />
        )
    })

    return (
        <section style={{ textAlign: 'center' }}>
            <div className={styles.albums} style={{ gridAutoRows }}>
                {items}
            </div>
            <button className={styles.button} onClick={showHandler}>{buttonText}</button>
        </section>

    )
}

export default Albums