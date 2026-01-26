import React from 'react';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Michael B.",
            rating: 5,
            text: "I finally feel heard in meetings. My confidence has skyrocketed.",
            image: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            name: "Emily R.",
            rating: 5,
            text: "The feedback exercises were a game-changer. Highly recommend this.",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Daniel G.",
            rating: 5,
            text: "My vocal strain is gone, and my delivery is so much more impactful.",
            image: "https://randomuser.me/api/portraits/men/85.jpg"
        },
        {
            name: "Chris L.",
            rating: 5,
            text: "A truly transformative experience. My voice is rich and resonant.",
            image: "https://randomuser.me/api/portraits/men/22.jpg"
        }
    ];

    const StarRating = ({ rating }) => {
        return (
            <div className="flex gap-0.5">
                {[...Array(rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#FFC107]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    };

    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (current) {
            const scrollAmount = current.offsetWidth * 0.8;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-[#EFF9F0] w-full py-[60px] md:py-[100px] border-y border-[#E5E7EB] overflow-hidden relative">
            <div className="container mx-auto max-w-[1446px] px-6 md:px-[104px]">
                <div className="text-center mb-[40px] md:mb-[60px]">
                    <h2 className="font-serif text-[32px] md:text-[54px] font-bold text-[#212529] mb-3 md:mb-5 leading-tight">
                        Transforming Lives <span className="text-[#7DD3A8]">Worldwide</span>
                    </h2>
                    <p className="font-sans text-[14px] xs:text-[16px] md:text-[20px] md:leading-[28px] text-[#4A5568] tracking-[-0.74px] max-w-[1216px] mx-auto">
                        Real stories from readers who found freedom
                    </p>
                </div>

                <div className="relative">
                    {/* Navigation Buttons - Sides */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-20 hidden md:block">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-guarantee-green/20 bg-white/80 backdrop-blur-sm flex items-center justify-center text-guarantee-green hover:bg-guarantee-green hover:text-white transition-all duration-300 shadow-sm"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        </button>
                    </div>

                    <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-20 hidden md:block">
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-guarantee-green/20 bg-white/80 backdrop-blur-sm flex items-center justify-center text-guarantee-green hover:bg-guarantee-green hover:text-white transition-all duration-300 shadow-sm"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>

                    <div
                        ref={scrollRef}
                        className="flex flex-nowrap overflow-x-auto pb-8 md:pb-4 gap-[20px] md:gap-[30px] scrollbar-hide snap-x snap-mandatory px-4 md:px-0"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] p-6 md:p-8 flex flex-col gap-5 border border-white/50 snap-center
                                           w-[280px] xs:w-[320px] md:w-[calc((100%-60px)/3)] flex-shrink-0"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-[60px] h-[60px] rounded-full overflow-hidden border-2 border-guarantee-green/10">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="font-sans font-bold text-[#212529] text-base md:text-lg">{item.name}</h4>
                                        <StarRating rating={item.rating} />
                                    </div>
                                </div>
                                <p className="font-poppins text-[#495057] text-sm md:text-base leading-relaxed italic">
                                    "{item.text}"
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
