import React, { useState } from 'react';

const FAQSection = () => {
    const faqs = [
        {
            question: "Do I need experience?",
            answer: "No — this course works for beginners to advanced speakers. We start with the fundamentals and build up gradually."
        },
        {
            question: "Will my voice really change?",
            answer: "Yes. Students often hear results in 7–10 days. This is a proven method used by professional actors and speakers."
        },
        {
            question: "Is it useful for accents, anxiety, or public speaking?",
            answer: "Absolutely — these techniques strengthen clarity, confidence, and breath control, which helps with all speaking challenges."
        },
        {
            question: "How long do I keep access?",
            answer: "Lifetime access. You can return and practice anytime, at your own pace."
        }
    ];

    // Using an object to track which FAQs are expanded
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAccordion = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section className="bg-white w-full py-[60px] md:py-[100px] border-b border-[#E5E7EB]">
            <div className="container mx-auto max-w-[1446px] px-6 md:px-[80px]">
                {/* Header */}
                <div className="text-center mb-12 md:mb-20">
                    <h2 className="font-serif text-[28px] xs:text-[32px] md:text-[52px] font-bold text-[#1A1A1A] flex flex-row items-center justify-center gap-3 md:gap-4">
                        <span className="text-[#DA2020] inline-block mt-[-2px] md:mt-[-4px]">?</span>
                        <span>Frequently Asked Questions</span>
                    </h2>
                </div>

                {/* FAQ List */}
                <div className="max-w-[1024px] mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-0">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full py-6 md:py-8 flex items-center justify-between text-left group focus:outline-none"
                            >
                                <h3 className="font-sans font-bold text-[18px] md:text-[22px] text-[#000000] leading-tight">
                                    {faq.question}
                                </h3>
                                <svg
                                    className={`w-5 h-5 md:w-6 md:h-6 text-[#1A1A1A] transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${expandedIndex === index ? 'max-h-[300px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
                                <p className="font-sans text-[16px] md:text-[18px] text-[#4A5568] leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>

                            {/* Divider Line */}
                            <div className="w-full h-[1.5px] bg-[#2D312E]"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
