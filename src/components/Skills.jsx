import React from 'react';
import { resumeData } from '../data/resume';

const Skills = () => {
    return (
        <section>
            <h2>Skills</h2>
            <div className="skills-grid">
                {resumeData.skills.map((skill, index) => (
                    <div key={index} className="skill-chip">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
