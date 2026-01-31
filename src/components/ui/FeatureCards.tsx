import { MessageSquare, Shield, Lock, BarChart3 } from "lucide-react";

export default function FeatureCards() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        Why industry leaders <span className="text-amber-400">choose us.</span>
                    </h2>
                    <p className="text-base text-emerald-100/70 max-w-2xl mx-auto">
                        Scalable, secure, and built by experts.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 max-w-6xl mx-auto">

                    {/* Card 1: Built by CX Experts (White) - Spans 5 cols */}
                    <div className="lg:col-span-5 bg-white rounded-2xl p-6 flex flex-col justify-between shadow-xl min-h-[260px] group hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600">
                                <MessageSquare className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-emerald-950">Built by CX Experts</h3>
                            <p className="text-sm text-emerald-900/60 leading-relaxed">
                                We've led support teams at high-growth startups and Fortune 500s. We know the pain of scaling quality assurance.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Stack Integrations (Deep Teal) - Spans 7 cols */}
                    <div className="lg:col-span-7 bg-[#064e3b] rounded-2xl p-6 flex flex-col justify-center relative overflow-hidden shadow-xl min-h-[260px] group hover:-translate-y-1 transition-transform duration-300">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b] to-[#022c22] z-0"></div>
                        <div className="absolute top-0 right-0 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-xl font-bold mb-6 text-white">Made for your CX stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {["Salesforce", "Zendesk", "HubSpot", "Slack", "Intercom", "Jira", "ServiceNow", "Microsoft Teams"].map((tool, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-full bg-[#022c22]/50 border border-teal-700/50 text-emerald-100/80 text-xs font-medium hover:bg-teal-900 hover:text-white transition-colors cursor-default">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Enterprise Security (Solid Vibrant Teal) - Spans 5 cols */}
                    <div className="lg:col-span-5 bg-teal-600 rounded-2xl p-6 flex flex-col justify-between shadow-xl min-h-[300px] relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-full pointer-events-none"></div>
                        <div className="relative z-10">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4 text-white backdrop-blur-sm">
                                <Lock className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">Engineered for Enterprises</h3>
                            <p className="text-teal-50 leading-relaxed mb-6 text-sm">
                                SOC2 Type II Certified, GDPR Compliant, and SSO ready. We take security as seriously as you do.
                            </p>
                            <Shield className="w-16 h-16 text-white/10 absolute bottom-4 right-4" />
                        </div>
                    </div>

                    {/* Card 4: Real-time Visibility (Dark Card with Image) - Spans 7 cols */}
                    <div className="lg:col-span-7 bg-[#022c22] rounded-2xl overflow-hidden shadow-xl min-h-[300px] relative group hover:-translate-y-1 transition-transform duration-300">
                        <img
                            src="/images/dashboard_preview.png"
                            alt="Analytics Dashboard"
                            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#022c22] via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 z-10">
                            <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                                <BarChart3 className="w-5 h-5 text-amber-400" />
                                Real-time Visibility
                            </h3>
                            <p className="text-sm text-emerald-100/60">Track performance metrics as they happen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
