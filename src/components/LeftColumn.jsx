import React from 'react';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import '../styles/LeftColumn.css';

function LeftColumn() {
    return (
        <div className="left-column">
            <WorkExperience />
            <Projects /> 
        </div>
    );
}

export default LeftColumn;
