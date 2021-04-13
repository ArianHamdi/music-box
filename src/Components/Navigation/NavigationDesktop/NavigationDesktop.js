import styles from './NavigationDesktop.module.scss';
import { NavLink } from 'react-router-dom'

import Navbar from '../../Navbar/Nabbar'
import Search from '../../Search/Search'

const NaivgationDesktop = () => {


    return (
        <Navbar>
            <div className={styles.navigation}>
                <NavLink className={styles.navLink} activeClassName={styles.navLinkActive} to='/' exact>Home</NavLink>
                <NavLink className={styles.navLink} activeClassName={styles.navLinkActive} to='/category'>Category</NavLink>
                <NavLink className={styles.navLink} activeClassName={styles.navLinkActive} to='/about'>About</NavLink>
                <Search />
            </div>
        </Navbar>
    )
}

export default NaivgationDesktop;