import styles from './Icon.module.scss'

const Icon = props => {

    const { Src, width = 15, height = 15, fill = 'white', ...other } = props;

    return (
        <Src fill={fill} width={width} height={height} className={styles.icon} {...other}/>
    )
}

export default Icon;