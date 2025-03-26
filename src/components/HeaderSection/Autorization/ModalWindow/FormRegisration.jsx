import styles from './FormRegistration.module.css';
import registrationForm from '../../../../assets/registrationForm.svg';
function FormRegisration() {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.formImageContainer}>
                <img className={styles.formImage} src={registrationForm} alt="image"/>
            </div>
        </div>
        <form className={styles.form}>
            <label className={styles.label} htmlFor="username">Имя пользователя:</label>
            <input className={styles.input} type="text" id="username" name="username" />
            <label className={styles.label} htmlFor="email">Email:</label>
            <input className={styles.input} type="email" id="email" name="email" />
            <label className={styles.label} htmlFor="password">Пароль:</label>
            <input className={styles.input}
                type="password"
                id="password"
                name="password"
            />
            <button className={styles.button} type="submit">Зарегистрироваться</button>
        </form>
        </>
    );
}

export default FormRegisration;
