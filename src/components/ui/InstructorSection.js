import React from 'react';

function InstructorSection() {
    const credentials = [
        {
            icon: <img src="/images/3.1.png" alt="Researcher icon" className="w-full h-full object-contain" />,
            text: "Researcher in intonation & speech science"
        },
        {
            icon: <img src="/images/3.2.png" alt="Actor icon" className="w-full h-full object-contain" />,
            text: "Actor-based vocal techniques"
        },
        {
            icon: <img src="/images/3.3.png" alt="Microphone icon" className="w-full h-full object-contain" />,
            text: "Used by speakers, educators & leaders"
        },
        {
            icon: <img src="/images/3.4.png" alt="Book icon" className="w-full h-full object-contain" />,
            text: "Author of Voice Control"
        }
    ];

    return (
        <section className="bg-white py-12 md:py-24 lg:py-0 lg:h-[900px] flex items-center overflow-hidden">
            <div className="container mx-auto max-w-[1446px] px-4 lg:px-8">
                {/* Inner Content Container - 1366px */}
                {/* items-start to ensure text starts where the image starts */}
                <div className="max-w-[1366px] mx-auto flex flex-row items-start gap-3 xs:gap-5 sm:gap-10 lg:gap-16 xl:gap-24">
                    {/* Left side: Video/Image - Fixed dimensions 590x672 */}
                    <div className="flex-[0.8] sm:flex-1 flex justify-start">
                        <div className="relative w-full max-w-[210px] xs:max-w-[240px] sm:max-w-[340px] md:max-w-[480px] lg:max-w-[590px] h-[240px] xs:h-[275px] sm:h-[390px] md:h-[546px] lg:h-[672px] rounded-[12px] xs:rounded-[20px] md:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-gray-100 group cursor-pointer border border-gray-100">
                            <img
                                src="/images/2.png"
                                alt="Sevil Velsha - Voice Coach"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 xs:w-14 xs:h-14 md:w-20 lg:w-24 md:h-20 lg:h-24 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:bg-white/40 transition-all duration-300">
                                    <div className="w-0 h-0 border-t-[6px] xs:border-t-[10px] md:border-t-[14px] border-t-transparent border-l-[10px] xs:border-l-[18px] md:border-l-[26px] border-l-white border-b-[6px] xs:border-b-[10px] md:border-b-[14px] border-b-transparent ml-1 xs:ml-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Content - max-width 641px as per Figma */}
                    <div className="flex-[1.2] sm:flex-1 w-full text-left lg:max-w-[641px]">
                        <h2 className="font-serif text-[18px] xs:text-[24px] sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[70px] font-bold text-[#000000] mb-3 xs:mb-6 md:mb-8 tracking-tight">
                            Meet the Voice Behind the Method
                        </h2>

                        <div className="space-y-2 xs:space-y-4 md:space-y-[1px] mb-4 xs:mb-8 md:mb-10 lg:max-w-[415px]">
                            {credentials.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 xs:gap-3 md:gap-4 text-[#212529] font-poppins text-[9px] xs:text-[12px] sm:text-base lg:text-[19.5px] lg:leading-[29.3px]">
                                    <span className="flex-shrink-0 w-3.5 h-3.5 xs:w-5 xs:h-5 md:w-[24px] md:h-[24px] flex items-center justify-center">
                                        {item.icon}
                                    </span>
                                    <span className="opacity-95 whitespace-nowrap sm:whitespace-normal">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 xs:space-y-6 md:space-y-8 lg:max-w-[677px]">
                            <p className="font-lora text-[10px] xs:text-[12px] sm:text-lg md:text-[20px] lg:text-[22.02px] lg:leading-[34.3px] text-[#000000] opacity-90">
                                Sevil Velsha is a voice coach, PhD, and educator dedicated to helping people unlock authority, calm, and presence through their voice. With a background in linguistics, intonation research, and stage performance, she bridges science and art to teach voice control that feels natural, grounded, and powerful.
                            </p>

                            <p className="font-poppins text-[9px] xs:text-[11px] sm:text-base md:text-[18px] lg:text-[22px] lg:leading-[32px] font-medium italic text-[#000000] lg:max-w-[677px]">
                                Her work proves one truth: your voice is not just sound — it is presence made audible.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InstructorSection;
