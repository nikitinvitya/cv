import React from 'react';
import '../styles/Project.css';

function Project({ title, description, technologies, link}) {
    return (
        <div className="project-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Technologies:</strong> {technologies}</p>
            <a href={link} target={"_blank"}>Link to GitHub</a>
        </div>
    );
}

export default Project;
