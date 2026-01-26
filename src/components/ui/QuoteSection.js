import React from 'react';

const QuoteSection = () => {
    return (
        <section className="bg-white w-full py-[60px] md:py-[100px] border-b border-[#E5E7EB]">
            <div className="container mx-auto max-w-[1446px] px-4 md:px-[80px]">
                <div className="relative w-full max-w-[1286px] mx-auto rounded-[24px] md:rounded-[40px] overflow-hidden shadow-xl aspect-[16/10] md:aspect-auto md:h-[858px]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <img
                            src="/images/9.png"
                            alt="Workshop"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
