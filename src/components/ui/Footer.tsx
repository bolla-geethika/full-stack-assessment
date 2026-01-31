import { Twitter, Github, Linkedin, ShieldCheck } from "lucide-react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-[#022c22] border-t border-teal-900/50 text-emerald-100/60 pt-24 pb-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-amber-400/20 blur-[100px]" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-4 space-y-6">
                        <a href="#" className="flex items-center gap-3 text-white font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
                            <div className="p-2 bg-amber-500 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                                <span className="text-emerald-950 font-bold text-lg">S</span>
                            </div>
                            <span className="tracking-tight">SOLIDROAD</span>
                        </a>
                        <p className="text-emerald-100/60 text-sm leading-relaxed max-w-sm">
                            The automated Quality Management platform that optimizes human and AI agents.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {[
                                { icon: Twitter, label: "Twitter" },
                                { icon: Github, label: "GitHub" },
                                { icon: Linkedin, label: "LinkedIn" }
                            ].map((social, i) => (
                                <a key={i} href="#" aria-label={social.label} className="p-2.5 rounded-full bg-[#064e3b] border border-teal-800 hover:border-amber-500/50 hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-300 group">
                                    <social.icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1: Platform */}
                    <div className="md:col-span-2 md:col-start-6">
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Platform</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">Quality Assurance</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">AI Coaching</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">Performance</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">Integrations</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2: Company */}
                    <div className="md:col-span-2">
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">About Us</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">Careers</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">Blog</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">Contact</a></li>
                        </ul>
                    </div>

                    {/* Links Column 3: Legal */}
                    <div className="md:col-span-2">
                        <h3 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Legal</h3>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">Terms</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">Privacy</a></li>
                            <li><a href="#" className="hover:text-amber-400 transition-colors block">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-teal-900/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-emerald-100/40 font-medium">
                    <p>© 2026 SolidRoad. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0 items-center">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></span>
                            All Systems Operational
                        </span>
                        <div className="h-4 w-[1px] bg-teal-800"></div>
                        <span className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                            <ShieldCheck className="w-3 h-3" /> SOC2 Certified
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}