import styles from './HeaderSection.module.css';
import Navigation from '../HeaderSection/Navigation/Navigation.jsx';

function HeaderSection() {
    return (
        <header className ={styles.header_header}>
            <Navigation />
        </header>
    );
}

export default HeaderSection;
