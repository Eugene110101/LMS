import styles from './Autorization.module.css';
import icon from '../../../assets/icon_login.png';
function Autorization() {
    return (
        <>
            <div className={styles.autorization}>
                <img className={styles.inputIcon} src={icon} alt="" />
                <a className={styles.autorizationLink} href="">Войти</a>
            </div>
        </>
    );
}

export default Autorization;
