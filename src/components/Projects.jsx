import React from 'react';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <div>
            <h2>Projects</h2>
            <div className="projects-grid">
                {resumeData.projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div>
                            <div className="project-title">{project.title}</div>
                            <div className="project-tech">{project.tech}</div>
                            <p className="project-desc-text">
                                {project.points[0]}
                            </p>
                        </div>
                        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem', fontSize: '0.9rem' }}>
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                                GitHub
                            </a>
                            {project.links.live && project.links.live !== '#' && (
                                <a href={project.links.live} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: '#ea9ab2' }}>
                                    Output
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
