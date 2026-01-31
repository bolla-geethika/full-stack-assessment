import { createFileRoute } from '@tanstack/react-router'
import Hero from '../components/ui/Hero'
import Footer from '../components/ui/Footer'
import LogoTicker from '../components/ui/LogoTicker'
import StatsStrip from '../components/ui/StatsStrip'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="min-h-screen font-sans selection:bg-amber-500/30 selection:text-white relative text-emerald-50">
      {/* Global Animated Background */}
      <div className="bg-midnight-animated" />
      <div className="fixed inset-0 bg-grid-white opacity-10 z-[-1]" />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#022c22]/80 backdrop-blur-md border-b border-white/5 h-20">
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center font-bold text-emerald-950 shadow-[0_0_15px_rgba(245,158,11,0.5)]">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-white">SOLIDROAD</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-emerald-100/70">
            <a href="#" className="hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-white transition-colors">Solutions</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Resources</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-emerald-100/70 hover:text-white font-medium transition-colors">
              Sign In
            </button>
            <button className="animate-shine-warm text-emerald-950 px-5 py-2.5 rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/20 border-none">
              Book Demo
            </button>
          </div>
        </div>
      </nav>

      {/* Content Wrapper */}
      <main className="pt-20">
        <Hero />
        <LogoTicker />
        <StatsStrip />
      </main>

      <Footer />

      {/* Sticky Mobile/Desktop CTA Bar */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-[#022c22]/90 backdrop-blur-lg border-t border-teal-900 p-4 md:hidden text-white">
        <div className="flex gap-4">
          <button className="flex-1 animate-shine-warm text-emerald-950 font-bold text-sm py-3 rounded-full shadow-lg transition-colors border-none">
            Start Free Trial
          </button>
          <button className="flex-1 bg-teal-900 hover:bg-teal-800 text-white font-bold text-sm py-3 rounded-full border border-teal-700 shadow-lg transition-colors">
            View Platform
          </button>
        </div>
      </div>
    </div>
  )
}
