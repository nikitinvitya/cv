// src/components/Projects.jsx
import React from 'react';
import Project from './Project';
import '../styles/Projects.css';

function Projects() {
    const projects = [
        {
            title: 'Lamoda',
            description: 'The "Lamoda" project is an e-commerce web application with filtering and sorting functionalities for products. It allows users to filter products by name, description, color, and price, while supporting sorting by price and rating.',
            technologies: 'React, Node.js, CSS',
            link: 'https://github.com/nikitinvitya/Lamoda'
        },
        {
            title: 'API & SPA',
            description: 'The "API & SPA" project is a single-page application that fetches data from an external API (such as jsonplaceholder.typicode.com) and displays it across multiple pages using React Router. The app includes pages for users, user details, photo albums, and individual photos with a navigation bar to switch between them. The app also features dynamic loading indicators and custom 404 pages for unsupported routes.',
            technologies: 'React, Tailwind, React-router-dom',
            link: 'https://github.com/nikitinvitya/API-SPA'
        },
        {
            title: 'Todoist',
            description: 'The "Todoist" project is a sophisticated task management application that supports complex filtering capabilities. Users can filter tasks by completion status, search keywords, importance, and tags, and the app provides real-time updates as changes are made. It also allows tasks to be edited, with an option to generate 1000 tasks for testing.',
            technologies: 'React, Tailwind, Node.js',
            link: 'https://github.com/nikitinvitya/Todoist'
        },
        {
            title: 'Notion',
            description: 'This is a multi-user web application for managing notes, allowing users to register, log in, create, edit, delete, and view their notes. The application provides a user-friendly and intuitive interface with features like sorting, searching, and pagination of notes. It also implements secure authorization and data validation to ensure reliable functionality.',
            technologies: 'React, Node.js, CSS, JSON',
            link: 'https://github.com/nikitinvitya/Notion'
        }
    ];

    return (
        <section>
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
