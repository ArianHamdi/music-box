const numberWithCommas = number => {
    return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

const convertTime = time => {
    if (isNaN(time)) {
        return '0:00';
    }
    const minute = Math.floor(time / 60);
    const second = ('0' + Math.floor(time % 60)).slice(-2);
    return `${minute}:${second}`;
}

export {
    convertTime,
    numberWithCommas
}
