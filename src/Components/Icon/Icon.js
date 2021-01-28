import styles from './Icon.module.scss'
import classnames from 'classnames'

const Icon = props => {

    const { src: Svg, size = 15, fill = 'white', invert = false, className = null, ...other } = props;

    const classNames = classnames([styles.icon], className, {
        [styles.invert]: invert
    })

    return (
        <Svg fill={fill} width={size} height={size}
            className={classNames} {...other} />
    )
}

export default Icon;