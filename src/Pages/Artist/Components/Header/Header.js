import styles from './Header.module.scss';

import { numberWithCommas } from '../../../../utilities/utilities'
import { useArtistInformation } from '../../../../Hooks/useAPI'

const Header = ({ id, picture, color }) => {

    const { data: artist } = useArtistInformation(id);

    const fans = numberWithCommas(artist?.fans);

    return (
        <div className={styles.header}>
            <img className={styles.test} src={picture} alt="artist" />
            {artist?.name && color && <>
                <div className={styles.artist} style={{ color }}>
                    <h6>Artist</h6>
                    <h3>{artist?.name}</h3>
                </div>

                <p className={styles.followers} style={{ color }}>
                    {fans} <span>folowers</span>
                </p>

            </>}
        </div>
    )
}

export default Header;