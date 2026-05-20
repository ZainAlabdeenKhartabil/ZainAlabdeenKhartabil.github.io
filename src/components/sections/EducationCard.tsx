import React from 'react';
import { EducationItem } from './types';
import { HiAcademicCap } from "react-icons/hi2";

interface EducationCardProps {
    edu: EducationItem;
}

export default function EducationCard({ edu }: EducationCardProps) {
    return (
        <div className={`glass-panel rounded-2xl p-8 border-l-4 ${edu.borderColor}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <HiAcademicCap className="w-6 h-6 text-slate-100 flex-shrink-0" />
                        <h3 className="text-2xl font-bold text-slate-100">{edu.degree}</h3>
                    </div>
                    <p className={`${edu.textColor} text-lg font-medium`}>{edu.institution}</p>
                </div>
                <div className="text-left md:text-right">
                    <span className="block text-slate-400 font-medium">{edu.period}</span>
                    <span className="text-sm text-slate-500">{edu.location}</span>
                </div>
            </div>
        </div>
    );
}