import styles from './NavLink.module.scss'
import { NavLink as ReactRouterNavLink } from 'react-router-dom'
import Icon from '../../Icon/Icon'

const NavLink = ({ to, label, icon, exact }) => {

    return (
        <ReactRouterNavLink className={styles.link} activeClassName={styles.linkActive} to={to} exact={exact}>
            <div>
                <Icon src={icon} size={28} />
                <h5>{label}</h5>
            </div>
        </ReactRouterNavLink>

    )
}

export default NavLink;