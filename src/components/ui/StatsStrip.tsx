
export default function StatsStrip() {
    return (
        <section className="py-24 bg-[#064e3b]/30 backdrop-blur-sm relative border-b border-white/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-white">2.5x</div>
                        <p className="text-emerald-100/60 text-sm uppercase tracking-wider">Faster Onboarding</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-white">100%</div>
                        <p className="text-emerald-100/60 text-sm uppercase tracking-wider">Audit Coverage</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-white">-40%</div>
                        <p className="text-emerald-100/60 text-sm uppercase tracking-wider">Handle Time</p>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl md:text-5xl font-bold text-white">24/7</div>
                        <p className="text-emerald-100/60 text-sm uppercase tracking-wider">Real-time Coaching</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
