import styles from './Genre.module.scss';
import Link from '../Link/Link'

const Genre = ({ cover, alt, genre }) => {

    return (
        <Link to={`/category/${genre}`}>
            <img className={styles.genre} src={cover} alt={alt} />
        </Link>
    )
}

export default Genre;