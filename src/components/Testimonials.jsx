import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import testimonialsData from "../data/testimonials.json";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">What Our Customers Say</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Swiper spaceBetween={30} slidesPerView={1} loop={true}>
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{testimonial.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{testimonial.company}</p>
                  <p className="text-gray-700 dark:text-gray-200">{testimonial.review}</p>
                  <div className="flex justify-center mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}