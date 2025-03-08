import { useState } from "react";
import {
  FaUsers,
  FaDatabase,
  FaProjectDiagram,
  FaChartLine,
  FaHeadset,
} from "react-icons/fa";

export default function FeatureComparisonTable() {
  const [highlightedPlan, setHighlightedPlan] = useState(null); // Track highlighted plan

  // Feature data
  const features = [
    {
      name: "Number of Users",
      icon: <FaUsers className="text-blue-600 dark:text-blue-400" />,
      free: "Up to 5",
      pro: "Up to 50",
      enterprise: "Unlimited",
    },
    {
      name: "Storage",
      icon: <FaDatabase className="text-blue-600 dark:text-blue-400" />,
      free: "10 GB",
      pro: "100 GB",
      enterprise: "Unlimited",
    },
    {
      name: "Projects",
      icon: <FaProjectDiagram className="text-blue-600 dark:text-blue-400" />,
      free: "1",
      pro: "10",
      enterprise: "Unlimited",
    },
    {
      name: "Analytics",
      icon: <FaChartLine className="text-blue-600 dark:text-blue-400" />,
      free: "Basic",
      pro: "Advanced",
      enterprise: "Advanced + AI",
    },
    {
      name: "Support",
      icon: <FaHeadset className="text-blue-600 dark:text-blue-400" />,
      free: "Email",
      pro: "Priority Email",
      enterprise: "24/7 Dedicated",
    },
  ];

  return (
    <section id="feature-comparison" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Feature Comparison</h2>
        <div className="overflow-x-auto dark:text-white">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="p-4"></th>
                <th
                  className={`p-4 cursor-pointer ${
                    highlightedPlan === "free"
                      ? "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
                      : "bg-white dark:bg-gray-700"
                  } rounded-t-lg`}
                  onMouseEnter={() => setHighlightedPlan("free")}
                  onMouseLeave={() => setHighlightedPlan(null)}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold dark:text-white">Free</h3>
                    <p className="text-gray-600 dark:text-gray-300">$0/month</p>
                  </div>
                </th>
                <th
                  className={`p-4 cursor-pointer ${
                    highlightedPlan === "pro"
                      ? "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
                      : "bg-white dark:bg-gray-700"
                  } rounded-t-lg`}
                  onMouseEnter={() => setHighlightedPlan("pro")}
                  onMouseLeave={() => setHighlightedPlan(null)}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold dark:text-white">Pro</h3>
                    <p className="text-gray-600 dark:text-gray-300">$20/month</p>
                  </div>
                </th>
                <th
                  className={`p-4 cursor-pointer ${
                    highlightedPlan === "enterprise"
                      ? "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
                      : "bg-white dark:bg-gray-700"
                  } rounded-t-lg`}
                  onMouseEnter={() => setHighlightedPlan("enterprise")}
                  onMouseLeave={() => setHighlightedPlan(null)}
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold dark:text-white">Enterprise</h3>
                    <p className="text-gray-600 dark:text-gray-300">Custom Pricing</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 dark:border-gray-700 ${
                    highlightedPlan ? "bg-gray-50 dark:bg-gray-700" : ""
                  }`}
                >
                  <td className="p-4 font-medium dark:text-white flex items-center space-x-2">
                    {feature.icon}
                    <span>{feature.name}</span>
                  </td>
                  <td
                    className={`p-4 ${
                      highlightedPlan === "free"
                        ? "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
                        : ""
                    }`}
                  >
                    {feature.free}
                  </td>
                  <td
                    className={`p-4 ${
                      highlightedPlan === "pro"
                        ? "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
                        : ""
                    }`}
                  >
                    {feature.pro}
                  </td>
                  <td
                    className={`p-4 ${
                      highlightedPlan === "enterprise"
                        ? "bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800"
                        : ""
                    }`}
                  >
                    {feature.enterprise}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}