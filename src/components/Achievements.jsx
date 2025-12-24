import React from 'react';
import { resumeData } from '../data/resume';

const Achievements = () => {
    return (
        <section>
            <h2>Achievements</h2>
            <ul className="achievements-list">
                {resumeData.achievements.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Achievements;
