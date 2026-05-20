import React from 'react';
import SkillGroupCard from './SkillGroupCard';
import { skillCategories } from './data/skills';

export default function Skills() {
    return (
        <section id="skills" className="py-24 flex items-center justify-center px-4">
            <div className="max-w-5xl mx-auto w-full">
                <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category) => (
                        <SkillGroupCard key={category.title} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
}