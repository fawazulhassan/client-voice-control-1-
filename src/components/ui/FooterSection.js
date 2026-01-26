import React from 'react';

const FooterSection = () => {
    return (
        <footer className="bg-[#EFF9F0] w-full py-16 md:py-20 border-t border-[#E5E7EB]">
            <div className="container mx-auto max-w-[1446px] px-6 md:px-[80px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
                    {/* Brand Column */}
                    <div>
                        <h3 className="font-sans font-bold text-[24px] text-[#000000] mb-6">
                            Sevil Velsha
                        </h3>
                        <p className="font-sans text-[16px] leading-[26px] text-[#4A5568] opacity-80 max-w-[320px]">
                            Unlock the power of your voice—speak with clarity, authority, and emotional impact. Whether you're presenting on stage, leading a team, negotiating a deal, or preparing for TED, your voice is your instrument of influence.
                        </p>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="font-sans font-bold text-[24px] text-[#000000] mb-6">
                            Quick Links
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Ph.D. in intonation and acoustics",
                                "My story",
                                "About me",
                                "How We Work",
                                "Testimonial",
                                "Order"
                            ].map((link, index) => (
                                <li key={index} className="flex items-center gap-3 group cursor-pointer">
                                    <span className="text-green-600 font-bold transform group-hover:translate-x-1 transition-transform">›</span>
                                    <span className="font-sans text-[16px] text-[#4A5568] group-hover:text-[#000000] transition-colors">{link}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opening Hours Column */}
                    <div>
                        <h3 className="font-sans font-bold text-[24px] text-[#000000] mb-6">
                            Contact & Resources
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <span className="text-xl">📘</span>
                                <span className="font-sans text-[16px] text-[#4A5568] group-hover:text-[#000000] transition-colors">YouTube: [The Voice Studio – Sevil Velsha]</span>
                            </li>
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <span className="text-xl">📸</span>
                                <span className="font-sans text-[16px] text-[#4A5568] group-hover:text-[#000000] transition-colors">Instagram: @sevil.velsha</span>
                            </li>
                            <li className="flex items-start gap-3 group cursor-pointer">
                                <span className="text-xl">✍️</span>
                                <span className="font-sans text-[16px] text-[#4A5568] group-hover:text-[#000000] transition-colors">Blog: Sound & Presence – Reflections on Speaking, Voice & Performance</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#D1D5DB] flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="font-sans text-[14px] md:text-[16px] text-[#4A5568] font-medium">
                        Copyright © 2025 Sevil Velsha
                    </p>

                    <div className="flex items-center gap-4">
                        {[
                            { src: "/images/11.1.png", alt: "Facebook" },
                            { src: "/images/11.2.png", alt: "X" },
                            { src: "/images/11.3.png", alt: "Instagram" }
                        ].map((social, index) => (
                            <div
                                key={index}
                                className="bg-[#E6E85F] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-md cursor-pointer hover:opacity-80 transition-opacity shadow-sm p-2 md:p-2.5"
                            >
                                <img
                                    src={social.src}
                                    alt={social.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
