import styles from './Logo.module.css';
import logo2 from '../../../assets/logo2.png';

function Logo() {
    return (
        <a className={styles.logoLink} href="">
            <img className={styles.headerLogo} src={logo2} alt="logo" />
            <h1 className={styles.logoTitle}>PurpleSchool</h1>
        </a>
    );
}

export default Logo;
