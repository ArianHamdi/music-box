import { useState, useRef } from 'react'
import styles from './Search.module.scss';
import throttle from 'lodash/throttle'
import { CSSTransition } from 'react-transition-group'
import { useSearchResult } from '../../Hooks/useAPI'
import { useClickOutside } from '../../Hooks/useClickOutside'
import SearctResultItems from './Components/SearchResultItems/SearchResultItems'
import Icon from '../Icon/Icon'
import search from '../../assets/svg/Search.svg'
import Loading from '../Loading/Loading'
import cn from 'classnames'


const Search = () => {

    const searchRef = useRef();
    const resultRef = useRef();

    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false)
    const [activeTab, setActiveTab] = useState('Artists')


    const { data, isSuccess, isLoading, isError } = useSearchResult(query, activeTab)

    const showResult = () => {
        setShow(true)
    }

    // function to hide result when click outside
    const hideResult = () => {
        setShow(false);
    }

    //detect click outside of search area
    useClickOutside(searchRef, hideResult)

    // call api to get serach result with throttle
    const changeInputHandler = throttle(event => {
        setQuery(event.target.value);
    }, 1000, { leading: false })

    //change active tab
    const changeActiveTabHandler = tab => {
        setActiveTab(tab)
    }

    // creates tabs dynamiclly
    const tabs = ['Tracks', 'Albums', 'Artists'].map(tab => {
        const tabStyle = cn([styles.tab], {
            [styles.tabActive]: tab === activeTab
        })
        return (
            <div key={tab} className={tabStyle} onClick={() => changeActiveTabHandler(tab)} >
                <h4>{tab}</h4>
            </div>
        )
    })

    const contentStyle = cn([styles.content], {
        [styles.contentFull]: (isLoading || isError)
    })

    return (
        <div className={styles.search} ref={searchRef} onFocus={showResult}>
            <div className={styles.input}>
                <input type='text' onChange={changeInputHandler} placeholder='Search' />
                <Icon src={search} />
            </div>
            <CSSTransition in={show && (isSuccess || isLoading || isError)} classNames={{ ...styles }} nodeRef={resultRef} timeout={400}>
                <div className={styles.result} ref={resultRef}>
                    <div className={styles.header}>
                        {tabs}
                    </div>
                    <div className={contentStyle}>
                        {isLoading && <Loading position='absolute' size='6rem' />}
                        {data && <SearctResultItems data={data} hideResult={hideResult} />}
                        {isError && <h4 className={styles.notFound}>No Result Found !</h4>}
                    </div>
                </div>
            </CSSTransition>
        </div >

    )
};

export default Search;