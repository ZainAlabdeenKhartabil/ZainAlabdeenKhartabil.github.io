import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from './data/projects';

export default function Projects() {
    return (
        <section id="projects" className="py-24 flex items-center justify-center px-4">
            <div className="max-w-5xl mx-auto w-full">
                <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}