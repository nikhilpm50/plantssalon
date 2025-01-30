"use client"; // This makes the component a client-side component
import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import TestimonialsSection from "./components/testimonials";
import ContentSet from "./components/contentSet/ContentSet";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../public/styles/home.module.scss";
import splitTextAnimation from "./components/splitTextAnimation";
import BenchmarkCard from "./components/cards/BenchmarkCard";
import HomeFinest from "./components/homeFinest/homeFinest";
import FinestMob from "./components/finestMob/FineshMob";
import ImageList from "./components/homeImageList/ImageList";
import HomeExpertise from "./components/homeExpertise/HomeExpertise";

const benchCardlist = [
  {
    videoSrc: "https://www.instagram.com/reel/DEWn__5Tyez/embed/",
    imageAlt: "Dynamic Spiral Villa",
    link: "/work/acoustic-balance",
    title: "Dynamic Spiral Villa",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    location: "Palm Jumeirah",
  },
  {
    videoSrc: "https://www.instagram.com/reel/DESbq8Pz2KK/embed/",
    imageAlt: "The Elevated Oasis - Penthouse ",
    link: "/work/address-downtown",
    title: "The Elevated Oasis - Penthouse ",
    location: "Confidential",
  },
  {
    videoSrc: "https://www.instagram.com/reel/DEZFwE4T6H2/embed",
    imageAlt: "Villa on Fond G",
    link: "/work-detail-2",
    title: "Villa on Fond G",
    location: "Palm Jumeirah",
  },
  {
    videoSrc: "https://www.instagram.com/reel/DEWn__5Tyez/embed/",
    imageAlt: "The Regal Escape -  Apartment",
    link: "/work-detail-3",
    title: "The Regal Escape -  Apartment",
    location: "Dubai Marina",
  },
];

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

gsap.registerPlugin(ScrollTrigger);
export default function PlantsSalonWebsite() {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const sectionsRef = useRef([]);
  const headerRef = useRef(null); // ref for the sticky header
  splitTextAnimation(sectionsRef, "trigger_title");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentPath = window.location.pathname;
      if (currentPath === "/") {
        document.documentElement.classList.add("home_page");
      } else {
        document.documentElement.classList.remove("home_page");
      }
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); // Register GSAP ScrollTrigger plugin

    // ScrollTrigger logic for section1
    ScrollTrigger.create({
      trigger: sectionsRef.current[1], // targeting the section1
      start: "top top", // When the section reaches the top of the viewport
      end: "bottom 310", // When the section scrolls past the top of the viewport
      pin: headerRef.current, // Pin the header element
      pinSpacing: false, // Optional: to disable extra space added during pinning
      onEnter: () => {
        // When entering the section, add 'fixed' class
        headerRef.current.classList.add("fixed");
      },
      onLeave: () => {
        // When leaving the section, remove 'fixed' class
        headerRef.current.classList.remove("fixed");
      },
      onEnterBack: () => {
        // When coming back into the section, add 'fixed' class
        headerRef.current.classList.add("fixed");
      },
      onLeaveBack: () => {
        // When leaving the section in reverse direction, remove 'fixed' class
        headerRef.current.classList.remove("fixed");
      },
      onComplete: () => {
        // When the section has been fully scrolled through, remove 'fixed' class
        headerRef.current.classList.remove("fixed");
      },
    });
  }, []);

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
    <div className={styles.page}>
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

      {/* second section */}
      <div className="container">
        <div>
          <ContentSet
            heading="Plants Salon –  A Touch of Nature"
            content={
              <>
                A <strong>luxury salon experience</strong> designed to bring out
                your natural beauty with expert care. At{" "}
                <strong>Plants Salon</strong>, our philosophy revolves around
                <strong> ‘Care, Craft, Confidence’</strong>, ensuring every
                service enhances your look and well-being.
                <strong> No shortcuts—just artistry and precision,</strong>{" "}
                combining the latest techniques, premium products, and a touch
                of elegance to create a salon experience that’s as refreshing as
                it is transformative.
              </>
            }
            imageSrc="/valencia.webp"
            imageAlt="Modern luxury salon ambiance"
          />
        </div>
      </div>

      {/* third section */}
      <div
        className={`${styles.hoem_benchmark} ${styles.pt_100} ${styles.pb_100} bg_color`}
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <div className="container">
          <div className="top_title">
            <h2 className="main_title trigger_title">
              Follow us on <br />
              Instagram!
            </h2>
            {/* <p>
              Our commitment to quality and perfection has earned us a
              distinguished reputation in the industry, encapsulated in what is
              now known as 'The Alpago Experience.' Discover why 'Alpago' has
              become synonymous with excellence.
            </p> */}
          </div>
          <div className={styles.becnchmark_list}>
            {benchCardlist.map((card, index) => (
              <div className={styles.benchmark_set} key={index}>
                <BenchmarkCard data={card} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* fourth section */}
      <ImageList />

      {/* fifth section */}
      <div
        className={`${styles.pt_100} ${styles.pb_100} ${styles.home_expertise} bg_color section1`}
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className={styles.exp_head}>
          <div className="container">
            <h2 className="main_title sticky-header trigger_title" ref={headerRef}>
              Our Services
            </h2>
          </div>
        </div>
        <HomeExpertise />
      </div>

      <section className="py-16 h-auto relative">
        <div
          className="absolute inset-0 bg-cover bg-center backdrop-blur-md"
          style={{
            backgroundImage: "url(/contact-bg.jpg)",
            filter: "blur(2px)",
          }}
        ></div>
        <div className="container mx-auto h-full flex flex-col sm:flex-row items-center justify-between relative z-10">
          <div className="w-full sm:w-1/2 px-4 py-8 text-center sm:text-left">
            <p className="text-lg text-green-700 font-bold italic">
              We’d love to hear from you! If you have any questions, feedback,
              or just want to say hi, don’t hesitate to reach out.
            </p>
          </div>

          <motion.div
            className="w-full sm:w-1/2 bg-white p-8 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 1 }}
          >
            <form>
              <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-8">
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
