import styles from './InputRange.module.scss';

import styled from 'styled-components'

const Effect = styled.input(props => ` 
    &::-webkit-slider-runnable-track{
        background-image: linear-gradient(to right,${props.from} 0%,
            ${props.to} ${props.value}%, 
            var(--color-grey-1) ${props.value}%,var(--color-grey-1) 100% );
    }

    &::-webkit-slider-thumb{
        background-color : ${props.thumb}
    }
`)

const InputRange = props => {

    const { width, ...other } = props;

    return (
        <Effect type='range' className={styles.input} style={{ width }} {...other} />
    )


}
export default InputRange;
