import styles from './Category.module.scss';
import { useHistory } from 'react-router-dom'
import * as genresImage from '../../assets/Genres/Genres';

const genresName = [
    'hip-hop', 'rock', 'jazz', 'pop', 'metal', 'classical', 'r&b',
    'electro', 'country', 'soul&funk', 'blues', 'indie', 'latin', 'reggae'
]

const CategoryPage = () => {

    console.log('category')

    const history = useHistory();

    const genreHandler = genre => {
        history.push(`/category/${genre}`);
    }

    const genresAlbum = genresImage.default.map((image, index) => {
        return <img src={image.default} alt='song genres' onClick={() => genreHandler(genresName[index])} />
    })

    return (
        <div className={styles.category}>
            <h3>Genres</h3>
            {genresAlbum}
        </div >
    )
}

export default CategoryPage;