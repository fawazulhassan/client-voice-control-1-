import React, { useState } from 'react';

const CurriculumSection = () => {
    const modules = [
        { id: 1, title: "Foundations of Vocal Power" },
        { id: 2, title: "Breath Control & Support" },
        { id: 3, title: "Resonance & Tone Shaping" },
        { id: 4, title: "Articulation & Dynamics" },
        { id: 5, title: "Emotional Expression & Presence" },
        { id: 6, title: "Vocal Strategy for Real-World Success" }
    ];

    const [activeModule, setActiveModule] = useState(1);

    return (
        <section className="bg-[#EFF9F0] w-full py-[80px] md:py-[148px]">
            <div className="container mx-auto max-w-[1446px] px-6 md:px-[112px]">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <img src="/images/6.png" alt="Curriculum Icon" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
                        <h2 className="font-serif text-[36px] md:text-[64px] font-bold text-[#212529]">
                            Course Curriculum
                        </h2>
                    </div>
                    <p className="font-sans text-[16px] md:text-[20px] text-[#2D3748] max-w-[846px] mx-auto leading-relaxed">
                        Each module includes video lessons, guided drills, feedback prompts, and warmups used by stage performers and professional speakers.
                    </p>
                </div>

                {/* Modules List */}
                <div className="flex flex-col gap-4 md:gap-5 max-w-[940px] mx-auto">
                    {modules.map((module) => (
                        <div
                            key={module.id}
                            onClick={() => setActiveModule(module.id)}
                            className={`
                                cursor-pointer transition-all duration-300 rounded-[12px] md:rounded-[16px] p-5 md:p-6 flex items-center justify-between border
                                ${activeModule === module.id
                                    ? 'bg-[#1A1A1A] border-[#1A1A1A] shadow-lg'
                                    : 'bg-white/50 border-[#A5D6A7] hover:bg-white hover:border-[#7DD3A8]'}
                            `}
                        >
                            <span className={`
                                font-sans font-bold text-[14px] md:text-[18px] uppercase tracking-wide
                                ${activeModule === module.id ? 'text-white' : 'text-[#1A1A1A]'}
                            `}>
                                MODULE {module.id} — {module.title}
                            </span>

                            <div className={`${activeModule === module.id ? 'text-[#7DD3A8]' : 'text-[#7DD3A8]'}`}>
                                <svg
                                    className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${activeModule === module.id ? 'rotate-180 md:rotate-0' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        d={activeModule === module.id ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"}
                                    />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CurriculumSection;
