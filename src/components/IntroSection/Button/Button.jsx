import styles from './Button.module.css';
function Button() {
    return (
        <div className={styles.container}>
            <button className={styles.button}><a className={styles.buttonLink} href="#">Перейти в каталог курсов</a></button>
        </div>
    );
}

export default Button;
