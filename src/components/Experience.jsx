import React from 'react';
import { resumeData } from '../data/resume';

const Experience = () => {
    return (
        <section>
            <h2>Experience</h2>
            {resumeData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company} | {exp.duration}</h4>
                    <ul className="project-desc" style={{ textAlign: 'left', display: 'inline-block', maxWidth: '90%' }}>
                        {exp.points.map((point, idx) => (
                            <li key={idx} style={{ marginBottom: '0.3rem', fontSize: '0.9rem' }}>• {point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Experience;
