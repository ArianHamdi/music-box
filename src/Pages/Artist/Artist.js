import styles from './Artist.module.scss';
import { useParams, useLocation } from 'react-router-dom'
import Loading from '../../Components/Loading/Loading'
import { useArtistInformation } from '../../Hooks/useAPI'
import { useColor } from '../../Hooks/useColor'
import Header from './Components/Header/Header'
import Songs from './Components/Songs/Songs'
import Albums from './Components/Albums/Albums'
import Related from './Components/Related/Related'
import Title from '../../Components/Title/Title'


const Artist = () => {

    const { id } = useParams();

    const { data: artist } = useArtistInformation(id);

    const { state } = useLocation();

    const picture = state?.artist_picture || artist?.picture;

    const { color, theme } = useColor(picture);

    return (
        <section className={styles.artist} >
            <Title value={artist?.name} />
            <img className={styles.background} src={picture} alt="artist" />
            {!picture && <Loading />}
            {picture && <> <Header id={id} picture={picture} color={color} />
                <Songs id={id} />
                <Albums id={id} picture={picture} theme={theme} />
                <Related id={id} /></>
            }
        </section>
    )

}

export default Artist