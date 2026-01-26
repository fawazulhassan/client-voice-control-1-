import React from 'react';

const PricingSection = () => {
    const plans = [
        {
            price: "$97",
            description: "Perfect for independent learners.",
            features: [
                "All modules",
                "Workbook",
                "Certificate",
                "Lifetime access"
            ],
            buttonText: "Choose Plan",
            isPopular: false
        },
        {
            name: "PRO TIER",
            price: "$297",
            description: "For learners who want personalized guidance.",
            features: [
                { text: "Everything in Self-Paced", isBold: true },
                "Feedback on your final video",
                "Correction notes & suggestions"
            ],
            buttonText: "Choose Pro Tier",
            isPopular: true
        },
        {
            price: "$597",
            description: "The highest transformation + direct access.",
            features: [
                { text: "Everything in PRO", isBold: true },
                "2 private coaching calls",
                "Personalized voice analysis",
                "Final certification"
            ],
            buttonText: "Choose Premium",
            isPopular: false
        }
    ];

    return (
        <section className="bg-[#EFF9F0] w-full py-[50px] md:py-[80px] border-b border-[#E5E7EB]">
            <div className="container mx-auto max-w-[1446px] px-6 md:px-[80px]">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-serif text-[32px] md:text-[48px] md:leading-[48px] text-[#000000]">
                        Pricing & Tiers
                    </h2>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-[#D5E6D8] rounded-[30px] p-8 flex flex-col items-center justify-between text-center transition-all hover:shadow-lg ${plan.isPopular ? 'border-2 border-[#1A1A1A] scale-105 z-10' : ''}`}
                        >
                            {plan.isPopular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-[12px] font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="w-full">
                                {plan.name && (
                                    <p className="font-sans font-bold text-[18px] text-[#000000] mb-2">
                                        {plan.name}
                                    </p>
                                )}
                                <h3 className="font-sans font-bold text-[48px] md:text-[56px] text-[#000000] mb-4 leading-none">
                                    {plan.price}
                                </h3>
                                <p className="font-sans text-[16px] text-[#000000] mb-8 leading-relaxed">
                                    {plan.description}
                                </p>

                                <ul className="space-y-4 mb-10 text-left w-full max-w-[240px] mx-auto">
                                    {plan.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3">
                                            {typeof feature === 'string' || !feature.isBold ? (
                                                <svg className="w-5 h-5 text-[#000000] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <svg className="w-5 h-5 text-[#000000] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                                </svg>
                                            )}
                                            <span className={`font-sans text-[15px] text-[#000000] ${feature.isBold ? 'font-bold' : ''}`}>
                                                {typeof feature === 'string' ? feature : feature.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className={`w-full max-w-[240px] py-4 rounded-[14px] font-bold text-[16px] transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md ${plan.isPopular
                                    ? 'bg-[#000000] text-white hover:bg-[#1A1A1A]'
                                    : 'border-2 border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-white'
                                }`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Guarantee Box */}
                <div className="max-w-[850px] mx-auto bg-white border border-dashed border-[#A5D6A7] rounded-[24px] p-8 md:p-12 text-center shadow-sm">
                    <h4 className="font-serif text-[24px] md:text-[28px] font-bold text-[#000000] mb-4">
                        30-Day Voice Transformation Guarantee
                    </h4>
                    <p className="font-sans text-[16px] md:text-[18px] text-[#000000] leading-relaxed max-w-[700px] mx-auto">
                        Try the Voice Control Method risk-free. If you don't feel a real difference in how you sound, speak, and are perceived — you may request a refund according to our policy.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
