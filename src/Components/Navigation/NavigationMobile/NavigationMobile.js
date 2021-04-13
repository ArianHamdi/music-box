import styles from './NavigationMobile.module.scss';
import NavLink from './NavLink'
import home from '../../../assets/svg/home.svg'
import category from '../../../assets/svg/category.svg'
import about from '../../../assets/svg/about.svg'

const NavigationMobile = () => {

    return (
        <nav className={styles.navigation}>
            <NavLink path='/' label='Home' icon={home} exact />
            <NavLink path='/category' label='Category' icon={category} />
            <NavLink path='/about' label='About' icon={about} />
        </nav>
    )
}

export default NavigationMobile;