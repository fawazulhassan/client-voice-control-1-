import React from 'react';

const BonusesSection = () => {
    const bonuses = [
        {
            icon: <img src="/images/7.2.png" alt="Morning Warmups" className="w-10 h-10 md:w-12 md:h-12 object-contain" />,
            title: "5-Minute Morning Warmups",
            description: "Professional MP3 audio guides for daily voice preparation"
        },
        {
            icon: <img src="/images/7.3.png" alt="Workbook" className="w-10 h-10 md:w-12 md:h-12 object-contain" />,
            title: "Full Workbook + Practice Journal",
            description: "Complete written guide with exercises and progress tracking"
        },
        {
            icon: <img src="/images/7.4.png" alt="Voice Quiz" className="w-10 h-10 md:w-12 md:h-12 object-contain" />,
            title: "\"Find Your Voice Type\" Quiz",
            description: "Personalized diagnostic to identify your unique vocal characteristics"
        },
        {
            icon: <img src="/images/7.5.png" alt="Certificate" className="w-10 h-10 md:w-12 md:h-12 object-contain" />,
            title: "Professional Certificate",
            description: "LinkedIn, Resume & Portfolio ready completion certificate"
        }
    ];

    return (
        <section className="bg-white w-full py-[60px] md:py-[96px] border-b border-[#E5E7EB]">
            <div className="container mx-auto max-w-[1446px] px-6 md:px-[112px]">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16 max-w-[1222px] mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <img src="/images/7.1.png" alt="Gift Icon" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                        <h2 className="font-serif text-[28px] md:text-[36px] md:leading-[40px] text-[#000000]">
                            Holiday Bonuses
                        </h2>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {bonuses.map((bonus, index) => (
                        <div
                            key={index}
                            className="bg-[#F2FBF4] border border-[#A5D6A7] rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex items-start md:items-center gap-5 md:gap-8 transition-all hover:shadow-md"
                        >
                            <div className="flex-shrink-0">
                                {bonus.icon}
                            </div>
                            <div>
                                <h3 className="font-sans font-bold text-[18px] md:text-[22px] text-[#1A1A1A] mb-2 leading-tight">
                                    {bonus.title}
                                </h3>
                                <p className="font-sans text-[14px] md:text-[16px] text-[#4A5568] leading-relaxed">
                                    {bonus.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Message */}
                <div className="mt-12 md:mt-16 text-center">
                    <p className="font-sans font-bold text-[16px] md:text-[18px] text-[#1A1A1A] flex items-center justify-center gap-2">
                        <span className="text-xl">🎄</span> Christmas Bonus: Instant digital gift card for friends/family
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BonusesSection;
