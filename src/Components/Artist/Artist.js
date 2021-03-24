import { memo } from 'react'
import styles from './Artist.module.scss';
import { useHistory } from 'react-router-dom'
import favorite from '../../assets/svg/favorite.svg'
import colors from '../../Constant/colors'
import Icon from '../Icon/Icon'

const Artist = memo(({ id, artist_picture, name, fans }) => {

    const history = useHistory();

    const goToHandler = () => {
        history.push(`/artist/${id}`, { artist_picture });
    }


    return (
        <div className={styles.artist} onClick={goToHandler}>
            <div className={styles.picture} >
                <img src={artist_picture} alt="artist" />
            </div>
            <div className={styles.description}>
                <h5 className={styles.name}>{name}</h5>
            </div>
        </div>
    )
})

export default Artist;