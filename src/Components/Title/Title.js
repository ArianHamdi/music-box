import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Title = ({ value }) => {

    let uppercaseTitle = '';
    if (value) {
        const title = `${value} -`;
        uppercaseTitle = title[0].toUpperCase() + title.slice(1);
    }

    // useEffect(() => {
    //     document.title = `${uppercaseTitle} Music World`
    // }, [value])

    return null

    return (
        <Helmet>
            <title>{`${uppercaseTitle} Music World`}</title>
            <meta property="og:title" content="Title" />
            <meta property="og:site_name" content="Music world" />
            <meta property="og:description" content="open the world of music open the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of musicopen the world of music" />
            <meta property="og:image" content="https://vistapointe.net/images/music-4.jpg" />
        </Helmet>
        // <div></div>
    )
}

export default Title;