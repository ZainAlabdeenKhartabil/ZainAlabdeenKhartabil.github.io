import React from 'react';
import SkillBadge from './SkillBadge';
import { SkillCategory } from './types';

interface SkillGroupCardProps {
    category: SkillCategory;
}

export default function SkillGroupCard({ category }: SkillGroupCardProps) {
    return (
        <div className="glass-panel rounded-3xl p-8 hover:border-blue-500/30 transition-colors">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                    <SkillBadge key={skill} skill={skill} />
                ))}
            </div>
        </div>
    );
}