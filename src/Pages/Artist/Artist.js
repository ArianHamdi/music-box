import styles from './Artist.module.scss';

import Header from './Components/Header/Header'

import { useParams, useLocation } from 'react-router-dom'
import { useArtistInfo } from '../../Hooks/useAPI'

const Artist = () => {

    const { id } = useParams();

    const { data } = useArtistInfo(id);

    const location = useLocation();

    const picture = location.state?.picture || data?.picture;

    return (
        <section className={styles.artist} >
            {picture && <>
                <img className={styles.background} src={picture} alt="artist" />
                <Header name={data?.name} fans={data?.fans} picture={picture} />
            </>}
        </section>
    )

}

export default Artist