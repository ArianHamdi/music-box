import styles from './Artist.module.scss';
import Link from '../Link/Link'

const Artist = ({ id, artist_picture, name }) => {

    return (
        <Link to={`/artist/${id}`} state={{ artist_picture }}>
            <div className={styles.artist}>
                <div className={styles.picture} >
                    <img src={artist_picture} alt="artist" />
                </div>
                <div className={styles.description}>
                    <h5 className={styles.name}>{name}</h5>
                </div>
            </div>
        </Link>
    )
}

export default Artist;