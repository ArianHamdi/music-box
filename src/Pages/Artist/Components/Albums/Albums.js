import { useState } from 'react'
import styles from './Albums.module.scss'
import { useArtistAlbums } from '../../../../Hooks/useAPI'
import Album from '../../../../Components/Album/Album';
import Button from '../../../../Components/Button/Button'

import { useDimentions } from '../../../../Hooks/useDimentions'
import breakpoints from '../../../../Constant/breakpoints'

const Albums = ({ id, picture }) => {

    const [showAll, setShowAll] = useState(false)

    const { data: albums } = useArtistAlbums(id);

    const { width } = useDimentions();

    if (!albums) return null;

    const showHandler = () => {
        setShowAll(prev => !prev)
    }

    let count;
    if (width > breakpoints.xxl) count = 7
    else if (width > breakpoints.xl) count = 5
    else if (width > breakpoints.lg) count = 5
    else if (width > breakpoints.md) count = 4
    else if (width > breakpoints.sm) count = 3
    else if (width > 0) count = 3



    const shownAlbums = showAll ? albums : albums.slice(0, count);

    const items = shownAlbums.map(album => {
        const { id: album_id, title, cover_medium: cover, release_date } = album;
        return (
            <Album key={album_id} album_id={album_id} artist_id={id} artist_picture={picture} title={title} cover={cover} release_date={release_date} />
        )
    })

    return (
        <section >
            <div className={styles.albums} >
                <h3 className={styles.title}>Albums</h3>
                {items}
            </div>
            {albums.length > count && <Button active={showAll} onClick={showHandler} />}
        </section>

    )
}

export default Albums