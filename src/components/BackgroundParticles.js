import React from 'react';

const BackgroundParticles = () => {
    const particles = [];

    for (let i = 0; i < 100; i++) {
        particles.push(
            <div key={i} className="particle-container">
                <div className="particle"></div>
            </div>
        );
    }

    return (
        <div className="background-container">
            { particles }
        </div>
    );
};

export default BackgroundParticles;