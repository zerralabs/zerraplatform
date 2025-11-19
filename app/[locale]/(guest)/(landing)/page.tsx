"use client";

import { Logo } from "@/components/logo";
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
      <nav className="relative z-10 pt-8 px-10">
        <div className="max-w-7xl mx-auto">
          <div 
            className="bg-white/80 backdrop-blur-md rounded-full px-8 py-4 flex items-center justify-between"
            style={{
              boxShadow: '0 10px 30px rgba(16,20,24,0.08)',
              height: '56px'
            }}
          >
            {/* Logo */}
            <div className="flex items-center">
              <Logo className="w-[45px] h-[45px]" />
              <span className="text-xl font-semibold text-black -ml-1">ZerraLabs</span>
            </div>

            {/* Nav Links - 16px font, 20px gap */}
            <div className="flex items-center gap-5">
              <a 
                href="#home" 
                className="text-base font-medium text-black hover:text-[#1E50EF] transition-colors"
              >
                Home
              </a>
            </div>

            {/* CTA Button - Primary style from design */}
            <div>
              <button 
                className="px-7 py-3 rounded-full text-base font-semibold bg-[#1E50EF] text-white hover:bg-[#1a45d4] transition-colors"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Following design typography specs */}
      <section className="relative z-10 pt-32 pb-16 px-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Hero Title - 72px, weight 500, line-height 1.05 */}
          <h1 
            className="font-medium text-black mb-6"
            style={{
              fontSize: '72px',
              lineHeight: '1.05',
              letterSpacing: '0px'
            }}
          >
            Studio Quality Photos.
            <br />
            One Click. Done.
          </h1>
          
          {/* Subheading - 24px */}
          <p 
            className="text-[#686869] max-w-3xl mx-auto"
            style={{
              fontSize: '24px',
              lineHeight: '1.4'
            }}
          >
            Transform your home-taken product photos into professional studio images. No complexity. No learning curve. Just results.
          </p>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="relative z-10 px-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 
            className="font-semibold text-black mb-6"
            style={{
              fontSize: '48px',
              lineHeight: '1.1'
            }}
          >
            Be the First to Know
          </h2>
          <p 
            className="text-[#686869] max-w-2xl mx-auto mb-12"
            style={{
              fontSize: '24px',
              lineHeight: '1.4'
            }}
          >
            Join our waitlist and get early access when we launch. No spam, just updates.
          </p>
          
          {/* Email Input Form */}
          <div className="flex items-center gap-2 max-w-xl mx-auto bg-white rounded-full border border-[#C5C6C9] px-2 py-2 shadow-[0_2px_8px_rgba(18,20,24,0.04)]">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-2 text-base bg-transparent focus:outline-none"
            />
            <LeadButton
              email={email}
              successMessage="You're on the waitlist! We'll be in touch soon."
              className="px-6 py-2.5 rounded-full text-sm font-semibold bg-[#1E50EF] text-white hover:bg-[#1a45d4] transition-colors whitespace-nowrap"
            >
              Join Waitlist
            </LeadButton>
          </div>
        </div>
      </section>
    </div>
  );
}
