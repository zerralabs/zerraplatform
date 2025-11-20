"use client";

import { useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import LeadButton from "@/components/buttons/lead-button";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Intersection observers for each section
  const heroSection = useIntersectionObserver();
  const platformSection = useIntersectionObserver();
  const feature1Section = useIntersectionObserver();
  const feature2Section = useIntersectionObserver();
  const feature3Section = useIntersectionObserver();
  const waitlistSection = useIntersectionObserver();

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation with background */}
      <div className="sticky top-0 z-50 pointer-events-none">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to bottom, rgba(245,249,255,1) 0%, rgba(240,245,255,0.95) 60%, rgba(255,255,255,0) 100%)'
            }}
          />
        </div>
        <nav className="px-4 md:px-10 pt-3 md:pt-6 pointer-events-auto">
          <div className="max-w-7xl mx-auto">
            <div
              className="bg-white/90 backdrop-blur-md rounded-full px-4 md:px-8 py-2 md:py-2.5 flex items-center justify-between shadow-lg"
              style={{
                boxShadow: '0 10px 30px rgba(16,20,24,0.12)',
                minHeight: '44px'
              }}
            >
            {/* Logo */}
            <div className="flex items-center">
              <Logo className="w-[36px] h-[36px] md:w-[45px] md:h-[45px]" />
              <span className="text-base md:text-lg font-semibold text-black -ml-1">ZerraLabs</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => {
                  const heroElement = document.querySelector('[data-section="hero"]');
                  heroElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-semibold text-gray-700 hover:text-[#1E50EF] transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => {
                  const featuresElement = document.querySelector('[data-section="features"]');
                  featuresElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm font-semibold text-gray-700 hover:text-[#1E50EF] transition-colors"
              >
                Features
              </button>
            </div>

            {/* CTA Button */}
            <div className="flex items-center">
              {/* CTA Button - Primary style from design */}
              <Button
                onClick={() => {
                  const waitlistElement = document.querySelector('[data-section="waitlist"]');
                  waitlistElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold bg-[#1E50EF] text-white hover:bg-[#1a45d4] transition-colors h-auto"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg z-40">
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                const heroElement = document.querySelector('[data-section="hero"]');
                heroElement?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block w-full text-left py-3 px-2 text-sm font-semibold text-gray-700 hover:text-[#1E50EF] hover:bg-gray-50 rounded-md transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                const featuresElement = document.querySelector('[data-section="features"]');
                featuresElement?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="block w-full text-left py-3 px-2 text-sm font-semibold text-gray-700 hover:text-[#1E50EF] hover:bg-gray-50 rounded-md transition-colors"
            >
              Features
            </button>
          </div>
        </div>
      )}
    </div>

      {/* Hero Section Wrapper */}
      <div className="relative overflow-hidden -mt-20 md:-mt-24">
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

        {/* Hero Section - Following design typography specs */}
        <section ref={heroSection.ref} data-section="hero" className="relative z-10 pt-36 md:pt-44 pb-16 md:pb-22 px-4 md:px-10">
          <div className="max-w-7xl mx-auto text-center">
            {/* Hero Title - 56px (responsive: 48px mobile), weight 600, line-height 1.1 */}
            <h1 
              className={`font-semibold text-black mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl transition-opacity duration-[1200ms] ease-in-out ${
                heroSection.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                lineHeight: '1.2',
                letterSpacing: '-0.01em',
                transitionDelay: '100ms'
              }}
            >
              Studio-quality product photos.
              <br />
              With the power of AI.
            </h1>
            
            {/* Subheading - 20px (responsive: 18px mobile) */}
            <p 
              className={`text-[#686869] max-w-2xl mx-auto mb-8 md:mb-10 text-base md:text-lg px-2 transition-opacity duration-[1200ms] ease-in-out ${
                heroSection.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                lineHeight: '1.6',
                transitionDelay: '300ms'
              }}
            >
              Create studio-quality product photos without the cost or complexity. Just upload, pick a style, and you’re done..
            </p>

            {/* Email Input Form */}
            <div className={`w-full max-w-md mx-auto px-4 sm:px-0 transition-opacity duration-[1200ms] ease-in-out ${
              heroSection.isIntersecting ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: '500ms'
            }}>
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
      <section ref={platformSection.ref} className="relative py-0 md:py-10 overflow-hidden bg-gradient-to-br from-white via-gray-50/30 to-white">
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
          <div className={`text-center mb-1 transition-opacity duration-[1200ms] ease-in-out ${
            platformSection.isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDelay: '100ms'
          }}>
            <p className="text-[#686869] text-base max-w-2xl mx-auto leading-relaxed">
              Export AI-generated photos to major platforms and social media
            </p>
          </div>

          {/* Platform Logos - Redesigned */}
          <div className={`relative overflow-hidden py-4 transition-opacity duration-[1200ms] ease-in-out ${
            platformSection.isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDelay: '300ms'
          }}>
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
                        ? 'max-w-[63px] max-h-[25px] md:max-w-[72px] md:max-h-[29px]'
                        : platform.name === 'Instagram'
                        ? 'max-w-[99px] max-h-[40px] md:max-w-[117px] md:max-h-[47px]'
                        : 'max-w-[90px] max-h-[36px] md:max-w-[108px] md:max-h-[43px]'
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
                        ? 'max-w-[63px] max-h-[25px] md:max-w-[72px] md:max-h-[29px]'
                        : platform.name === 'Instagram'
                        ? 'max-w-[99px] max-h-[40px] md:max-w-[117px] md:max-h-[47px]'
                        : 'max-w-[90px] max-h-[36px] md:max-w-[108px] md:max-h-[43px]'
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

      {/* Features Section */}
      <section ref={feature1Section.ref} data-section="features" className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section: Pill, Separator, Title and Description */}
            <div>
              {/* Section Pill and Separator - only in left column */}
              <div className={`flex items-center mb-8 transition-opacity duration-[1200ms] ease-in-out ${
                feature1Section.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '100ms'
              }}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-transparent border border-[#686869] text-sm font-medium text-[#686869] shadow-sm mr-4 uppercase">
                  Background Removal
                </div>
                <hr className="flex-1 border-gray-200 opacity-50" />
              </div>
              
              <h2 className={`text-2xl md:text-3xl font-bold text-black mb-4 transition-opacity duration-[1200ms] ease-in-out ${
                feature1Section.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '300ms'
              }}>
                Remove background seamlessly
              </h2>
              <p className={`text-gray-600 text-base leading-relaxed transition-opacity duration-[1200ms] ease-in-out ${
                feature1Section.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '500ms'
              }}>
                Upload your product image and our AI will instantly remove the background with precise accuracy. It's designed to handle a wide variety of products, delivering clean, professional results every time. In just seconds, you'll have ready-to-use images without any manual editing.
              </p>
            </div>
            {/* Right Section: Visual Illustration */}
            <div className={`relative transition-opacity duration-[1200ms] ease-in-out ${
              feature1Section.isIntersecting ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: '400ms'
            }}>
              <div className="aspect-[4/3] rounded-lg overflow-hidden w-[90%] mx-auto">
                <img
                  src="/static/images/background-remove.jpg"
                  alt="Background Removal Demo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Feature Section - Inverted */}
      <section ref={feature2Section.ref} className="py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section: Visual Illustration */}
            <div className={`relative transition-opacity duration-[1200ms] ease-in-out order-2 lg:order-1 ${
              feature2Section.isIntersecting ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: '400ms'
            }}>
              <div className="grid grid-cols-3 grid-rows-2 gap-2 rounded-lg overflow-hidden">
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gray-100 rounded overflow-hidden"
                  >
                    <img
                      src={`/static/carousel/image${i + 1}.jpg`}
                      alt={`Scene ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            {/* Right Section: Pill, Separator, Title and Description */}
            <div className="order-1 lg:order-2">
              {/* Section Pill and Separator - only in right column */}
              <div className={`flex items-center mb-8 transition-opacity duration-[1200ms] ease-in-out ${
                feature2Section.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '100ms'
              }}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-transparent border border-[#686869] text-sm font-medium text-[#686869] shadow-sm mr-4 uppercase">
                  Unlimited Possibilities
                </div>
                <hr className="flex-1 border-gray-200 opacity-50" />
              </div>
              
              <h2 className={`text-2xl md:text-3xl font-bold text-black mb-4 transition-opacity duration-[1200ms] ease-in-out ${
                feature2Section.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '300ms'
              }}>
                Create Stunning Scenes Instantly - Powered by AI & Your Imagination
              </h2>
              <p className={`text-gray-600 text-base leading-relaxed transition-opacity duration-[1200ms] ease-in-out ${
                feature2Section.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '500ms'
              }}>
                Choose from pre-built scenes or create your own with backgrounds powered by AI. Say goodbye to one-shot product shoots and unlock unlimited creative possibilities. Bring your product photography to life with endless scene options - all from the comfort of your home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Feature Section */}
      <section ref={feature3Section.ref} className="py-10 md:py-20 bg-white pb-4 md:pb-8">
        <div className="max-w-7xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section: Pill, Separator, Title and Description */}
            <div>
              {/* Section Pill and Separator - only in left column */}
              <div className={`flex items-center mb-8 transition-opacity duration-[1200ms] ease-in-out ${
                feature3Section.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '100ms'
              }}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-transparent border border-[#686869] text-sm font-medium text-[#686869] shadow-sm mr-4 uppercase">
                  Simple, Fast, Reliable
                </div>
                <hr className="flex-1 border-gray-200 opacity-50" />
              </div>
              
              <h2 className={`text-2xl md:text-3xl font-bold text-black mb-4 transition-opacity duration-[1200ms] ease-in-out ${
                feature3Section.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '300ms'
              }}>
                Built for simplicity - Get it done
              </h2>
              <p className={`text-gray-600 text-base leading-relaxed transition-opacity duration-[1200ms] ease-in-out ${
                feature3Section.isIntersecting ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transitionDelay: '500ms'
              }}>
                No complicated settings or overwhelming choices. Just upload your product, pick a scene, and you're done. Unlike other tools packed with endless options, our platform keeps it simple and reliable so you can focus on getting stunning results—quickly and hassle-free.
              </p>
            </div>
            {/* Right Section: Visual Illustration */}
            <div className={`relative transition-opacity duration-[1200ms] ease-in-out ${
              feature3Section.isIntersecting ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDelay: '400ms'
            }}>
              <div className="aspect-square bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl overflow-hidden flex items-center justify-center p-8 relative w-[90%] mx-auto">
                {/* Background circles */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl"></div>
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-100/50 rounded-full blur-2xl"></div>
                
                {/* Main content - 3 step process */}
                <div className="relative z-10 w-full max-w-sm space-y-5">
                  {/* Step 1: Upload */}
                  <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1E50EF] to-[#4169E7] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-semibold text-gray-900">Upload</div>
                      <div className="text-sm text-gray-500">Drop your product</div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 2: Pick Scene */}
                  <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FA8269] to-[#FF6B94] rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-semibold text-gray-900">Pick Scene</div>
                      <div className="text-sm text-gray-500">Choose background</div>
                    </div>
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Step 3: Done */}
                  <div className="flex items-center gap-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 shadow-sm border border-green-100">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-base font-bold text-gray-900">Done!</div>
                      <div className="text-sm text-green-600 font-medium">Ready to download</div>
                    </div>
                    <div className="flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section ref={waitlistSection.ref} data-section="waitlist" className="relative pt-12 pb-24 md:pt-16 md:pb-32 overflow-hidden">
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
            className={`font-semibold text-black mb-6 text-3xl md:text-4xl transition-opacity duration-[1200ms] ease-in-out ${
              waitlistSection.isIntersecting ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              lineHeight: '1.2',
              letterSpacing: '-0.01em',
              transitionDelay: '100ms'
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
            className={`text-[#686869] max-w-2xl mx-auto mb-10 text-base md:text-lg transition-opacity duration-[1200ms] ease-in-out ${
              waitlistSection.isIntersecting ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              lineHeight: '1.6',
              transitionDelay: '300ms'
            }}
          >
            Be among the first to transform your product photography with AI.
            Get priority access, special pricing, and direct support from our team.
          </p>

          {/* Same Form as Hero */}
          <div className={`w-full max-w-md mx-auto px-4 sm:px-0 transition-opacity duration-[1200ms] ease-in-out ${
            waitlistSection.isIntersecting ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDelay: '500ms'
          }}>
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
