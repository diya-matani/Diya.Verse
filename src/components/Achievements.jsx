import React from 'react';
import { resumeData } from '../data/resume';

const Achievements = () => {
    return (
        <section className="fade-in">
            <h2>Achievements & Awards</h2>
            <ul className="achievements-list" style={{ listStyle: 'none', padding: 0 }}>
                {resumeData.achievements.map((item, index) => (
                    <li key={index}>
                        🏆 {item}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Achievements;
