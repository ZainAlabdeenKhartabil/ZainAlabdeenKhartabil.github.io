import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 flex items-center justify-center px-4 pb-20">
            <div className="max-w-4xl mx-auto w-full">
                <div className="glass-panel rounded-3xl p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
                        <p className="text-slate-400 mb-8 text-lg">
                            I'm currently available for freelance work and open to new opportunities. Reach out if you'd like to collaborate on an exciting project.
                        </p>
                        <a href="mailto:zainalabdeenkhartabil@gmail.com" className="inline-block px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors">
                            Say Hello
                        </a>
                    </div>

                    <div className="flex-1 flex flex-col gap-6 w-full max-w-sm">
                        <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-slate-400">Location</p>
                                <p className="text-slate-200 font-medium">Bucharest, Romania</p>
                            </div>
                        </div>

                        <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-slate-400">Phone</p>
                                <p className="text-slate-200 font-medium">(+40) 791 434 445</p>
                            </div>
                        </div>

                        <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-sky-900/50 flex items-center justify-center text-sky-400">
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="text-left">
                                <p className="text-sm text-slate-400">Email</p>
                                <a href="mailto:zainalabdeenkhartabil@gmail.com" className="text-slate-200 font-medium hover:text-blue-400 transition-colors block text-sm sm:text-base break-all">ZainAlabdeenKhartabil@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}