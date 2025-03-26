import styles from './IntroductionNavigation.module.css';

function IntroductionNavigation() {
    return (
        <div className={styles.navigation}>
            <ul className={styles.navigationList}>
                <li className={styles.navigationItem}>
                    <a className={styles.navigationLink} href="#!">
                        HTML
                    </a>
                </li>
                <li className={styles.navigationItem}>
                    <a className={styles.navigationLink} href="#!">
                        CSS
                    </a>
                </li>
                <li className={styles.navigationItem}>
                    <a className={styles.navigationLink} href="#!">
                        JavaScript
                    </a>
                </li>
                <li className={styles.navigationItem}>
                    <a className={styles.navigationLink} href="#!">
                        React.js
                    </a>
                </li>
                <li className={styles.navigationItem}>
                    <a className={styles.navigationLink} href="#!">
                        Node.js
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default IntroductionNavigation;
