import React from 'react';
import CourseCard from './CourseCard';
import { courses } from './data/courses';

export default function Courses() {
    return (
        <section id="courses" className="py-24 flex items-center justify-center px-4">
            <div className="max-w-5xl mx-auto w-full">
                <h2 className="text-4xl font-bold mb-12 text-center">Courses</h2>
                <div className="flex flex-col gap-6">
                    {courses.map((course, index) => (
                        <CourseCard key={index} course={course} />
                    ))}
                </div>
            </div>
        </section>
    );
}