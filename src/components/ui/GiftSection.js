import React from 'react';

const GiftSection = () => {
    return (
        <section className="bg-[#EFF9F0] w-full md:h-[768px] py-[60px] md:py-0 overflow-hidden border-y border-[#E5E7EB] flex items-center">
            <div className="container mx-auto max-w-[1446px] px-4 md:px-[59px]">
                <div className="flex flex-row items-center gap-4 xs:gap-6 sm:gap-10 md:gap-16">
                    {/* Image Area */}
                    <div className="w-[45%] md:w-1/2 flex justify-start">
                        <div className="relative w-full md:w-[598px] md:h-[767px]">
                            <img
                                src="/images/8.1.png"
                                alt="Instructor with book"
                                className="w-full h-full object-contain md:object-cover origin-bottom-left"
                            />
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="w-[55%] md:w-1/2 text-left">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <div className="flex items-center gap-3">
                                <img src="/images/8.2.png" alt="Gift Icon" className="w-8 h-8 md:w-12 md:h-12 object-contain flex-shrink-0" />
                                <h2 className="font-serif text-[20px] xs:text-[24px] sm:text-3xl md:text-[48px] font-bold text-[#1A1A1A] leading-tight md:leading-[1.1]">
                                    A Gift that Arrives in Seconds
                                </h2>
                            </div>
                        </div>

                        <p className="font-sans text-[12px] xs:text-[14px] sm:text-base md:text-[20px] text-[#4A5568] mb-6 md:mb-10 max-w-[500px] leading-relaxed opacity-90">
                            Instant digital delivery. Perfect for anyone who wants to transform their voice and confidence.
                        </p>

                        <button className="bg-[#7EE38B] text-[#000000] font-sans font-bold py-3 md:py-5 px-6 md:px-12 text-[12px] xs:text-[14px] sm:text-lg rounded-[14px] md:rounded-[18px] shadow-[0_10px_20px_rgba(126,227,139,0.3)] hover:bg-[#6CD079] transition-all transform hover:scale-105">
                            Send as a Gift
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GiftSection;
