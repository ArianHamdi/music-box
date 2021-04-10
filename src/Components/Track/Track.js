import styles from './Track.module.scss';

import { usePlaylistDispatch } from '../../Contexts/playlist-context'
import { useHistory } from 'react-router-dom'

const Track = ({ track_id, preview, album_id, artist_id, artist_picture, artist_name, cover, title, color }) => {

    const history = useHistory();

    const dispatch = usePlaylistDispatch();

    const goToHandler = () => {
        const payload = {
            playlist: [{ preview, title, cover, id: track_id, artist_name }],
            index: 0,
            info: { type: 'track', id: track_id }
        }
        dispatch({ type: 'playlist', payload })
        history.push(`/album/${album_id}`, { artist_picture, cover, artist_id, autoPlay: true });
    }

    return (
        <div className={styles.track} onClick={goToHandler}>
            <div className={styles.cover}>
                <img src={cover} alt={title} />
            </div>
            <div className={styles.descriptions} style={{ color }}>
                <h5 className={styles.name} >{title}</h5>
            </div>
        </div>
    )
}

export default Track;