import styles from './IntroSection.module.css';
import IntroductionNavigation from './IntroductionNavigation/IntroductionNavigation.jsx';
import IntroductionDescription from './IntroductionDescription/IntroductionDescription.jsx';
import Button from './Button/Button.jsx';
function IntroSection() {
    return (
        <div className={styles.introSection}>
            <IntroductionNavigation />
            <IntroductionDescription />
            <Button />
        </div>
    );
}

export default IntroSection;
