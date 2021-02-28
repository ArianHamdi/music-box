import { useRef } from 'react'

// export const useThrottle = () => {
//     let inThrottle;
//     let lastFunc;
//     let first = useRef(true);
//     return (func, delay) => {
//         lastFunc = func;
//         if (first.current) {
//             lastFunc();
//             first.current = false;
//             setTimeout(() => {
//                 first.current = true;
//             }, delay)
//             return;
//         }
//         if (inThrottle) return;
//         inThrottle = true;
//         setTimeout(() => {
//             lastFunc();
//             inThrottle = false;
//         }, delay)
//     }
// }

export const useThrottle = () => {
    let lastFunc;
    let inThrottle;

    return (func, delay) => {
        lastFunc = func;
        if (inThrottle) return;
        inThrottle = true;
        setTimeout(() => {
            lastFunc();
            inThrottle = false;
        }, delay)
    }
}