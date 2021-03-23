import styles from './LandingPage.module.scss'
import Navigation from './Components/Navigation/Navigation'
import Header from './Components/Header/Header'
import Flow from './Components/Flow/Flow'
import ListenAnyTime from './Components/ListenAnyTime/ListenAnyTime'


const LandingPage = () => {
    return (
        <section className={styles.landing}>
            {/* <Navigation /> */}
            <Header />
            <Flow />
            <ListenAnyTime />
        </section>

    )
}

export default LandingPage