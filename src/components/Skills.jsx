import React from 'react';
import '../styles/Skills.css';

function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <ul>
                <li>Backend
                    <ul>
                        <li>Python</li>
                        <li>NodeJS</li>
                    </ul>
                </li>
                <li>Frontend
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>TailwindCSS</li>
                    </ul>
                </li>
                <li>Database
                    <ul>
                        <li>SQL</li>
                        <li>Transact-SQL</li>
                    </ul>
                </li>
                <li>Other                    <ul>
                        <li>Git</li>
                        <li>npm</li>
                        <li>yarn</li>
                    </ul>
                </li>
            </ul>
        </section>
    );
}

export default Skills;
