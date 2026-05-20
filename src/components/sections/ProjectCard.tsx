"use client";

import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X, PlaySquare, FileText } from 'lucide-react';
import { ProjectItem } from './types';

interface ProjectCardProps {
    project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const galleryMedia = project.media && project.media.length > 0
        ? project.media
        : [{ url: project.imageSrc || '', type: 'image' as const }];

    const nextSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev === galleryMedia.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentSlide((prev) => (prev === 0 ? galleryMedia.length - 1 : prev - 1));
    };

    return (
        <>
            <div className="glass-panel rounded-2xl p-6 flex flex-col h-full text-left transition-all duration-300 group border border-transparent hover:border-blue-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.5)]">

                <div className="h-40 rounded-xl bg-slate-800/50 mb-6 overflow-hidden relative">
                    {project.imageSrc ? (
                        <>
                            <img
                                src={project.imageSrc}
                                alt={project.title}
                                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
                        </>
                    ) : (
                        <>
                            <div className="absolute inset-0 flex items-center justify-center text-4xl font-black text-slate-800 group-hover:scale-110 transition-transform duration-500 text-center px-2 select-none">
                                {project.placeholderText}
                            </div>
                            <div className={`w-full h-full bg-gradient-to-br ${project.gradientClasses || 'from-slate-800 to-slate-900'}`} />
                        </>
                    )}
                </div>

                <h3 className="text-xl font-bold text-slate-200 mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                    {project.description}
                </p>

                <div className="mt-auto pt-2 flex items-center justify-center gap-3 w-full">

                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/40 border border-slate-700/50 text-blue-300 hover:text-blue-200 font-medium text-sm hover:border-blue-500/50 hover:bg-blue-900/30 transition-all group/btn"
                        >
                            <span>View Project</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </a>
                    ) : (
                        <button
                            onClick={() => {
                                setCurrentSlide(0);
                                setIsModalOpen(true);
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/40 border border-slate-700/50 text-blue-300 hover:text-blue-200 font-medium text-sm hover:border-blue-500/50 hover:bg-blue-900/30 transition-all cursor-pointer"
                        >
                            <PlaySquare className="w-4 h-4 text-blue-400" />
                            <span>View</span>
                        </button>
                    )}

                    {project.pptxUrl && (
                        <a
                            href={project.pptxUrl}
                            download
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/40 border border-slate-700/50 text-cyan-400 hover:text-cyan-300 font-medium text-sm hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all group/pptx"
                            title="Download Presentation Slides"
                        >
                            <FileText className="w-4 h-4 text-cyan-400 transition-transform group-hover/pptx:scale-105" />
                            <span>Slides</span>
                        </a>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="relative max-w-4xl w-full glass-panel bg-slate-900/80 border border-slate-800 p-3 sm:p-6 rounded-2xl flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-slate-950/50 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="w-full text-center mb-4 px-12">
                            <h4 className="text-lg font-bold text-slate-200">{project.title}</h4>
                            <p className="text-xs text-slate-400 mt-0.5">Project Demo Videos & Interface Walkthroughs</p>
                        </div>

                        <div className="relative w-full aspect-[16/10] max-h-[60vh] bg-slate-950/40 rounded-xl overflow-hidden border border-slate-800/80 flex items-center justify-center">
                            {galleryMedia[currentSlide]?.type === 'video' ? (
                                <video
                                    key={galleryMedia[currentSlide].url}
                                    src={galleryMedia[currentSlide].url}
                                    controls
                                    autoPlay
                                    muted
                                    className="w-full h-full object-contain"
                                />
                            ) : galleryMedia[currentSlide]?.url ? (
                                <img
                                    src={galleryMedia[currentSlide].url}
                                    alt={`${project.title} media ${currentSlide + 1}`}
                                    className="w-full h-full object-contain select-none"
                                />
                            ) : (
                                <div className="text-sm text-slate-600 font-medium">No preview asset found</div>
                            )}

                            {galleryMedia.length > 1 && (
                                <>
                                    <button
                                        onClick={prevSlide}
                                        className="absolute left-3 p-2 rounded-full bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-lg backdrop-blur-sm z-10"
                                    >
                                        <ChevronLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={nextSlide}
                                        className="absolute right-3 p-2 rounded-full bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-lg backdrop-blur-sm z-10"
                                    >
                                        <ChevronRight className="w-5 h-5" />
                                    </button>
                                </>
                            )}
                        </div>

                        {galleryMedia.length > 1 && (
                            <div className="flex gap-2 mt-4">
                                {galleryMedia.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentSlide(idx)}
                                        className={`h-2 transition-all rounded-full ${idx === currentSlide
                                            ? 'w-6 bg-blue-400 shadow-[0_0_8px_rgba(56,189,248,0.6)]'
                                            : 'w-2 bg-slate-700 hover:bg-slate-600'
                                            }`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}