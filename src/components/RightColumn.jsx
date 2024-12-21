import React from 'react';
import '../styles/RightColumn.css';
import Education from "./Education.jsx";
import Skills from "./Skills.jsx";
import Languages from "./Languages.jsx";

function LeftColumn() {
    return (
        <div className="right-column">
            <Education />
            <Skills />
            <Languages />

        </div>
    );
}

export default LeftColumn;
