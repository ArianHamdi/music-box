import styles from './NavigationMobile.module.scss';
import NavLink from './NavLink'
import home from '../../../assets/svg/home.svg'
import category from '../../../assets/svg/category.svg'
import about from '../../../assets/svg/about.svg'

const NavigationMobile = () => {

    return (
        <nav className={styles.navigation}>
            <NavLink to='/' label='Home' icon={home} exact />
            <NavLink to='/category' label='Category' icon={category} />
            <NavLink to='/about' label='About' icon={about} />
        </nav>
    )
}

export default NavigationMobile;