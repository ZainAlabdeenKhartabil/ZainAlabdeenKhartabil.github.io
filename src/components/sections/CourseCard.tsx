import React from 'react';
import { CourseItem } from './types';
import { HiBookOpen } from "react-icons/hi2";

interface CourseCardProps {
    course: CourseItem;
}

export default function CourseCard({ course }: CourseCardProps) {
    return (
        <div className={`glass-panel rounded-2xl p-8 border-l-4 ${course.borderColor}`}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <div>
                    <div className="flex items-center gap-2">
                        <HiBookOpen className="w-6 h-6 text-slate-100 flex-shrink-0" />
                        <h3 className="text-2xl font-bold text-slate-100">{course.title}</h3>
                    </div>
                    <p className={`${course.textColor} text-lg font-medium`}>{course.provider}</p>
                </div>
                <div className="text-left md:text-right">
                    <span className="block text-slate-400 font-medium">{course.date}</span>
                </div>
            </div>
        </div>
    );
}