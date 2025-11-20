"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import LeadButton from "@/components/buttons/lead-button";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Background Container with Gradient Fade */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(245,249,255,1) 0%, rgba(240,245,255,1) 40%, rgba(255,255,255,1) 100%)'
          }}
        />
        
        {/* Grid Background with Fade */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(30,30,30,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(30,30,30,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '56px 56px',
            maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)'
          }}
        />
      </div>

      {/* Navigation Pill - Following design specs */}
      <nav className="relative z-10 pt-4 md:pt-8 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div 
            className="bg-white/80 backdrop-blur-md rounded-full px-4 md:px-8 py-3 md:py-4 flex items-center justify-between"
            style={{
              boxShadow: '0 10px 30px rgba(16,20,24,0.08)',
              minHeight: '52px'
            }}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Logo className="w-[36px] h-[36px] md:w-[45px] md:h-[45px]" />
              <span className="text-base md:text-lg font-semibold text-black -ml-1">ZerraLabs</span>
            </div>

            {/* CTA Button - Primary style from design */}
            <div>
              <Button 
                className="px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold bg-[#1E50EF] text-white hover:bg-[#1a45d4] transition-colors h-auto"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Following design typography specs */}
      <section className="relative z-10 pt-16 md:pt-32 pb-12 md:pb-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Title - 56px (responsive: 48px mobile), weight 600, line-height 1.1 */}
          <h1 
            className="font-semibold text-black mb-4 md:mb-6 text-4xl md:text-5xl lg:text-[56px]"
            style={{
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Create studio-quality product photos with AI.
            <br />
            Sell more with zero effort.
          </h1>
          
          {/* Subheading - 20px (responsive: 18px mobile) */}
          <p 
            className="text-[#686869] max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-lg lg:text-xl px-2"
            style={{
              lineHeight: '1.6'
            }}
          >
            Create studio-quality product photos without the cost or complexity. Just upload, pick a style, and you’re done..
          </p>

          {/* Email Input Form */}
          <div className="w-full max-w-md mx-auto">
            {/* Mobile: Stacked layout */}
            <div className="sm:hidden space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-2.5 text-base bg-white border border-[#EDEDED] rounded-xl focus:outline-none focus:border-[#1E50EF] placeholder:text-[#C5C6C9] transition-colors shadow-sm"
              />
              <LeadButton
                email={email}
                successMessage="You're on the waitlist! We'll be in touch soon."
                className="w-full px-6 py-2.5 rounded-xl text-base font-semibold bg-[#1E50EF] text-white hover:bg-[#1a45d4] active:scale-[0.98] transition-all shadow-md"
              >
                Join Waitlist
              </LeadButton>
            </div>

            {/* Desktop: Inline layout */}
            <div className="hidden sm:flex items-center gap-2 bg-white rounded-full border border-[#EDEDED] p-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-shadow">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-2.5 text-base bg-transparent focus:outline-none placeholder:text-[#C5C6C9]"
              />
              <LeadButton
                email={email}
                successMessage="You're on the waitlist! We'll be in touch soon."
                className="px-7 py-2.5 rounded-full text-sm font-semibold bg-[#1E50EF] text-white hover:bg-[#1a45d4] hover:shadow-lg active:scale-[0.98] transition-all whitespace-nowrap"
              >
                Join Waitlist
              </LeadButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
