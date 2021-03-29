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

    // return null

    return (
        <Helmet>
            <title>{`${uppercaseTitle} Music World`}</title>
            <meta property="og:title" content="Title" />
            <meta property="og:site_name" content="Site name" />
            <meta property="og:description" content="Description" />
            {/* <meta property="og:image" content="Link to your logo" /> */}
        </Helmet>
        // <div></div>
    )
}

export default Title;