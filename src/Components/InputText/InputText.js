import styles from './InputText.module.scss';

import Icon from '../Icon/Icon'
import search from '../../assets/SVGs/Search.svg'


const InputText = props => {
    return (
        <div className={styles.inputText}>
            <input type='text' {...props} />
            <Icon src={search} />
        </div>
    )
};

export default InputText;