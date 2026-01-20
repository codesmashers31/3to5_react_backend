import React from 'react';

const featuresList = [
    {
        title: "AI-Powered Autocomplete",
        description: "Predicts your next move with 99% accuracy using our proprietary LLM.",
        icon: "⚡",
    },
    {
        title: "Instant Live Preview",
        description: "See changes in real-time without reloading. Supports React, Vue, and Svelte.",
        icon: "👁️",
    },
    {
        title: "Collaborative Coding",
        description: "Pair program with your team in real-time, low latency sessions.",
        icon: "👥",
    },
    {
        title: "Cloud Sync",
        description: "Access your workspace from any device, anywhere. Your code follows you.",
        icon: "☁️",
    },
    {
        title: "Zero-Config Deploys",
        description: "Deploy to production with a single click directly from the editor.",
        icon: "🚀",
    },
    {
        title: "Custom Extensions",
        description: "Build specific tools for your workflow with our robust plugin API.",
        icon: "🧩",
    },
];

const Features = () => {
    return (
        <section id="features" className="py-24 relative bg-slate-950/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Why choose <span className="text-gradient">Antigravity?</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Tools designed to enhance your workflow, not get in the way.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuresList.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-panel p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className="text-4xl mb-6 bg-slate-800 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
