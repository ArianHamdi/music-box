import styles from './Artist.module.scss';
import { useHistory } from 'react-router-dom'
import favorite from '../../assets/SVGs/favorite.svg'
import colors from '../../Constant/colors'
import Icon from '../Icon/Icon'

const Artist = ({ id, artist_picture, name, fans }) => {

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
                <h5 className={styles.name}> {name}</h5>
                {fans && <div className={styles.fans}>
                    <Icon src={favorite} size={13} fill={colors.grey_1} />
                    <h6 className={styles.fans}>{fans}</h6>
                </div>}
            </div>
        </div>
    )
}

export default Artist;