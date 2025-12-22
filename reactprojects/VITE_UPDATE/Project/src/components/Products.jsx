import React from 'react';

const products = [
    {
        name: "Antigravity Cloud",
        description: "Serverless backend for front-end developers.",
        tag: "Popular",
        color: "from-blue-500 to-cyan-500"
    },
    {
        name: "Antigravity Teams",
        description: "Enterprise management and security for large orgs.",
        tag: "New",
        color: "from-purple-500 to-pink-500"
    },
];

const Products = () => {
    return (
        <section id="products" className="py-24 bg-slate-900 border-t border-slate-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Ecosystem</h2>
                        <p className="text-slate-400 text-lg">More than just an editor.</p>
                    </div>
                    <button className="hidden md:block text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                        View all products →
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, idx) => (
                        <div key={idx} className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer">
                            <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                            <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-white/20 transition-colors"></div>

                            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold mb-3 tracking-wider uppercase border border-white/10">
                                    {product.tag}
                                </span>
                                <h3 className="text-3xl font-bold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                                    {product.name}
                                </h3>
                                <p className="text-slate-300 opacity-80 group-hover:opacity-100 transition-opacity">
                                    {product.description}
                                </p>
                            </div>

                            {/* Abstract Shapes */}
                            <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${product.color} rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-all duration-500 group-hover:scale-125`}></div>
                        </div>
                    ))}
                </div>

                <button className="mt-8 md:hidden w-full py-4 text-purple-400 font-semibold border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition-colors">
                    View all products →
                </button>
            </div>
        </section>
    );
};

export default Products;
