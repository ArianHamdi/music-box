import styles from './Track.module.scss';

import Link from '../Link/Link'
import { usePlaylistDispatch } from '../../Contexts/playlist-context'

const Track = ({ track_id, preview, album_id, artist_id, artist_picture, artist_name, cover, title, color }) => {

    const dispatch = usePlaylistDispatch();

    const playSongHandler = () => {
        const payload = {
            playlist: [{ preview, title, cover, id: track_id, artist_name }],
            index: 0,
            info: { type: 'track', id: track_id }
        }
        dispatch({ type: 'playlist', payload })
    }

    return (
        <Link to={`/album/${album_id}`} state={{ artist_picture, cover, artist_id, autoPlay: true }}>
            <div className={styles.track} onClick={playSongHandler}>
                <div className={styles.cover}>
                    <img src={cover} alt={title} />
                </div>
                <div className={styles.descriptions} style={{ color }}>
                    <h5 className={styles.name} >{title}</h5>
                </div>
            </div>
        </Link>

    )
}

export default Track;