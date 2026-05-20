import React from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from './data/experiences';

export default function Experience() {
    return (
        <section id="experience" className="py-24 flex items-center justify-center px-4">
            <div className="max-w-5xl mx-auto w-full">
                <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
                <div className="flex flex-col gap-6">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}