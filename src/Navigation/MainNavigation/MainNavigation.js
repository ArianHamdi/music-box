import styles from './MainNavigation.module.scss';
import { NavLink, useLocation } from 'react-router-dom'
import classnames from 'classnames'

import Navbar from '../../Components/Navbar/Nabbar'
import InputText from '../../Components/InputText/InputText'

import Icon from '../../Components/Icon/Icon'

import profile from '../../assets/SVGs/Profile.svg'

import logo from '../../assets/Logo.png'

const Navigation = () => {

    let location = useLocation();

    const links = [
        { name: 'Home', to: '/home' },
        { name: 'Category', to: '/category' },
        { name: 'Library', to: '/library' }
    ]

    const NavLinks = links.map(link => {
        const classNames = classnames([styles.navLinkContainer], {
            [styles.navLinkContainerActive]: link.to === location.pathname
        })
        return <li className={classNames}>
            <NavLink to={link.to} className={styles.navLink} activeClassName={styles.navLinkActive}>
                {link.name}
            </NavLink>
        </li>
    })

    return (
        <Navbar>
            <div className={styles.navigation}>
                <img src={logo} alt="logo" />
                <ul>
                    {NavLinks}
                </ul>
                <InputText placeholder='Search' />
                <div className={styles.user}>
                    <Icon Src={profile} size={20} />
                    <p>Arian Hamdi</p>
                </div>
            </div>
        </Navbar>
    )
}

export default Navigation;