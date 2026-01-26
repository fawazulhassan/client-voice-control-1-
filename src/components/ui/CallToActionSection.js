import React from 'react';

const CallToActionSection = () => {
    return (
        <section className="bg-[#EFF9F0] w-full md:h-[465px] flex items-center justify-center py-16 md:py-0 border-b border-[#E5E7EB]">
            <div className="container mx-auto max-w-[1446px] px-6 text-center">
                <h2 className="font-serif text-[36px] xs:text-[42px] md:text-[64px] font-bold text-[#000000] mb-4 leading-tight">
                    Your Voice Can Change Your Life.
                </h2>

                <p className="font-sans text-[16px] md:text-[20px] text-[#000000] mb-10 opacity-90">
                    Start today — and never sound the same again.
                </p>

                <div className="flex flex-col items-center gap-6">
                    <button className="bg-[#7EE38B] text-[#000000] font-sans font-bold py-4 md:py-5 px-8 md:px-14 text-[16px] md:text-[18px] rounded-[14px] md:rounded-[18px] shadow-[0_10px_20px_rgba(126,227,139,0.3)] hover:bg-[#6CD079] transition-all transform hover:scale-105 flex items-center gap-3">
                        <img src="/images/8.2.png" alt="Gift Icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                        Get Instant Access - 40% off
                    </button>

                    <div className="flex items-center justify-center gap-2.5">
                        <img src="/images/10.png" alt="Mail Icon" className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                        <span className="font-sans text-[16px] md:text-[20px] md:leading-[28px] text-[#090909]">
                            Deliver immediately. No Shipping
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;
