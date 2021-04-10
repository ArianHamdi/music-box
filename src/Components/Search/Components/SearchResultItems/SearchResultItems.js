import SearchResultItem from '../SearchResultItem/SearchResultItem'

const SearchResultItems = ({ data, hideResult }) => {

    const items = data.map((item, index) => {
        return <SearchResultItem key={index} data={item} hideResult={hideResult} />

    })

    return items;

}

export default SearchResultItems