import React from 'react';
import EducationCard from './EducationCard';
import { educationData } from './data/education';

export default function Education() {
    return (
        <section id="education" className="py-24 flex items-center justify-center px-4">
            <div className="max-w-5xl mx-auto w-full">
                <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
                <div className="flex flex-col gap-6">
                    {educationData.map((edu, index) => (
                        <EducationCard key={index} edu={edu} />
                    ))}
                </div>
            </div>
        </section>
    );
}