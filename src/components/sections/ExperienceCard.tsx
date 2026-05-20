import React from 'react';
import { ExperienceItem } from './types';
import { HiBriefcase } from "react-icons/hi2";

interface ExperienceCardProps {
    exp: ExperienceItem;
}

export default function ExperienceCard({ exp }: ExperienceCardProps) {
    return (
        <div className={`glass-panel rounded-2xl p-8 border-l-4 ${exp.borderColor}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                    <div className="flex items-center gap-2.5">
                        <HiBriefcase className="text-2xl" />
                        <h3 className="text-2xl font-bold text-slate-100">{exp.role}</h3>
                    </div>
                    <p className={`${exp.textColor} text-lg font-medium`}>{exp.company}</p>
                </div>
                <div className="text-left md:text-right">
                    <span className="block text-slate-400 font-medium">{exp.period}</span>
                    {exp.location && (
                        <span className="text-sm text-slate-500">{exp.location}</span>
                    )}
                </div>
            </div>
            <ul className={`list-disc list-inside text-slate-300 space-y-2 mt-4 ${exp.markerColor}`}>
                {exp.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>
        </div>
    );
}