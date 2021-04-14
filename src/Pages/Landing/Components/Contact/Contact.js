import styles from './Contact.module.scss'
import { SocialIcon } from 'react-social-icons'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <h3 className={styles.title}>
                Contact :
            </h3>
            <div className={styles.icons}>
                <SocialIcon className={styles.icon} url="https://www.linkedin.com/in/arian-hamdi-575473195/"  fgColor='white'/>
                <SocialIcon className={styles.icon} url="https://mail.google.com/mail/?view=cm&fs=1&to=arian.hamdi@gmail.com" 
                network='email' bgColor='#e83427' fgColor='white' />
                <SocialIcon className={styles.icon} url="https://t.me/Arian_Hamdi" network='telegram' fgColor='white'/>
            </div>
        </div>
    )
}

export default Contact;