import styles from './Category.module.scss';
import { useHistory } from 'react-router-dom'
import genres from '../../data/genres'
import genresImage from '../../assets/images/genres/index'

const CategoryPage = () => {

    const history = useHistory();

    const genrePageHandler = genre => {
        history.push(`/category/${genre}`);
    }

    const genresKey = Object.keys(genres);

    const genresAlbum = genresKey.map((genre, index) => {
        return <img key={index} src={genresImage[index].default} alt={genre} onClick={() => genrePageHandler(genresKey[index])} />
    })

    return (
        <div className={styles.category}>
            <div className={styles.title}>
                <h3>Genres</h3>
            </div>
            {genresAlbum}
        </div >
    )
}

export default CategoryPage;