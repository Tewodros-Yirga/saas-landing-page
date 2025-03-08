import pricingData from "../data/pricing.json";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold mb-4 dark:text-white">{plan.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
              <p className="text-4xl font-bold mb-4 dark:text-white">{plan.price}</p>
              <ul className="mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="text-gray-600 dark:text-gray-300 mb-2">{feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}