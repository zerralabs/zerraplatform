"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import LeadButton from "@/components/buttons/lead-button";

export default function LandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Wrapper */}
      <div className="relative overflow-hidden">
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
              Studio-quality product photos.
              <br />
              With the power of AI.
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
            <div className="w-full max-w-md mx-auto px-4 sm:px-0">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-2 items-stretch sm:items-center bg-transparent sm:bg-white border-none sm:border sm:border-[#EDEDED] p-0 sm:p-1.5 shadow-none sm:shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-none sm:rounded-full sm:hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-shadow">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:flex-1 px-4 sm:px-5 py-3 sm:py-2.5 text-sm sm:text-base bg-white sm:bg-transparent border border-[#EDEDED] sm:border-none rounded-lg sm:rounded-none focus:outline-none focus:ring-2 focus:ring-[#1E50EF]/20 focus:border-[#1E50EF] sm:focus:ring-0 placeholder:text-[#C5C6C9] transition-all shadow-sm sm:shadow-none"
                  suppressHydrationWarning
                />
                <LeadButton
                  email={email}
                  successMessage="You're on the waitlist! We'll be in touch soon."
                  className="w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-2.5 rounded-lg sm:rounded-full text-sm font-semibold bg-[#1E50EF] text-white hover:bg-[#1a45d4] active:scale-[0.98] transition-all sm:hover:shadow-lg whitespace-nowrap"
                >
                  Join Waitlist
                </LeadButton>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Upload Platforms Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, #1E50EF 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, #FA8269 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-[#686869] text-lg max-w-2xl mx-auto leading-relaxed">
              Export AI-generated photos to major platforms and social media
            </p>
          </div>

          {/* Platform Logos - Redesigned */}
          <div className="relative overflow-hidden py-8">
            {/* Subtle gradient fade on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
            
            <div className="flex animate-float-logos items-center">
              {[
                { name: 'Shopify', src: '/static/logos/shopify.png' },
                { name: 'Etsy', src: '/static/logos/etsy.png' },
                { name: 'Amazon', src: '/static/logos/amazon.png' },
                { name: 'eBay', src: '/static/logos/ebay.png' },
                { name: 'WooCommerce', src: '/static/logos/woocommerce.png' },
                { name: 'Instagram', src: '/static/logos/instagram.png' },
                { name: 'Facebook', src: '/static/logos/facebook.png' },
                { name: 'Pinterest', src: '/static/logos/pinterest.png' }
              ].map((platform, index) => (
                <div
                  key={`logo-${index}`}
                  className="flex-shrink-0 px-6 md:px-7 flex items-center justify-center"
                  style={{ height: '60px' }}
                >
                  <img
                    src={platform.src}
                    alt={`${platform.name} logo`}
                    className={`w-auto h-auto object-contain opacity-100 hover:opacity-100 transition-opacity duration-300 ${
                      platform.name === 'eBay'
                        ? 'max-w-[70px] max-h-[28px] md:max-w-[80px] md:max-h-[32px]'
                        : platform.name === 'Instagram'
                        ? 'max-w-[110px] max-h-[44px] md:max-w-[130px] md:max-h-[52px]'
                        : 'max-w-[100px] max-h-[40px] md:max-w-[120px] md:max-h-[48px]'
                    } ${
                      platform.name === 'Amazon' ? 'mt-2' : ''
                    }`}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      const container = img.parentElement;
                      if (container) {
                        container.innerHTML = `<span class="text-sm font-medium text-gray-400">${platform.name}</span>`;
                      }
                    }}
                  />
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {[
                { name: 'Shopify', src: '/static/logos/shopify.png' },
                { name: 'Etsy', src: '/static/logos/etsy.png' },
                { name: 'Amazon', src: '/static/logos/amazon.png' },
                { name: 'eBay', src: '/static/logos/ebay.png' },
                { name: 'WooCommerce', src: '/static/logos/woocommerce.png' },
                { name: 'Instagram', src: '/static/logos/instagram.png' },
                { name: 'Facebook', src: '/static/logos/facebook.png' },
                { name: 'Pinterest', src: '/static/logos/pinterest.png' }
              ].map((platform, index) => (
                <div
                  key={`logo-dup-${index}`}
                  className="flex-shrink-0 px-6 md:px-7 flex items-center justify-center"
                  style={{ height: '60px' }}
                >
                  <img
                    src={platform.src}
                    alt={`${platform.name} logo`}
                    className={`w-auto h-auto object-contain opacity-100 hover:opacity-100 transition-opacity duration-300 ${
                      platform.name === 'eBay'
                        ? 'max-w-[70px] max-h-[28px] md:max-w-[80px] md:max-h-[32px]'
                        : platform.name === 'Instagram'
                        ? 'max-w-[110px] max-h-[44px] md:max-w-[130px] md:max-h-[52px]'
                        : 'max-w-[100px] max-h-[40px] md:max-w-[120px] md:max-h-[48px]'
                    } ${
                      platform.name === 'Amazon' ? 'mt-2' : ''
                    }`}
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      const container = img.parentElement;
                      if (container) {
                        container.innerHTML = `<span class="text-sm font-medium text-gray-400">${platform.name}</span>`;
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="px-2 md:px-4">
          {/* Image Grid */}
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="aspect-[3/4] bg-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <img
                  src={`/static/carousel/image${i + 1}.jpg`}
                  alt={`Image ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background Elements */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(248,250,255,1) 50%, rgba(255,255,255,1) 100%)'
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(30,80,239,0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(30,80,239,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px'
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-10 text-center">
          {/* Heading */}
          <h2
            className="font-semibold text-black mb-6 text-4xl md:text-5xl lg:text-[48px]"
            style={{
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Join the waitlist for
            <br />
            <span className="bg-gradient-to-r from-[#1E50EF] to-[#FA8269] bg-clip-text text-transparent">
              exclusive early access
            </span>
          </h2>

          {/* Subheading */}
          <p
            className="text-[#686869] max-w-2xl mx-auto mb-10 text-lg md:text-xl"
            style={{
              lineHeight: '1.6'
            }}
          >
            Be among the first to transform your product photography with AI.
            Get priority access, special pricing, and direct support from our team.
          </p>

          {/* Same Form as Hero */}
          <div className="w-full max-w-md mx-auto px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-2 items-stretch sm:items-center bg-transparent sm:bg-white border-none sm:border sm:border-[#EDEDED] p-0 sm:p-1.5 shadow-none sm:shadow-[0_4px_12px_rgba(0,0,0,0.08)] rounded-none sm:rounded-full sm:hover:shadow-[0_6px_16px_rgba(0,0,0,0.12)] transition-shadow">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-4 sm:px-5 py-3 sm:py-2.5 text-sm sm:text-base bg-white sm:bg-transparent border border-[#EDEDED] sm:border-none rounded-lg sm:rounded-none focus:outline-none focus:ring-2 focus:ring-[#1E50EF]/20 focus:border-[#1E50EF] sm:focus:ring-0 placeholder:text-[#C5C6C9] transition-all shadow-sm sm:shadow-none"
                suppressHydrationWarning
              />
              <LeadButton
                email={email}
                successMessage="You're on the waitlist! We'll be in touch soon."
                className="w-full sm:w-auto px-5 sm:px-7 py-3 sm:py-2.5 rounded-lg sm:rounded-full text-sm font-semibold bg-[#1E50EF] text-white hover:bg-[#1a45d4] active:scale-[0.98] transition-all sm:hover:shadow-lg whitespace-nowrap"
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
