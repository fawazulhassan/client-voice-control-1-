import React from 'react';
import HeroSection from '../components/ui/HeroSection';
import InstructorSection from '../components/ui/InstructorSection';
import AvailabilitySection from '../components/ui/AvailabilitySection';
import TestimonialsSection from '../components/ui/TestimonialsSection';
import WhatYouWillGainSection from '../components/ui/WhatYouWillGainSection';
import CurriculumSection from '../components/ui/CurriculumSection';
import BonusesSection from '../components/ui/BonusesSection';
import GiftSection from '../components/ui/GiftSection';
import QuoteSection from '../components/ui/QuoteSection';
import PricingSection from '../components/ui/PricingSection';
import FAQSection from '../components/ui/FAQSection';
import CallToActionSection from '../components/ui/CallToActionSection';
import FooterSection from '../components/ui/FooterSection';

function Home() {
  return (
    <div className="bg-white font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Instructor Section */}
      <InstructorSection />

      {/* Availability Section */}
      <AvailabilitySection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* What You Will Gain Section */}
      <WhatYouWillGainSection />

      {/* Course Curriculum Section */}
      <CurriculumSection />

      {/* Holiday Bonuses Section */}
      <BonusesSection />

      {/* Gift Section */}
      <GiftSection />

      {/* Quote Section */}
      <QuoteSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Call To Action Section */}
      <CallToActionSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default Home;