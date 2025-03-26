import styles from './IntroductionDescription.module.css';

function IntroductionDescription() {
    return (
        <div className={styles.container}>
            <h1 className={styles.introductionTitle}>
                <span className={styles.span}>Обучающая <br /> платформа</span> для старта карьеры в IT и роста
            </h1>
            <p className={styles.introductionSubtitle}>
                Получите знания и опыт ведущих разработчиков из крупных компаний
                и практикуйтесь на реальных проектах
            </p>
        </div>
    );
}

export default IntroductionDescription;
