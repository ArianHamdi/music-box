import styles from './HomePage.module.scss';

import Browse from './Components/Browse';
import Productive from './Components/Productive'
import Podcast from './Components/Podcast'
import Playlist from './Components/Playlist'
import Releases from './Components/Releases'

const HomePage = () => {

    console.log('home')

    return (
        <section className={styles.home}>
            <Browse />
            <Productive />
            <Podcast />
            <Playlist />
            <Releases />
        </section>
    )
}

export default HomePage;