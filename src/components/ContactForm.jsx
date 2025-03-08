import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          Contact Us
        </h2>
        <p className="text-lg text-center mb-8 text-gray-100">
          Have questions or need assistance? Reach out to us—we're here to help!
        </p>
        <div className="max-w-2xl mx-auto text-center">
          {/* Tally Form Embed */}
          <motion.button
            data-tally-open="mVD0Yg"
            data-tally-emoji-text="👋"
            data-tally-emoji-animation="wave"
            className="border-2 border-white text-white px-8 py-4 rounded-xl bg-transparent hover:bg-white hover:text-blue-600 transition-all duration-500 font-semibold text-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <span className="relative z-10">Get in Touch</span>
            <motion.span
              className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-500"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.1 }}
            />
          </motion.button>
        </div>
      </div>
    </section>
  );
}