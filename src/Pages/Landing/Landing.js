import styles from './LandingPage.module.scss'
import Header from './Components/Header/Header'
import Title from '../../Components/Title/Title'

const LandingPage = () => {
    return (
        <section className={styles.landing}>
            <Title value='About' />
            <Header />
        </section>

    )
}

export default LandingPage