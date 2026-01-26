import React from 'react';
import Button from '../common/Button';

function HeroSection() {
    return (
        <section className="bg-[#E8F5E9] flex items-center py-8 md:py-16 lg:py-0 lg:min-h-[900px]">
            <div className="container mx-auto max-w-[1446px] px-4 lg:px-8">
                <div className="flex flex-row items-center gap-2 sm:gap-8 lg:gap-12">
                    {/* Left Column - Text Content (Always Left) */}
                    <div className="flex-[1.2] sm:flex-1 flex flex-col justify-center text-left">
                        {/* Tagline */}
                        <p className="font-poppins text-[9px] xs:text-[10px] sm:text-sm md:text-base lg:text-[20.75px] leading-tight md:leading-[20.7px] tracking-[0.1px] lg:tracking-[0.36px] text-gray-text mb-2 md:mb-6">
                            A Proven Voice Method Used by Speakers, Educators & Leaders
                        </p>

                        {/* Main Heading */}
                        <h1 className="font-serif text-[20px] xs:text-[24px] sm:text-4xl md:text-7xl lg:text-[132.78px] leading-tight lg:leading-[132.8px] tracking-[-1px] lg:tracking-[-3.84px] font-bold text-heading-dark mb-2 md:mb-6">
                            VOICE<br />
                            CONTROL<span className="text-[12px] xs:text-[14px] sm:text-2xl md:text-5xl lg:text-[80px] align-top">™</span>
                        </h1>

                        {/* Subheading */}
                        <h2 className="font-poppins text-[10px] xs:text-[12px] sm:text-lg md:text-2xl lg:text-[37.34px] leading-tight md:leading-[41.5px] font-medium text-heading-dark mb-2 md:mb-4">
                            How to Speak With Power, Calm & Magnetic Presence
                        </h2>

                        {/* Description */}
                        <p className="font-poppins text-[9px] xs:text-[10px] sm:text-sm md:text-[20.75px] leading-tight md:leading-[29px] text-gray-text mb-4 md:mb-8 max-w-xl">
                            A weak or tense voice silently costs you authority, trust, and opportunity
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-row items-center gap-1 sm:gap-4 mb-2 md:mb-3 lg:max-w-[689.51px] min-h-[38px] xs:min-h-[44px] md:h-[70px] w-full">
                            <Button variant="primary" className="flex-[2.5] h-full flex items-center justify-center text-[8px] xs:text-[9px] sm:text-sm md:text-[20px] px-1 sm:px-4 md:px-8 py-2 md:py-0 whitespace-nowrap !rounded-lg sm:!rounded-xl">
                                <span className="font-bold hidden md:inline">Start My Voice Transformation—</span>
                                <span className="font-bold md:hidden">Start Training</span>
                                <span className="font-normal opacity-90 hidden lg:inline ml-1">Holiday Edition</span>
                            </Button>
                            <Button variant="secondary" className="flex-1 h-full flex items-center justify-center text-[8px] xs:text-[9px] sm:text-sm md:text-[20px] px-1 sm:px-4 md:px-8 py-2 md:py-0 whitespace-nowrap !rounded-lg sm:!rounded-xl">
                                <span className="hidden sm:inline">Watch Trailer</span>
                                <span className="sm:hidden">Trailer</span>
                            </Button>
                        </div>

                        {/* Guarantee Text */}
                        <p className="font-serif text-[10px] xs:text-[12px] sm:text-[14px] md:text-[16px] font-bold text-guarantee-green mb-4 md:mb-6">
                            30-Day Voice Transformation Guarantee
                        </p>

                        {/* Info Items */}
                        <div className="flex flex-row flex-nowrap items-center gap-x-1.5 xs:gap-x-2.5 sm:gap-x-4 md:gap-x-6 lg:gap-x-8 text-gray-text font-poppins text-[7px] xs:text-[8.5px] sm:text-[13px] md:text-[15.74px] leading-tight md:leading-[22.5px] lg:max-w-[701.17px] w-full">
                            <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 whitespace-nowrap">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-2 xs:w-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4">
                                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                                    <rect x="2" y="7" width="20" height="5"></rect>
                                    <line x1="12" y1="22" x2="12" y2="7"></line>
                                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                                </svg>
                                <span className="hidden sm:inline">Holiday access ends soon</span>
                                <span className="sm:hidden">Holiday Access</span>
                            </div>
                            <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 whitespace-nowrap">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-2 xs:w-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                                <span className="hidden sm:inline">Lifetime access</span>
                                <span className="sm:hidden">Lifetime Access</span>
                            </div>
                            <div className="flex items-center gap-0.5 xs:gap-1 sm:gap-1.5 whitespace-nowrap">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="w-2 xs:w-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                </svg>
                                <span className="hidden sm:inline">9,000+ students transformed</span>
                                <span className="sm:hidden">9,000+ Students</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Image (Always Right) */}
                    <div className="flex-[0.8] sm:flex-1 flex justify-end items-end">
                        <div className="relative w-full max-w-[170px] xs:max-w-[200px] sm:max-w-[300px] md:max-w-[500px] lg:max-w-[660.75px] h-[240px] xs:h-[280px] sm:h-[400px] md:h-[650px] lg:h-[804px]">
                            <img
                                src="/images/1.png"
                                alt="Professional Voice Coach"
                                className="w-full h-full object-contain object-bottom"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
