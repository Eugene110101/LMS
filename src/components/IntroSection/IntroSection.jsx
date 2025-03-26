import styles from './IntroSection.module.css';
import IntroductionNavigation from './IntroductionNavigation/IntroductionNavigation.jsx';
import IntroductionDescription from './IntroductionDescription/IntroductionDescription.jsx';
import Button from './Button/Button.jsx';
import image from '../../assets/IntroImage.svg';
function IntroSection() {
    return (
        <div className={styles.introSection}>
            <div>
            <IntroductionNavigation />
            <IntroductionDescription />
            <Button />
            </div>
            <div>
                <img src={image} alt="" />
            </div>
        </div>
    );
}

export default IntroSection;
