import React, { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import withData from '../../HOC/withData'
import { useDataUpdate } from '../../Contexts/data-context'

import styles from './Carousel.module.scss';
import Header from './Header/Header'
import { useCount } from '../../Hooks/useCount'

const Carousel = ({ children }) => {

    const [activeItem, setActiveItem] = useState(0);

    const setData = useDataUpdate();

    const count = useCount();

    useEffect(() => {
        setData({ setActiveItem, count });
    }, [setData])

    const items = React.Children.toArray(children).slice(activeItem, count + activeItem)

    return (
        <div className={styles.carousel}>
            <Header />
            <div className={styles.items} >
                {items}
            </div>
        </div>
    )
}

export default withData(Carousel);