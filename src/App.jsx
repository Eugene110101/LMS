import React from 'react';
import styles from './App.module.css';
import HeaderSection from './components/HeaderSection/HeaderSection.jsx';
import IntroSection from './components/IntroSection/IntroSection.jsx';

function App() {
    return (
        <main className={styles.mainApp}>
            <HeaderSection />
            <IntroSection />
        </main>
    );
}

export default App;
