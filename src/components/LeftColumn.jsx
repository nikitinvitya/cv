// src/components/LeftColumn.jsx
import React from 'react';
import WorkExperience from './WorkExperience';
import Projects from './Projects'; // Импортируем новый компонент
import '../styles/LeftColumn.css';

function LeftColumn() {
    return (
        <div className="left-column">
            <WorkExperience />
            <Projects /> {/* Добавляем раздел с проектами */}
        </div>
    );
}

export default LeftColumn;
