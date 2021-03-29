import { useState, useRef } from 'react'
import styles from './Search.module.scss';
import { throttle } from 'lodash'
import { CSSTransition } from 'react-transition-group'
import { useSearchResult } from '../../Hooks/useAPI'
import { useClickOutside } from '../../Hooks/useClickOutside'
import Icon from '../Icon/Icon'
import search from '../../assets/svg/Search.svg'
import Loading from '../Loading/Loading'
import colors from '../../Constant/colors'


const Search = () => {

    const searchRef = useRef();
    const resultRef = useRef();

    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false)
    const [activeTab, setActiveTab] = useState('Artists')


    const { data, isLoading } = useSearchResult(query)

    const showResult = () => {
        setShow(true)
    }

    // function to hide result when click outside
    const hideResult = () => {
        setShow(false);
    }

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
        const backgroundColor = tab === activeTab ? colors.tertiary : 'transparent'
        const color = tab === activeTab ? colors.dark_2 : colors.white_1
        return (
            <div className={styles.tab} style={{ color, backgroundColor }} onClick={() => changeActiveTabHandler(tab)} >
                <h4>{tab}</h4>
            </div>
        )
    })

    const artists = data?.Artists.map(artist => {
        const { id, name, picture_medium: picture } = artist;
        return (
            <div key={id} className={styles.artist}>
                <h5>{name}</h5>
                <img src={picture} alt={name} />
            </div>
        )
    })

    const albums = data?.Albums.map(album => {
        const { id, title, cover_medium: cover } = album;
        return (
            <div key={id} className={styles.artist}>
                <h5>{title}</h5>
                <img src={cover} alt={title} style={{ borderRadius: '10px' }} />
            </div>
        )
    })

    const result = activeTab === 'Artists' ? artists : albums

    return (
        <div className={styles.search} ref={searchRef} onFocus={showResult}>
            <div className={styles.input}>
                <input type='text' onChange={changeInputHandler} placeholder='search' />
                <Icon src={search} />
            </div>
            <CSSTransition in={show && (!!data || isLoading)} classNames={{ ...styles }} nodeRef={resultRef} timeout={400}>
                <div className={styles.result} ref={resultRef}>
                    <div className={styles.header}>
                        {tabs}
                    </div>
                    {isLoading && <Loading position='absolute' size='8rem' />}
                    {!isLoading && result}
                </div>
            </CSSTransition>
        </div >

    )
};

export default Search;