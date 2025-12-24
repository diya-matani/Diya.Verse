import React from 'react';
import { resumeData } from '../data/resume';

const Hero = () => {
    const { name, role, bio } = resumeData.header;

    return (
        <div className="hero">
            <h1>{name}</h1>
            <p style={{ fontWeight: '500', color: '#ea9ab2', marginBottom: '1.5rem' }}>{role}</p>

            <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                    color: '#2563eb', // Blue like the screenshot
                    fontSize: '1rem',
                    fontWeight: '400',
                    marginBottom: '0.2rem',
                    fontFamily: 'var(--font-body)'
                }}>
                    Graduating College
                </h3>
                <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    margin: 0
                }}>
                    B.Tech in CSE, Sep 2022 - Jun 2026
                </p>
            </div>

            <p>{bio}</p>
            <div className="social-row">
                {/* Simple Icons or Links */}
            </div>
        </div>
    );
};

export default Hero;
