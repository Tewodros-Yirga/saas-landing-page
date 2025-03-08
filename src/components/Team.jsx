import { motion } from "framer-motion";

const team = [
  { name: "John Doe", role: "CEO", image: "/src/assets/b.webp" },
  { name: "Jane Smith", role: "CTO", image: "/src/assets/a.webp" },
  { name: "Sam Johnson", role: "Designer", image: "/src/assets/a.webp" },
];

export default function Team() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center"
            >
              <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 dark:text-white">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}