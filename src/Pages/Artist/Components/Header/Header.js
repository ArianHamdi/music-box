import styles from './Header.module.scss';

import { numberWithCommas } from '../../../../utilities/utilities'

import Button from '../../../../Components/Button/Button'
import Icon from '../../../../Components/Icon/Icon'

import favorite from '../../../../assets/SVGs/Favorite.svg'

const Header = ({ name, fans, picture, color }) => {

    return (
        <div className={styles.header}>
            <img src={picture} alt="artist" />
            {name && color && <>
                <div className={styles.artist} style={{ color }}>
                    <h6>Artist</h6>
                    <h3>{name}</h3>
                </div>
                <div className={styles.panel}>
                    <div >
                        <Button className={styles.button} title='shuffle play' color={color} uppercase invert />
                        <Icon Src={favorite} size={20} fill={color} invert />
                    </div>
                    <p style={{ color }}>{numberWithCommas(fans)}<span>folowers</span></p>
                </div>
            </>}
        </div>
    )
}

export default Header;