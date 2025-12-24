import React from 'react';
import { resumeData } from '../data/resume';

const Hero = () => {
    const { name, role, bio } = resumeData.header;

    return (
        <section className="hero">
            <h1>{name}</h1>
            <p className="tagline">{role}</p>
            <p>{bio}</p>
        </section>
    );
};

export default Hero;
