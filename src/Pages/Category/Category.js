import styles from './Category.module.scss';
import Genre from '../../Components/Genre/Genre'
import genres from '../../data/genres'
import genresImage from '../../assets/images/genres/index'
import Title from '../../Components/Title/Title'

const CategoryPage = () => {

    const genresKey = Object.keys(genres);

    const genresImages = genresKey.map((genre, index) => {
        return <Genre key={index} cover={genresImage[index].default} alt={genre} genre={genresKey[index]} />
    })

    return (
        <div className={styles.category}>
            <Title value='Category' />
            <div className={styles.title}>
                <h3>Genres</h3>
            </div>
            <div className={styles.genres}>
                {genresImages}
            </div>
        </div >
    )
}

export default CategoryPage;