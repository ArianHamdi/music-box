import styles from './Loading.module.scss'

const Loading = ({ size, position }) => {

    const width = size;
    const height = size;

    return (
        <div className={styles.container} style={{ position }}>
            <div className={styles.loading} style={{ width, height }}>
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}

export default Loading;