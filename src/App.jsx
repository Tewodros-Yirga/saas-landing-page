import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import PricingCalculator from "./components/PricingCalculator";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import OnboardingWalkthrough from "./components/OnboardingWalkthrough";
import ContactForm from "./components/ContactForm";
import Blog from "./components/Blog";
import FeedbackWidget from "./components/FeedbackWidget";
import FeatureComparisonTable from "./components/FeatureComparisonTable"; // Import FeatureComparisonTable

export default function App() {
  return (
    <div className="dark:bg-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <PricingCalculator />
      <FAQ />
      <Newsletter />
      <Team />
      <Blog />
      <FeatureComparisonTable /> 
      <ContactForm />
      <Footer />
      <Chatbot />
      <OnboardingWalkthrough />
      <FeedbackWidget />
    </div>
  );
}