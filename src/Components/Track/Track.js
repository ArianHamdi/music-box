import styles from './Track.module.scss';

import { usePlaylistDispatch } from '../../Contexts/playlist-context'
import { useHistory } from 'react-router-dom'

const Track = ({ album_id, artist_id, artist_picture, cover, title, color }) => {

    const history = useHistory();

    const dispatch = usePlaylistDispatch();

    const goToHandler = () => {
        const payload = {}
        history.push(`/album/${album_id}`, { artist_picture, cover, artist_id });
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