import { useEffect } from 'react'

const Title = ({ value }) => {

    let uppercaseTitle = '';
    if (value) {
        const title = `${value} -`;
        uppercaseTitle = title[0].toUpperCase() + title.slice(1);
    }

    useEffect(() => {
        document.title = `${uppercaseTitle} Music World`
    }, [uppercaseTitle])

    return null

}

export default Title;