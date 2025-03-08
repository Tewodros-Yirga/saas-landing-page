import Joyride from "react-joyride";
import { useState } from "react";

export default function OnboardingWalkthrough() {
  const [runTour, setRunTour] = useState(true); // Start the tour automatically

  // Steps for the onboarding walkthrough
  const steps = [
    {
      target: "#hero", // Target the Hero section
      content: "Welcome to TaskFlow! Let’s get started.",
      placement: "center",
    },
    {
      target: "#features", // Target the Features section
      content: "Explore our powerful features to streamline your workflow.",
      placement: "bottom",
    },
    {
      target: "#pricing", // Target the Pricing section
      content: "Choose the perfect plan for your team.",
      placement: "top",
    },
    {
      target: "#testimonials", // Target the Testimonials section
      content: "See what our customers are saying about TaskFlow.",
      placement: "top",
    },
    {
      target: "#faq", // Target the FAQ section
      content: "Got questions? Check out our FAQ for answers.",
      placement: "top",
    },
    {
      target: "#newsletter", // Target the Newsletter section
      content: "Subscribe to our newsletter for updates and offers.",
      placement: "top",
    },
  ];

  return (
    <Joyride
      steps={steps}
      run={runTour}
      continuous={true} // Continue to the next step automatically
      showProgress={true} // Show progress indicator
      showSkipButton={true} // Allow users to skip the tour
      styles={{
        options: {
          primaryColor: "#3b82f6", // Match your theme color
          textColor: "#1f2937", // Dark text
          backgroundColor: "#ffffff", // White background
          overlayColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
        },
      }}
      callback={(data) => {
        if (data.status === "finished" || data.status === "skipped") {
          setRunTour(false); // Stop the tour when finished or skipped
        }
      }}
    />
  );
}