import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <h1>Victar Nikitsin</h1>
                <div className="header-links">
                    <a href="https://github.com/nikitinvitya" target="_blank" rel="noopener noreferrer">GitHub</a>&nbsp;
                    <a href="mailto:mmf.nikitinVY@bsu.by">Email</a>&nbsp;
                    <a href="https://t.me/Fityaaa" target="_blank" rel="noopener noreferrer">Telegram</a>
                </div>
            </div>
            <p>Web-Developer</p>
            <p>I am a student at Belarusian State University, Faculty of Mechanics and Mathematics. I am passionate about finding creative solutions to complex problems and strive to develop efficient, user-oriented web applications. I am actively growing my skills in web development and always looking for opportunities to improve and innovate.</p>
        </header>
    );
}

export default Header;
