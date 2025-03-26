import React, { useState } from 'react';
import styles from './Autorization.module.css';
import FormRegisration from './ModalWindow/FormRegisration.jsx';
import FormLogin from './ModalWindow/FormLogin.jsx';
import icon from '../../../assets/icon_login.png';
function Autorization() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRegistering, setIsRegistering] = useState(true);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleForm = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <>
            <button className={styles.autorizationButton} onClick={openModal}>
                <div className={styles.avatar}>
                    <img className={styles.inputIcon} src={icon} alt="icon" />
                </div>
                <span className={styles.autorizationDescription}>Войти</span>
            </button>

            {isModalOpen && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.close} onClick={closeModal}>
                            &times;
                        </span>
                        <h2 className={styles.modalTitle}>
                            {isRegistering ? 'Регистрация' : 'Авторизация'}
                        </h2>
                        {isRegistering ? <FormRegisration /> : <FormLogin />}
                        <div className={styles.buttonContainer}>
                            <button
                                className={styles.toggleFormButton}
                                onClick={toggleForm}
                            >
                                {isRegistering
                                    ? 'Уже есть аккаунт? Войти'
                                    : 'Еще нет аккаунта? Зарегистрироваться'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Autorization;
