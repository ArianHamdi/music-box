import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import styles from './MusicProgressBar.module.scss'

const MusicProgressBar = forwardRef(({ callback }, ref) => {

    const isHold = useRef(false);
    const progressRef = useRef();

    useImperativeHandle(ref, () => ({
        get isHold() {
            return isHold.current;
        },
        get progress() {
            return progressRef.current
        }
    }))

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

    const pointerUp = event => {
        if (isHold.current) {
            const percentage = pointerMove(event)
            callback(percentage)
        }
        isHold.current = false;
    }

    const pointerMove = event => {
        if (isHold.current) {
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
            return percentage;
        }
    }

    return (
        <div ref={containerRef} className={styles.container} onMouseDown={pointerDown}>
            <div className={styles.progress}>
                <div ref={progressRef} className={styles.progressFilled}></div>
            </div>
        </ div >
    )

}
)

export default MusicProgressBar