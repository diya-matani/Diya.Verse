import React from 'react';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className="projects-grid">
                {resumeData.projects.map((project, index) => (
                    <a key={index} href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-card">
                        <div>
                            <div className="project-title">{project.title}</div>
                            <div className="project-tech">{project.tech}</div>
                            <p className="project-desc-text">
                                {project.points[0]}
                            </p>
                        </div>
                        <div style={{ marginTop: '1rem', textAlign: 'right', fontSize: '1.2rem' }}>
                            ↗
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
