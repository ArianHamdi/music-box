import styles from './Artist.module.scss';

import { useColor } from '../../Hooks/useColor'
import Header from './Components/Header/Header'
import Songs from './Components/Songs/Songs'

import { useParams, useLocation } from 'react-router-dom'
import { useArtistInfo } from '../../Hooks/useAPI'

const Artist = () => {

    const { id } = useParams();

    const { data } = useArtistInfo(id);

    const location = useLocation();

    const picture = location.state?.picture || data?.picture;

    const { color, isDark } = useColor(picture);

    console.log('songs : ', data?.songs);

    return (
        <section className={styles.artist} >
            {picture && <>
                <img className={styles.background} src={picture} alt="artist" />
                <Header name={data?.name} fans={data?.fans} picture={picture} color={color} />
            </>}
            {data && <Songs songs={data.songs} color={color} isDark={isDark} />}
        </section>
    )

}

export default Artist