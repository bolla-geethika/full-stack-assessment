import { Hexagon, Command, Ghost, Activity, Gem, Feather } from "lucide-react";

export default function LogoTicker() {
    const logos = [
        { name: "Acme", icon: Hexagon, color: "text-amber-400" },
        { name: "Quantum", icon: Command, color: "text-teal-400" },
        { name: "Echo", icon: Ghost, color: "text-indigo-400" },
        { name: "Pulse", icon: Activity, color: "text-rose-400" },
        { name: "Gemini", icon: Gem, color: "text-blue-400" },
        { name: "Apex", icon: Feather, color: "text-emerald-400" },
    ];

    return (
        <section className="py-20 bg-[#022c22] relative overflow-hidden border-y border-white/5">
            <div className="container px-4 md:px-6 mx-auto text-center mb-10">
                <p className="text-sm font-semibold uppercase tracking-widest text-emerald-100/50">Trusted by modern support teams</p>
            </div>
            <div className="flex overflow-hidden group">
                <div className="flex gap-20 animate-infinite-scroll group-hover:paused w-max pl-20">
                    {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-pointer">
                            <logo.icon className={`w-8 h-8 ${logo.color}`} />
                            <span className="text-xl font-bold text-white tracking-tight">{logo.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
