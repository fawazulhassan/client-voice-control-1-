import React from 'react';

const WhatYouWillGainSection = () => {
    const gains = [
        "Speak with natural authority — without force or tension",
        "Remove shaking, nervousness, shallow breathing",
        "Build a warm, attractive, charismatic tone people love",
        "Replace weak, airy, nasal or muffled voice habits",
        "Sound clear, crisp, and confident in ANY situation",
        "Speak so people listen, engage, and remember",
        "Express emotion intentionally — not accidentally",
        "Hold attention in conversations, meetings, interviews, and videos"
    ];

    // Reorder for 2-column layout to match image order
    const leftColumn = [gains[0], gains[2], gains[4], gains[6]];
    const rightColumn = [gains[1], gains[3], gains[5], gains[7]];

    return (
        <section className="bg-white w-full border-y border-[#E5E7EB] py-[60px] md:py-[100px]">
            <div className="container mx-auto max-w-[1446px] px-6 md:px-[208px]">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <img src="/images/5.png" alt="Star Icon" className="w-6 h-6 md:w-8 md:h-8 object-contain" />
                        <h2 className="font-serif text-[28px] md:text-[36px] font-bold text-[#0A0A0A] tracking-wider uppercase">
                            WHAT YOU WILL GAIN
                        </h2>
                    </div>
                    <p className="font-lora text-[16px] md:text-[18px] md:leading-[28px] text-[#000000] max-w-[1024px] mx-auto">
                        By the end of this program, you will:
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 md:gap-y-10 mb-16 md:mb-20">
                    <div className="flex flex-col gap-6 md:gap-10">
                        {leftColumn.map((gain, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <p className="font-sans text-base md:text-[18px] text-[#2D3748] leading-relaxed">
                                    {gain}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6 md:gap-10">
                        {rightColumn.map((gain, index) => (
                            <div key={index} className="flex gap-4 items-start">
                                <svg className="w-5 h-5 text-black mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <p className="font-sans text-base md:text-[18px] text-[#2D3748] leading-relaxed">
                                    {gain}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center">
                    <div className="w-full h-[3px] bg-[#0D0C05] max-w-[700px] mx-auto mb-10 md:mb-12"></div>
                    <p className="font-lora text-[16px] md:text-[20px] md:leading-[28px] text-[#000000] max-w-[672px] mx-auto">
                        This is a full transformation, not just "tips."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatYouWillGainSection;
