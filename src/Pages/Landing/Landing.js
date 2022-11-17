import styles from './LandingPage.module.scss'
import Header from './Components/Header/Header'
import Title from '../../Components/Title/Title'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const LandingPage = () => {
    return (
        <section className={styles.landing}>
            <Title value='About' />
            <Header />
            <div className={styles.content}>
                <About />
                <Contact />
            </div>
        </section>
    )
}

export default LandingPage