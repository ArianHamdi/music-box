import styles from './Button.module.scss'
import classnames from 'classnames'

const Button = ({ title, background, uppercase, className, color, invert }) => {

    const classNames = classnames([styles.button], {
        [styles.bg_light]: background === 'light',
        [styles.bg_gradient]: background === 'gradient',
        [styles.uppercase]: uppercase,
        [styles.invert]: invert
    }, className)

    const style = invert ? {
        borderColor: color,
        color: color
    } : null


    // const Width = width ? { 'width': width } : null;
    // const Height = height ? { 'height': height } : null;


    // return (
    //     <div className={classNames} style={{ ...Width, ...Height }}>
    //         {title}
    //     </div>
    // )

    return (
        <div className={classNames} style={style}>
            {title}
        </div>
    )
}


export default Button