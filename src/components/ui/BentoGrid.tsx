import { MessageSquare, Lock } from "lucide-react";

export default function BentoGrid() {
    const integrations = [
        "Salesforce", "Zendesk", "HubSpot", "Slack", "Intercom", "Jira", "ServiceNow", "Microsoft Teams"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Item 1: CX Experts */}
                    <div className="rounded-3xl bg-slate-50 p-8 md:p-12 border border-slate-100 flex flex-col justify-center relative overflow-hidden group">
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 text-indigo-600">
                                <MessageSquare className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-4">Built by CX Experts</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We've led support teams at high-growth startups and Fortune 500s. We know the pain of scaling quality assurance.
                            </p>
                        </div>
                        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    </div>

                    {/* Item 2: Tech Stack */}
                    <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 border border-slate-800 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-6">Made for your CX stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {integrations.map((tech, i) => (
                                    <span key={i} className="px-4 py-2 bg-slate-800 rounded-full text-sm font-medium border border-slate-700 text-slate-300 hover:border-indigo-500 hover:text-white transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none group-hover:opacity-50 transition-opacity duration-700">
                            <img src="/images/bento_integrations.png" alt="Integrations" className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Item 3: Enterprise Ready */}
                    <div className="rounded-3xl bg-indigo-600 text-white p-8 md:p-12 border border-indigo-500 flex flex-col justify-between relative overflow-hidden group md:col-span-2 lg:col-span-1">
                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white backdrop-blur-sm">
                                <Lock className="w-7 h-7" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Engineered for Enterprises</h3>
                            <p className="text-indigo-100 leading-relaxed">
                                SOC2 Type II Certified, GDPR Compliant, and SSO ready. We take security as seriously as you do.
                            </p>
                        </div>
                        <img src="/images/bento_security.png" alt="Security" className="absolute bottom-0 right-0 w-64 h-64 object-contain opacity-20 group-hover:opacity-40 transition-opacity translate-x-10 translate-y-10" />
                    </div>

                    {/* Item 4: Landscape Visual */}
                    <div className="rounded-3xl bg-slate-100 p-0 border border-slate-200 overflow-hidden relative group md:col-span-2 lg:col-span-1 min-h-[300px]">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                            alt="Data Dashboard"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-900/80 to-transparent">
                            <div className="text-white font-bold text-xl">Real-time Visibility</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
