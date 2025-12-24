import React from 'react';
import { resumeData } from '../data/resume';

const Experience = () => {
    return (
        <section className="fade-in">
            <h2>Experience</h2>
            {resumeData.experience.map((exp, index) => (
                <div key={index} className="experience-item">
                    <h3 className="exp-role">{exp.role}</h3>
                    <h4 className="exp-company">{exp.company}</h4>
                    <span className="exp-date">{exp.duration}</span>
                    <ul className="project-desc">
                        {exp.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
};

export default Experience;
