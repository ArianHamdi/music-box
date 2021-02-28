import styles from './Navigation.desktop.module.scss';
import { NavLink, useLocation } from 'react-router-dom'
import classnames from 'classnames'

import Navbar from '../Navbar/Nabbar'
import InputText from '../InputText/InputText'

import Icon from '../Icon/Icon'

import profile from '../../assets/SVGs/Profile.svg'

import logo from '../../assets/Logo.png'

const NaivgationDesktop = () => {

    const location = useLocation();
    const path = location.pathname

    const isRouteActive = (match, location) => {
        if (match || location.pathname.includes('artist')) return true;
    }

    const navLinkContainerStyle = (...routes) => {

        let activeStyle;

        //change it to some method; !!important

        for (let i = 0; i < routes.length; i++) {
            if (path.includes(routes[i])) {
                activeStyle = true;
                break;
            };
        }

        return classnames([styles.navLinkContainer], {
            [styles.navLinkContainerActive]: activeStyle
        })
    }

    return (
        <Navbar>
            <div className={styles.navigation}>
                <img src={logo} alt="logo" />
                <ul>
                    <li className={navLinkContainerStyle('/home')}>
                        <NavLink className={styles.navLink} activeClassName={styles.navLinkActive} to='/'>Home</NavLink>
                    </li>
                    <li className={navLinkContainerStyle('category', 'artist')}>
                        <NavLink className={styles.navLink} activeClassName={styles.navLinkActive} to='/category' isActive={isRouteActive}>Category</NavLink>
                    </li>
                </ul>
                <InputText placeholder='Search' />
                <div className={styles.user}>
                    <Icon src={profile} size={20} />
                    <p>Arian Hamdi</p>
                </div>
            </div>
        </Navbar>
    )
}

export default NaivgationDesktop;