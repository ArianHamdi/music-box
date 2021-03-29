import styles from './Genre.module.scss';
import { useHistory } from 'react-router-dom'

const Genre = ({ cover, alt, genre }) => {

    const history = useHistory();

    const genrePageHandler = () => {
        history.push(`/category/${genre}`);
    }

    return (
        <img className={styles.genre} src={cover} alt={alt} onClick={genrePageHandler} />
    )
}

export default Genre;