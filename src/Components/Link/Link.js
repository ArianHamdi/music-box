import styles from './Link.module.scss'
import { Link as ReactRouterLink } from 'react-router-dom'
import cn from 'classnames'

const Link = ({ to, state, children, className }) => {

    const linkStyle = cn([styles.link], className)

    return (
        <ReactRouterLink className={linkStyle} to={{
            pathname: to,
            state: state
        }}>
            {children}
        </ReactRouterLink>
    )
}

export default Link