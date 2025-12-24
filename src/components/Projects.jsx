import React from 'react';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <section className="fade-in">
            <h2>Projects</h2>
            <div className="projects-grid">
                {resumeData.projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-title">{project.title}</div>
                        <div className="project-tech">{project.tech}</div>
                        <ul className="project-desc">
                            {project.points.slice(0, 2).map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                        <div className="project-links">
                            GitHub | Live
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
