import React from 'react';

const Hero = () => {
    const handleDownload = () => {
        // Placeholder for actual download logic
        alert("Starting download for Antigravity IDE...");
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 text-center z-10">
                <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium animate-fade-in-up">
                    🚀 Next Gen Coding Experience
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                    Code with <span className="text-gradient">Antigravity</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                    The most advanced AI-powered IDE designed to lift the weight of coding off your shoulders. Fast, intelligent, and beautiful.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <button
                        onClick={handleDownload}
                        className="group relative px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)]"
                    >
                        Download IDE
                        <span className="absolute inset-0 rounded-lg ring-2 ring-white/20 group-hover:ring-white/40 transition-all"></span>
                    </button>

                    <button
                        onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold text-lg border border-slate-700 transition-all duration-300"
                    >
                        Learn More
                    </button>
                </div>

                {/* Mock UI Preview */}
                <div className="mt-20 mx-auto max-w-5xl glass-panel rounded-xl p-2 md:p-4 opacity-90 transform rotate-x-12 hover:rotate-0 transition-transform duration-700 perspective-1000">
                    <div className="bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
                        <div className="flex items-center px-4 py-2 bg-slate-900 border-b border-slate-800 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="ml-4 text-xs text-slate-500 font-mono">App.jsx</div>
                        </div>
                        <div className="p-6 font-mono text-sm text-left">
                            <div className="text-pink-400">const <span className="text-blue-400">Antigravity</span> = () <span className="text-pink-400">=&gt;</span> {"{"}</div>
                            <div className="pl-4 text-slate-300"> <span className="text-purple-400">return</span> (</div>
                            <div className="pl-8 text-green-300">&lt;FutureOfCoding /&gt;</div>
                            <div className="pl-4 text-slate-300"> );</div>
                            <div className="text-pink-400">{"}"}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
