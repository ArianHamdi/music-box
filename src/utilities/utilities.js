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

const shorten = (word, size) => {
    let length;
    if (size < 576) {
        length = 25
    }
    else if (size < 768) {
        length = 45
    }
    else if (size < 992) {
        length = 60;
    }
    else {
        length = 80
    }

    if (length > word.length) return word;

    const shortenWord = word.slice(0, length) + ' ...';

    return shortenWord;
}

export {
    convertTime,
    numberWithCommas,
    shorten
}
