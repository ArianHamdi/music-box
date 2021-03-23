import styles from './Navigation.desktop.module.scss';
import { NavLink } from 'react-router-dom'

import Navbar from '../Navbar/Nabbar'
import Search from '../Search/Search'

import logo from '../../assets/Logo.png'

const NaivgationDesktop = () => {


    return (
        <Navbar>
            <div className={styles.navigation}>
                <img src={logo} alt="logo" />
                <NavLink className={styles.navLink} activeClassName={styles.navLinkActive} to='/' exact>Home</NavLink>
                <NavLink className={styles.navLink} activeClassName={styles.navLinkActive} to='/category'>Category</NavLink>
                <NavLink className={styles.navLink} activeClassName={styles.navLinkActive} to='/about'>About</NavLink>
                <Search />
            </div>
        </Navbar>
    )
}

export default NaivgationDesktop;