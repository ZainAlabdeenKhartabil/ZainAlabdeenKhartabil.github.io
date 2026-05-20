import React from "react";

const About = () => {
    return (
        <section id="about" className="py-24 flex items-center justify-center px-4 mt-12">
            <div className="max-w-5xl mx-auto w-full text-center">
                <h2 className="text-4xl font-bold mb-8">About Me</h2>
                <div className="glass-panel rounded-3xl p-8 lg:p-12">
                    <p className="text-lg text-slate-300 leading-relaxed text-left md:text-center">
                        Software engineer with <span className="text-blue-400 font-semibold">+4 years of experience</span>
                        developing web applications and business intelligence solutions.
                        Skilled in designing and delivering data-driven systems that support business decision-making and operational efficiency.
                        Experienced across the full development lifecycle, from requirements gathering and system design to deployment, maintenance, and production support.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;