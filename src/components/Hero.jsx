import React from 'react';
import { resumeData } from '../data/resume';

const Hero = () => {
    const { name, role, bio, github, linkedin, email } = resumeData.header;

    return (
        <div className="hero">
            <h1>{name}</h1>
            <p style={{ fontWeight: '500', color: '#ea9ab2' }}>{role}</p>
            <p>{bio}</p>
            <div className="social-row">
                {/* Simple Icons or Links */}
            </div>
        </div>
    );
};

export default Hero;
