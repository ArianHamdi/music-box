import styles from './Button.module.scss'
import classnames from 'classnames'

const Button = ({ title, background, uppercase, width, height }) => {


    const classNames = classnames([styles.button], {
        [styles.bg_light]: background === 'light',
        [styles.bg_gradient]: background === 'gradient',
        [styles.uppercase]: uppercase
    })


    const Width = width ? { 'width': width } : null;
    const Height = height ? { 'height': height } : null;


    return (
        <div className={classNames} style={{ ...Width, ...Height }}>
            {title}
        </div>
    )
}


export default Button