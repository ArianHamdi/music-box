import styles from './Album.module.scss';
import Link from '../Link/Link'

const Album = ({ album_id, artist_id, artist_picture, cover, title, release_date, color }) => {

    return (
        <Link to={`/album/${album_id}`} state={{ artist_picture, cover, artist_id }}>
            <div className={styles.album}>
                <div className={styles.cover}>
                    <img src={cover} alt={title} />
                </div>
                <div className={styles.descriptions} style={{ color }}>
                    <h5 className={styles.name} >{title}</h5>
                    {release_date && <h6 className={styles.release} >Released : {release_date}</h6>}
                </div>
            </div>
        </Link>

    )
}

export default Album;