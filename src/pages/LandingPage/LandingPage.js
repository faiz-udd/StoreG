import React from "react";
import HeroSection from "./HeroSection";
import Testimonials from "./Testimonials";
import PricingPlans from "./PricingPlans";
import Header from "./Header";
import '../../styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
      <HeroSection  />
      </section>
     

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <Testimonials />
      </section>

      {/* Pricing Plans Section */}
      <section className="pricing-plans-section">
        <PricingPlans />
      </section>
    </div>
  );
};

export default LandingPage;
