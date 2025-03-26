import styles from './FormLogin.module.css';
import loginForm from '../../../../assets/loginForm.svg';
function FormLogin() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.formImageContainer}>
                <img className={styles.formImage} src={loginForm} alt="image"/>
            </div>
        <form className={styles.form}>
            <label className={styles.label} htmlFor="email">Email:</label>
            <input className={styles.input} type="email" id="email" name="email" />
            <label className={styles.label} htmlFor="password">Пароль:</label>
            <input className={styles.input}
                type="password"
                id="password"
                name="password"
            />
            <button className={styles.button} type="submit">Войти</button>
        </form>
        </div>
        </>
    );
}

export default FormLogin;
