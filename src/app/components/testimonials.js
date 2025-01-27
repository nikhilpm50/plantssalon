import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Absolutely refreshing! The atmosphere and service were perfect!",
    image: "/testi1.jpg", // Image in the public folder
    bgColor: "bg-pink-100/50",
  },
  {
    text: "Amazing staff and ambiance! A must-visit for relaxation!",
    image: "/testi2.jpg", // Image in the public folder
    bgColor: "bg-green-100/50",
  },
  {
    text: "Nature vibes all the way! Truly a rejuvenating experience!",
    image: "/testi3.jpg", // Image in the public folder
    bgColor: "bg-blue-100/50",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={`relative h-screen overflow-hidden`}>
      {/* Doodle Art Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/doodle.png')" }}
      ></div>

      {/* Background overlay */}
      <div
        className={`absolute inset-0 transition-colors duration-500 ${testimonials[currentIndex].bgColor}`}
      ></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full">
        {/* Animated Text and Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center p-12 rounded-lg shadow-xl relative max-w-4xl" // Increased padding and width
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(255, 255, 255, 0.8) 0%,
                  rgba(255, 255, 255, 0.6) 20%,
                  rgba(255, 255, 255, 0.3) 40%,
                  rgba(255, 255, 255, 0) 60%,
                  rgba(255, 255, 255, 0.3) 80%,
                  rgba(255, 255, 255, 0.6) 100%
                ),
                linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.1) 0%,
                  rgba(0, 0, 0, 0.4) 20%,
                  rgba(0, 0, 0, 0.6) 60%,
                  rgba(0, 0, 0, 0.3) 100%
                )
              `,
              backgroundSize: "100% 100%, 100% 100%",
              backgroundPosition: "center",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h2 className="text-5xl font-bold text-green-800 mb-8"> {/* Increased font size */}
              What Our Clients Say
            </h2>
            <p className="text-xl italic text-gray-700 max-w-3xl mx-auto mb-8"> {/* Increased font size */}
              {testimonials[currentIndex].text}
            </p>
            <motion.img
              src={testimonials[currentIndex].image}
              alt="Testimonial"
              className="rounded-lg shadow-lg mx-auto max-w-md" 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 flex space-x-4">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-green-800 shadow-lg hover:bg-gray-200 transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-green-800 shadow-lg hover:bg-gray-200 transition" 
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
