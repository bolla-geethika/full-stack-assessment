

export default function WorkflowTimeline() {
    const steps = [
        {
            step: "01",
            title: "Connect Data",
            description: "Integrate with your existing stack in minutes. We support 50+ integrations out of the box.",
            color: "bg-blue-500"
        },
        {
            step: "02",
            title: "Analyze & Learn",
            description: "Our AI agents analyze 100% of interactions to identify patterns, compliance risks, and coaching opportunities.",
            color: "bg-indigo-500"
        },
        {
            step: "03",
            title: "Simulate & Coach",
            description: "Generate hyper-realistic roleplay scenarios for agents to practice before facing real customers.",
            color: "bg-purple-500"
        },
        {
            step: "04",
            title: "Measure Impact",
            description: "Track performance improvements in real-time. See ramp time decrease and CSAT scores rise.",
            color: "bg-pink-500"
        }
    ];

    return (
        <section className="py-24 bg-slate-950 relative">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-20">
                    <span className="text-indigo-400 font-bold tracking-widest uppercase text-sm mb-4 block">How It Works</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">The Intelligence Loop</h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30"></div>

                    <div className="space-y-12">
                        {steps.map((item, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse md:text-left'}`}>

                                {/* Content Side */}
                                <div className="flex-1 w-full pl-12 md:pl-0">
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-slate-400">{item.description}</p>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-950 bg-slate-800 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                                    <div className={`w-3 h-3 rounded-full ${item.color} animate-pulse`}></div>
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="flex-1 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
