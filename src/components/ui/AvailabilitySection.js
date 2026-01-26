import React from 'react';

const AvailabilitySection = () => {
    const retailers = [
        { name: 'Amazon', logo: '/images/4.1.png' },
        { name: 'Audible', logo: '/images/4.2.png' },
        { name: 'Apple Books', logo: '/images/4.3.png' },
        { name: 'Barnes & Noble', logo: '/images/4.4.png' },
        { name: 'Walmart', logo: '/images/4.5.png' },
        { name: 'Target', logo: '/images/4.6.png' }
    ];

    return (
        <section className="bg-[#F0FAF5] py-12 md:py-0 md:h-[432px] flex items-center border-y border-[#E5E7EB]">
            <div className="container mx-auto max-w-[1446px] px-4 md:px-8">
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="font-serif text-[28px] xs:text-[32px] sm:text-[40px] md:text-[48px] md:leading-[48px] font-bold text-[#0A0A0A] mb-3 md:mb-5 tracking-[-0.74px] max-w-[1088px] mx-auto">
                        Available Everywhere
                    </h2>
                    <p className="font-sans text-[14px] xs:text-[16px] md:text-[20px] md:leading-[28px] text-[#4A5568] tracking-[-0.74px] max-w-[1088px] mx-auto">
                        Choose your preferred format and retailer
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {retailers.map((retailer, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[16px] md:rounded-[24px] shadow-sm hover:shadow-lg transition-all duration-300 w-[120px] h-[90px] xs:w-[140px] xs:h-[100px] sm:w-[160px] sm:h-[120px] md:w-[192px] md:h-[144px] flex flex-col items-center justify-center p-4 group cursor-pointer border border-[#E5E7EB]/50 hover:border-guarantee-green/30"
                        >
                            <div className="mb-2 md:mb-4 group-hover:scale-110 transition-all duration-300">
                                <img
                                    src={retailer.logo}
                                    alt={retailer.name}
                                    className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                />
                            </div>
                            <span className="font-sans text-[10px] md:text-[14px] font-semibold text-[#0A0A0A] text-center whitespace-nowrap tracking-[-0.74px] group-hover:opacity-100 transition-opacity">
                                {retailer.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AvailabilitySection;
