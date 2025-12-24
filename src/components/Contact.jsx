import React from 'react';
import { resumeData } from '../data/resume';

const Contact = () => {
    const { email, linkedin, github } = resumeData.header;

    return (
        <footer className="fade-in">
            <h2>Get In Touch</h2>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>
            <div className="contact-links">
                <a href={`mailto:${email}`} title="Email">📧</a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">🔗</a>
                <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub">💻</a>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.8rem' }}>
                Designed with ❤️ by Diya Matani
            </p>
        </footer>
    );
};

export default Contact;
