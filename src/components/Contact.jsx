import React from 'react';
import { resumeData } from '../data/resume';

const Contact = () => {
    const { email, github, linkedin, leetcode, geeksforgeeks, resume } = resumeData.header;

    return (
        <footer style={{ marginTop: '0', background: 'transparent' }}>
            <h2>Get In Touch</h2>
            <p style={{ maxWidth: '400px', margin: '0 auto', color: '#666' }}>
                Let's build something amazing together.
            </p>
            <div className="contact-links">
                <a href={`mailto:${email}`}>Email</a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
                <a href={geeksforgeeks} target="_blank" rel="noopener noreferrer">GFG</a>
                <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
            <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#aaa' }}>
                © 2024 Diya Matani
            </p>
        </footer>
    );
};

export default Contact;
