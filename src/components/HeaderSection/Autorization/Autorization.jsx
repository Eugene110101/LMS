import styles from './Autorization.module.css';
import icon from '../../../assets/icon_login.png';
function Autorization() {
    return (
        <>
                <button className={styles.autorizationButton}>
                    <div className={styles.avatar}>
                        <img className={styles.inputIcon} src={icon} alt="icon" />
                    </div>
                    <span className={styles.autorizationDescription}>
                        Войти
                    </span>
                </button>
        </>
    );
}

export default Autorization;
