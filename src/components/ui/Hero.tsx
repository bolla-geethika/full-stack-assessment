import { Button } from "./button";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
    const handleBookDemo = () => {
        console.log("Redirecting to: Start Free Trial...");
    };

    const handleSeeHowItWorks = () => {
        console.log("Opening: View Platform...");
    };

    return (
        <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-transparent text-white flex items-center justify-center min-h-[95vh]">
            {/* Background Texture for Deep Teal */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#022c22] via-transparent to-[#022c22]"></div>

                {/* Animated Gradient Orbs - Warm/Teal */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-teal-500/20 blur-[120px] rounded-full animate-pulse duration-[8000ms]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 blur-[100px] rounded-full animate-pulse duration-[10000ms]"></div>
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center mx-auto opacity-0 animate-fade-in-up [animation-delay:200ms]" style={{ animationFillMode: 'forwards' }}>

                {/* Pill Label */}
                <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-sm font-semibold tracking-wide uppercase animate-fade-in-up shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></span>
                    AI-Native Quality Assurance
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-white max-w-5xl">
                    Master every customer <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F6D045] to-amber-500 inline-block transform hover:scale-105 transition-transform duration-500 cursor-default">
                        interaction.
                    </span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-emerald-100/70 mb-12 leading-relaxed font-light tracking-wide">
                    The AI-native training platform that turns new hires into top performers. Simulate real-world scenarios and scale your quality assurance instantly.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
                    <Button
                        onClick={handleBookDemo}
                        className="animate-shine-warm text-white font-bold text-lg h-14 px-10 rounded-full shadow-[0_0_40px_-10px_rgba(246,208,69,0.4)] hover:shadow-[0_0_60px_-10px_rgba(246,208,69,0.6)] transition-all hover:-translate-y-1 w-full sm:w-auto border-none !text-emerald-950"
                    >
                        Start Free Trial <ArrowRight className="ml-2 w-5 h-5 inline-block" />
                    </Button>

                    <Button
                        onClick={handleSeeHowItWorks}
                        className="bg-transparent hover:bg-teal-900/50 text-white font-semibold text-lg h-14 px-10 rounded-full transition-all hover:-translate-y-1 border border-teal-700 shadow-lg w-full sm:w-auto flex items-center justify-center gap-3 group"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                            <Play className="w-3 h-3 fill-white text-white" />
                        </div>
                        View Platform
                    </Button>
                </div>

                {/* Hero Graphic / Dashboard Preview */}
                <div className="mt-20 relative w-full max-w-6xl group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition opacity duration-1000"></div>
                    <div className="relative rounded-2xl bg-[#022c22] border border-teal-800 shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center group-hover:scale-[1.01] transition-transform duration-500">
                        <img
                            src="/images/dashboard_preview.png"
                            alt="AI Analytics Dashboard"
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />

                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-colors duration-500">
                            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                <Play className="w-8 h-8 fill-white text-white ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}