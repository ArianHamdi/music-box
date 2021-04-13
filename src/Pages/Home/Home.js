import styles from './Home.module.scss';

import TopTrack from './components/TopTracks'
import Genres from './components/Genres'
import TopArtists from './components/TopArtists'
import TopAlbums from './components/TopAlbums'
import Loading from '../../Components/Loading/Loading';
import Search from '../../Components/Search/Search'
import Title from '../../Components/Title/Title'
import { Mobile } from '../../Components/Responsive/Responsive'

import { useTopArtists, useTopAlbums, useTopTracks } from '../../Hooks/useAPI'

const HomePage = () => {

    const { data: artists } = useTopArtists();
    const { data: albums } = useTopAlbums();
    const { data: tracks } = useTopTracks();

    return (
        <section className={styles.home}>
            <Title />
            <Mobile>
                <div className={styles.search}>
                    <Search />
                </div>
            </Mobile>
            <Genres />
            {!(artists || albums || tracks) && <Loading />}
            {/* {(artists || albums || tracks) && < Genres />} */}
            <TopArtists artists={artists} />
            <TopAlbums albums={albums} />
            <TopTrack tracks={tracks} />
        </section>
    )
}

export default HomePage;