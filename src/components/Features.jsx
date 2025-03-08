import { motion } from "framer-motion";
import featuresData from "../data/features.json";
import AnimatedSVG from "./AnimatedSVG";

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex justify-center">
            <AnimatedSVG />
          </div>

          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
            >
              <div className="text-blue-600 dark:text-blue-400 text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}