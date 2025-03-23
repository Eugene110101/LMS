import React from 'react';
import Navigation from './components/Header/Navigation/Navigation.jsx';
import Header_description from './components/Header-description/Header_description.jsx';
import styles from './App.module.css';

function App() {
    const header_description =
        'Обучающая платформа для старта карьеры в IТ и личностного роста';
    return (
        <main className={styles.mainApp}>
            <Navigation />
            <Header_description text={header_description} />
        </main>
    );
}

export default App;
