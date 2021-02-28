function throttle(fn, ms) {
    let timeout
    function exec() {
        fn.apply()
    }
    const clear = () => {
        if (timeout !== undefined) {
            clearTimeout(timeout)
        }
    }
    if (fn !== undefined && ms !== undefined) {
        timeout = setTimeout(exec, ms)
    } else {
        console.error('callback function and the timeout must be supplied')
    }
    // API to clear the timeout
    throttle.clearTimeout = function () {
        clear();
    }
}

export default throttle