import styles from './Logo.module.css';
import logo from '../../../assets/logo.png';

function Logo() {
    return (
        <a className={styles.logoLink} href="">
            <img className={styles.headerLogo} src={logo} alt="logo" />
            <h1 className={styles.logoTitle}>PurpleSchool</h1>
        </a>
    );
}

export default Logo;
