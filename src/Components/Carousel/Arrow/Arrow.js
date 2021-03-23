import React from 'react'
import styles from './Arrow.module.scss';

import Icon from '../../../Components/Icon/Icon'

import next from '../../../assets/SVGs/next.svg'
import previous from '../../../assets/SVGs/previous.svg'

import { useData } from '../../../Contexts/data-context'

const Arrow = () => {

    const { children, count, setActiveItem } = useData();

    const nextItemHandler = () => {
        setActiveItem(prevState => {
            const length = React.Children.count(children);
            //check if next item is not available
            return prevState + count < length ? prevState + 1 : prevState
        })
    }
    const prevItemHandler = () => {
        setActiveItem(prevState => {
            // check if item eqaul to 0
            return prevState ? prevState - 1 : prevState
        })
    }

    return (
        <div className={styles.buttons}>
            <Icon src={previous} onClick={prevItemHandler} />
            <Icon src={next} onClick={nextItemHandler} />
        </div>
    )
}

export default Arrow;
