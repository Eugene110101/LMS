import styles from './Navigation.module.css';
import Logo from '../Logotip/Logo.jsx';
import Autorization from '../Autorization/Autorization.jsx';

function Navigation() {
    return (
        <>
            <header>
                <div className={styles.headerSection}>
                    <div className={styles.logoContainer}>
                    <Logo />
                    </div>
                    <nav>
                        <ul className={styles.navList}>
                            <li className={styles.navItem}>
                                <a className={styles.navLink} href="">
                                    Курсы
                                </a>
                            </li>
                            <li className={styles.navItem}>
                                <a className={styles.navLink} href="">
                                    Полезное
                                </a>
                            </li>
                            <li className={styles.navItem}>
                                <a className={styles.navLink} href="">
                                    База знаний
                                </a>
                            </li>
                            <li className={styles.navItem}>
                                <a className={styles.navLink} href="">
                                    Поддержка
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <Autorization/>
                </div>
            </header>
        </>
    );
}

export default Navigation;
