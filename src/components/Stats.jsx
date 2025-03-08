import { motion } from "framer-motion";

const stats = [
  { number: "10K+", label: "Users" },
  { number: "50K+", label: "Projects" },
  { number: "99%", label: "Satisfaction" },
  { number: "24/7", label: "Support" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-4xl font-bold mb-2 dark:text-white">{stat.number}</h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}