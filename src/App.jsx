import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftColumn from './components/LeftColumn';
import RightColumn from './components/RightColumn';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="content">
                <LeftColumn />
                <RightColumn />
            </div>
            <Footer />
        </div>
    );
}

export default App;
