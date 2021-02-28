import { useEffect, useRef } from 'react'
import styles from './VolumeProgressBar.module.scss'

const VolumeProgressBar = ({ callback }) => {

    const isHold = useRef();
    const progressRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        document.addEventListener('mousemove', pointerMove);
        document.addEventListener('mouseup', pointerUp);
        return () => {
            document.removeEventListener('mousemove', pointerMove);
            document.removeEventListener('mouseup', pointerUp);
        };
    })

    const pointerDown = () => {
        isHold.current = true;
    }

    const pointerUp = () => {
        isHold.current = false;
    }

    const pointerMove = event => {
        const { type } = event;
        if (isHold.current || type === 'click') {
            const { clientX: childOffset } = event;
            const { left: containerOffset, width } = containerRef.current.getBoundingClientRect();

            let progressWidth = childOffset - containerOffset;

            if (progressWidth > width) {
                progressWidth = width
            }
            if (progressWidth < 0) {
                progressWidth = 0
            }

            progressRef.current.style.width = progressWidth + 'px';
            const percentage = progressWidth / width
            callback(percentage)
        }
    }

    return (
        <div ref={containerRef} className={styles.container} onMouseDown={pointerDown} onClick={pointerMove}>
            <div className={styles.progress} >
                <div ref={progressRef} className={styles.progressFilled}></div>
            </div>
        </ div >
    )

}


export default VolumeProgressBar