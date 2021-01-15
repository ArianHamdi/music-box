import styles from './Icon.module.scss'
import classnames from 'classnames'

const Icon = props => {

    const { src: Svg, size = 15, fill = 'white', invert = false, ...other } = props;

    const classNames = classnames([styles.icon], {
        [styles.invert]: invert
    })

    return (
        <Svg fill={fill} width={size} height={size}
            className={classNames} {...other} />
    )
}

export default Icon;