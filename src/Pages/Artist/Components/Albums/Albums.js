import { useState } from 'react'
import styles from './Albums.module.scss'
import { useArtistAlbums } from '../../../../Hooks/useAPI'
import Album from '../../../../Components/Album/Album';

import { useDimentions } from '../../../../Hooks/useDimentions'
import breakpoints from '../../../../Constant/breakpoints'

const Albums = ({ id, picture, theme }) => {

    const [showAll, setShowAll] = useState(false)

    const { data: albums, error, status } = useArtistAlbums(id);

    // console.log('albums', albums);
    // console.log('error', error);
    // console.log(status);

    const { width } = useDimentions();

    if (!albums) return null;

    // return null

    const showHandler = () => {
        setShowAll(prev => !prev)
    }

    let count;
    if (width > breakpoints.xxl) count = 7
    else if (width > breakpoints.xl) count = 6
    else if (width > breakpoints.lg) count = 5
    else if (width > breakpoints.md) count = 4
    else if (width > breakpoints.sm) count = 4
    else if (width > 0) count = 3



    const shownAlbums = showAll ? albums : albums.slice(0, count);

    const buttonText = showAll ? 'show less' : 'show more'

    const items = shownAlbums.map(album => {
        const { id: album_id, title, cover_medium: cover, release_date } = album;
        return (
            <Album key={album_id} album_id={album_id} artist_id={id} artist_picture={picture} title={title} cover={cover} release_date={release_date} color={theme} />
        )
    })

    return (
        <section style={{ textAlign: 'center' }}>
            <div className={styles.albums} >
                {items}
            </div>
            <button className={styles.button} onClick={showHandler}>{buttonText}</button>
        </section>

    )
}

export default Albums