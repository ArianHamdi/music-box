import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import styles from './MusicProgressBar.module.scss'

const MusicProgressBar = forwardRef(({ callback }, ref) => {

    const isHold = useRef(false);
    const progressRef = useRef();
    const containerRef = useRef();
    const progressParentRef = useRef();

    useImperativeHandle(ref, () => ({
        get isHold() {
            return isHold.current;
        },
        get progress() {
            return progressRef.current
        }
    }))


    useEffect(() => {
        document.addEventListener('mousemove', pointerMove);
        document.addEventListener('mouseup', pointerUp);
        document.addEventListener('touchmove', pointerMove);
        document.addEventListener('touchend', pointerUp)
        return () => {
            document.removeEventListener('mousemove', pointerMove);
            document.removeEventListener('mouseup', pointerUp);
            document.removeEventListener('touchmove', pointerMove);
            document.removeEventListener('touchend', pointerUp)
        };
    }, [])

    const pointerDown = () => {
        isHold.current = true;
    }

    const pointerUp = event => {
        if (isHold.current) {
            const percentage = pointerMove(event)
            callback(percentage)
        }
        isHold.current = false;
        progressParentRef.current.style.height = '4px'
        progressParentRef.current.style.overflow = 'visible'
    }

    const pointerMove = event => {
        if (isHold.current) {
            const childOffset = event.clientX || event.changedTouches[0].clientX;
            console.log(childOffset);
            const { left: containerOffset, width } = containerRef.current.getBoundingClientRect();

            let progressWidth = childOffset - containerOffset;

            if (progressWidth > width) {
                progressWidth = width
            }
            if (progressWidth < 0) {
                progressWidth = 0
            }

            progressRef.current.style.width = progressWidth + 'px';
            progressParentRef.current.style.height = '10px'
            progressParentRef.current.style.overflow = 'hidden'
            const percentage = progressWidth / width
            return percentage;
        }
    }

    return (
        <div ref={containerRef} className={styles.container} onMouseDown={pointerDown} onTouchStart={pointerDown}>
            <div className={styles.progress} ref={progressParentRef}>
                <div ref={progressRef} className={styles.progressFilled}></div>
            </div>
        </ div >
    )

}
)

export default MusicProgressBar