import React from 'react';
import { resumeData } from '../data/resume';

const Contact = () => {
    const { email, github, linkedin, leetcode, geeksforgeeks, resume } = resumeData.header;

    return (
        <footer className="fade-in">
            <h2>Let's Connect</h2>
            <p style={{ maxWidth: '400px', margin: '0 auto', color: '#666' }}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="contact-links">
                <a href={`mailto:${email}`}>Email</a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
                <a href={geeksforgeeks} target="_blank" rel="noopener noreferrer">GFG</a>
                <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
        </footer>
    );
};

export default Contact;
