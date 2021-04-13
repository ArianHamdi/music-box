import styles from './Button.module.scss'

const Button = ({ active, ...props }) => {

    const text = active ? 'show less' : 'show more'

    return (
        <div className={styles.button} {...props}>
            {text}
        </div>
    )
}

export default Button;