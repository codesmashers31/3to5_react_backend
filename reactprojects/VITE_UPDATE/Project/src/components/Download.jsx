import React, { useState } from 'react';

const Download = () => {
    const [activeTab, setActiveTab] = useState('windows');

    const osData = {
        windows: {
            name: 'Windows',
            icon: '🪟',
            version: 'v2.4.0 (64-bit)',
            requirements: 'Windows 10/11, 8GB RAM',
            downloadUrl: '#',
            color: 'blue'
        },
        mac: {
            name: 'macOS',
            icon: '🍎',
            version: 'v2.4.0 (Universal)',
            requirements: 'macOS 12+, Apple Silicon / Intel',
            downloadUrl: '#',
            color: 'purple'
        },
        linux: {
            name: 'Linux',
            icon: '🐧',
            version: 'v2.4.0 (Debian/RPM)',
            requirements: 'Ubuntu 20.04+, Fedora 36+',
            downloadUrl: '#',
            color: 'orange'
        }
    };

    const handleDownload = (os) => {
        alert(`Starting download for ${osData[os].name}...`);
    };

    return (
        <section id="download" className="py-24 relative overflow-hidden bg-slate-900/50">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Download <span className="text-gradient">Antigravity</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Experience the future of coding on your preferred platform.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-8 md:p-12">
                    {/* Tabs */}
                    <div className="flex justify-center mb-12 gap-2 md:gap-4 flex-wrap">
                        {Object.keys(osData).map((key) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === key ? 'bg-white text-black scale-105 shadow-lg' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                            >
                                <span className="text-xl">{osData[key].icon}</span>
                                {osData[key].name}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row items-center gap-12 animate-fade-in">
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-4xl font-bold mb-2">{osData[activeTab].name}</h3>
                            <div className="inline-block px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-400 mb-6 font-mono">
                                {osData[activeTab].version}
                            </div>

                            <ul className="space-y-3 mb-8 text-slate-300 text-left mx-auto md:mx-0 max-w-xs">
                                <li className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">✓</span>
                                    Auto-updates enabled
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">✓</span>
                                    CLI tools included
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-5 h-5 rounded-full bg-slate-500/20 flex items-center justify-center text-slate-400 text-xs">ℹ</span>
                                    {osData[activeTab].requirements}
                                </li>
                            </ul>

                            <button
                                onClick={() => handleDownload(activeTab)}
                                className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold rounded-xl text-lg transition-all shadow-lg hover:shadow-cyan-500/25 active:scale-95 flex items-center justify-center gap-3"
                            >
                                Download for {osData[activeTab].name}
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                            </button>
                            <p className="mt-4 text-xs text-slate-500">
                                By downloading, you agree to our Terms of Service.
                            </p>
                        </div>

                        <div className="flex-1 w-full max-w-sm">
                            <div className="relative aspect-square bg-slate-800 rounded-2xl p-4 border border-slate-700 shadow-2xl overflow-hidden group">
                                <div className={`absolute inset-0 bg-${osData[activeTab].color}-500/10 blur-3xl transition-colors duration-500`}></div>
                                <div className="relative h-full bg-slate-900 rounded-xl flex items-center justify-center flex-col gap-4 border border-slate-700/50">
                                    <span className="text-8xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 group-hover:scale-110">
                                        {osData[activeTab].icon}
                                    </span>
                                    <div className="h-2 w-16 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent w-[50%] animate-loading-bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Download;
