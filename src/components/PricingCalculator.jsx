import { useState } from "react";
import { motion } from "framer-motion";

export default function PricingCalculator() {
  // State for slider values
  const [users, setUsers] = useState(1);
  const [storage, setStorage] = useState(10); // In GB
  const [projects, setProjects] = useState(1);

  // State for optional features
  const [prioritySupport, setPrioritySupport] = useState(false);
  const [advancedAnalytics, setAdvancedAnalytics] = useState(false);

  // State for billing frequency
  const [isAnnualBilling, setIsAnnualBilling] = useState(false);

  // Pricing tiers
  const pricingTiers = [
    {
      name: "Free",
      basePrice: 0,
      features: ["Up to 5 users", "10 GB storage", "1 project"],
      userLimit: 5,
      storageLimit: 10,
      projectLimit: 1,
    },
    {
      name: "Pro",
      basePrice: 20,
      features: ["Up to 50 users", "100 GB storage", "10 projects"],
      userLimit: 50,
      storageLimit: 100,
      projectLimit: 10,
    },
    {
      name: "Enterprise",
      basePrice: 50,
      features: ["Unlimited users", "Unlimited storage", "Unlimited projects"],
      userLimit: Infinity,
      storageLimit: Infinity,
      projectLimit: Infinity,
    },
  ];

  // Calculate dynamic price based on usage and selected tier
  const calculatePrice = (tier) => {
    let basePrice = tier.basePrice;

    // Calculate additional costs
    let userCost = Math.max(0, users - tier.userLimit) * 2;
    let storageCost = Math.max(0, storage - tier.storageLimit) * 0.1;
    let projectCost = Math.max(0, projects - tier.projectLimit) * 5;

    // Add optional features
    let optionalCost = 0;
    if (prioritySupport) optionalCost += 10;
    if (advancedAnalytics) optionalCost += 15;

    // Apply annual discount (20%)
    let totalPrice = basePrice + userCost + storageCost + projectCost + optionalCost;
    if (isAnnualBilling) totalPrice *= 0.8;

    return totalPrice;
  };

  return (
    <section id="pricing-calculator" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Pricing Calculator</h2>

        {/* Billing Frequency Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-700 p-2 rounded-full">
            <button
              onClick={() => setIsAnnualBilling(false)}
              className={`px-6 py-2 rounded-full ${
                !isAnnualBilling
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-gray-600 dark:text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnualBilling(true)}
              className={`px-6 py-2 rounded-full ${
                isAnnualBilling
                  ? "bg-blue-600 text-white"
                  : "bg-transparent text-gray-600 dark:text-gray-300"
              }`}
            >
              Annual (20% off)
            </button>
          </div>
        </div>

        {/* Sliders for Usage Adjustment */}
        <div className="space-y-8">
          <div>
            <label className="block text-lg font-medium mb-2 dark:text-white">
              Number of Users: {users}
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={users}
              onChange={(e) => setUsers(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2 dark:text-white">
              Storage (GB): {storage}
            </label>
            <input
              type="range"
              min="10"
              max="1000"
              value={storage}
              onChange={(e) => setStorage(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-2 dark:text-white">
              Number of Projects: {projects}
            </label>
            <input
              type="range"
              min="1"
              max="100"
              value={projects}
              onChange={(e) => setProjects(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        {/* Optional Features */}
        <div className="mt-8 space-y-4">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={prioritySupport}
              onChange={(e) => setPrioritySupport(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-lg dark:text-white">Priority Support (+$10/month)</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={advancedAnalytics}
              onChange={(e) => setAdvancedAnalytics(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="text-lg dark:text-white">Advanced Analytics (+$15/month)</span>
          </label>
        </div>

        {/* Display Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{tier.name}</h3>
              <p className="text-4xl font-bold mb-4 dark:text-white">
                ${calculatePrice(tier).toFixed(2)}
                <span className="text-lg text-gray-600 dark:text-gray-300">
                  /{isAnnualBilling ? "year" : "month"}
                </span>
              </p>
              <ul className="space-y-2 mb-6">
                {tier.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}