import styles from './Album.module.scss';
import { useHistory } from 'react-router-dom'

const Album = ({ album_id, artist_id, artist_picture, cover, title, release_date, color }) => {

    const history = useHistory();

    const goToHandler = () => {
        history.push(`/album/${album_id}`, { artist_picture, cover, artist_id });
    }

    return (
        <div className={styles.album} onClick={goToHandler}>
            <div className={styles.cover}>
                <img src={cover} alt={title} />
            </div>
            <div className={styles.descriptions} style={{ color }}>
                <h5 className={styles.name} >{title}</h5>
                {release_date && <h6 className={styles.release} >Released : {release_date}</h6>}
            </div>
        </div>
    )
}

export default Album;