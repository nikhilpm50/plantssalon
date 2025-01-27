"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import TestimonialsSection from "./components/testimonials";

// Animations
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const scrollAnimation = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const imageFadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function PlantsSalonWebsite() {
  const franchises = [
    {
      image: "/valencia.webp", // Replace with actual image URL
      location: "Valencia, Manglore",
    },
    {
      image: "/manipal.jpeg",
      location: "Manipal, Karnataka",
    },
    {
      image: "/chennai.avif",
      location: "chennai, Tamil Nadu",
    },
    {
      image: "/nexus.avif",
      location: "Nexus Mall, Manglore",
    },
    // {
    //   image: "https://via.placeholder.com/400",
    //   location: "Dubai, UAE",
    // },
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-green-50 to-green-200 min-h-screen">
      {/* Hero Section with Main Image */}
      <section className="h-screen flex flex-col justify-center items-start text-left p-4 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={imageFadeIn}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/plants-bg.avif" // Replace with your actual image
            alt="Salon Hero"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 1 }}
          className="relative z-10 text-white"
        >
          <h1 className="text-5xl font-bold text-green-800 mb-4">
            A Touch of Nature by Plants
          </h1>
          <p className="text-lg text-green-700 mb-8">
            Experience rejuvenation inspired by nature.
          </p>
          <Button className="text-white bg-green-600 hover:bg-green-700">
            Book an Appointment
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-blue-100 h-auto">
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Hair Treatments", image: "hair.avif" },
              { name: "Skin Care", image: "skin.jpg" },
              { name: "Relaxing Massages", image: "massages.jpg" },
            ].map((service, index) => (
              <div
                key={index}
                className="relative bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <img
                  src={`/${service.image}`} // Use the image from public folder
                  alt={service.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white p-4">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    <p className="text-sm mt-2">
                      {service.name === "Hair Treatments"
                        ? "Restore the strength and shine of your hair with premium treatments."
                        : service.name === "Skin Care"
                        ? "Rejuvenate and nourish your skin with holistic care."
                        : "Relax and unwind with soothing massage techniques for the body and mind."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="font-cursive text-green-800 text-lg leading-relaxed mt-4">
              At the heart of every service we offer lies a commitment to
              providing you with not just a treatment, but an experience that
              nurtures your body and mind. Our hair treatments are designed to
              restore the health and vitality of your hair, using
              nature-inspired techniques that nourish and rejuvenate each
              strand. Whether you're looking for stronger hair, a shinier
              finish, or a more defined style, our expert therapists ensure that
              every treatment is customized to meet your specific needs.
            </p>
            <p className="font-cursive text-green-800 text-lg leading-relaxed mt-4">
              Our skin care services go beyond the typical facials, offering a
              holistic approach that addresses both inner and outer beauty. With
              a focus on natural ingredients and calming therapies, we create a
              personalized experience for each client, leaving your skin feeling
              refreshed, radiant, and youthful. Every treatment is an
              opportunity to unwind and reconnect with your true self, restoring
              balance and harmony to your skin and soul.
            </p>
            <p className="font-cursive text-green-800 text-lg leading-relaxed mt-4">
              Finally, our relaxing massages offer the perfect escape from the
              stresses of daily life. We use a combination of soothing
              techniques, including deep tissue and aromatherapy, to ease
              tension, promote relaxation, and enhance circulation. Each massage
              session is a moment to let go of worries and immerse yourself in
              total serenity. Whether you're seeking relief from physical
              discomfort or simply need a mental reset, our massage treatments
              are the perfect way to restore balance and leave you feeling
              renewed.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Franchises Section */}
      <section className="bg-green-900 py-16 px-8 h-auto">
        <motion.div
          className="container mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <div className="text-center md:text-left mb-8">
            <h2 className="text-4xl font-light leading-tight">
              <span className="text-green-500">Our</span>
              <br />
              <span className="text-black">Franchise</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {franchises.map((franchise, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={franchise.image}
                  alt={franchise.location}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 text-white">
                  <h3 className="text-lg font-semibold">
                    {franchise.location}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Instagram Video Section */}
      <section className="py-16 bg-white h-screen">
        <motion.div
          className="container mx-auto text-center h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-green-800 mb-8">
            Follow Us on Instagram
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 h-full">
            <div className="rounded-lg overflow-hidden shadow-lg h-full pb-20">
              <iframe
                className="w-full h-full"
                src="https://www.instagram.com/reel/DEWn__5Tyez/embed/"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                style={{ overflow: "hidden" }}
              ></iframe>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-full pb-20">
              <iframe
                className="w-full h-full"
                src="https://www.instagram.com/reel/DEZFwE4T6H2/embed/"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                style={{ overflow: "hidden" }}
              ></iframe>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-full pb-20">
              <iframe
                className="w-full h-full"
                src="https://www.instagram.com/reel/DESbq8Pz2KK/embed/"
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                style={{ overflow: "hidden" }}
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>

      <TestimonialsSection />

      <section className="py-16 h-screen relative">
        <div
          className="absolute inset-0 bg-cover bg-center backdrop-blur-md"
          style={{
            backgroundImage: "url(/contact-bg.jpg)",
            filter: "blur(2px)", // Adjust blur intensity
          }}
        ></div>
        <div className="container mx-auto h-full flex items-center justify-between relative z-10">
          <div className="w-1/2 pr-16 p-8 rounded-lg">
            <p className="text-lg text-green-700 font-bold italic">
              We’d love to hear from you! If you have any questions, feedback,
              or just want to say hi, don’t hesitate to reach out.
            </p>
          </div>

          <motion.div
            className="w-1/2 bg-white p-8 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <form>
              <h2 className="text-4xl font-bold text-green-800 mb-8">
                Contact Us
              </h2>
              <input
                type="text"
                placeholder="Your Name"
                className="mb-4 w-full p-2 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="mb-4 w-full p-2 border rounded-lg"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="mb-4 w-full p-2 border rounded-lg"
              ></textarea>
              <Button className="text-white bg-green-600 hover:bg-green-700 w-full">
                Submit
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-green-800 text-white text-center">
        <p className="text-sm">
          &copy; 2025 Plants Salon. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
