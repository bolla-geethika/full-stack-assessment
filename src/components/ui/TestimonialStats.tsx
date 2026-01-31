import { Quote, ArrowRight } from "lucide-react";

export default function TestimonialStats() {
    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden flex items-center justify-center">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-950 to-slate-950"></div>

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Glass Card Container */}
                    <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[3rem] p-8 md:p-16 text-center overflow-hidden group">

                        {/* Decorative Quotes */}
                        <div className="absolute top-10 left-10 text-indigo-500/20">
                            <Quote size={120} className="fill-current" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-sm tracking-wide uppercase">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                Success Story · StreamLine Inc.
                            </div>

                            <blockquote className="text-3xl md:text-5xl font-bold text-white leading-tight mb-10 tracking-tight">
                                "Before this platform, we were guessing. Now we know exactly what makes our top agents successful and can <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">replicate it instantly.</span>"
                            </blockquote>

                            <div className="flex flex-col items-center gap-4 mb-12">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-[2px]">
                                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xl">
                                        MJ
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold text-white text-lg">Marcus Johnson</div>
                                    <div className="text-slate-400 font-medium">Director of Customer Support</div>
                                </div>
                            </div>

                            {/* Stats Row */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-10">
                                <div>
                                    <div className="text-4xl font-extrabold text-white mb-1">2.5x</div>
                                    <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">ROI in 6 Months</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-extrabold text-white mb-1">10k+</div>
                                    <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Sessions Run</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-extrabold text-white mb-1">-40%</div>
                                    <div className="text-slate-500 text-sm font-semibold uppercase tracking-wider">Onboarding Time</div>
                                </div>
                            </div>
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-[2s] pointer-events-none"></div>
                    </div>

                    <div className="text-center mt-10">
                        <button className="text-slate-400 hover:text-white font-semibold inline-flex items-center gap-2 transition-colors group">
                            Read full case study <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
