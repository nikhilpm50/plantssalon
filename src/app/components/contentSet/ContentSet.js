"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./contentSet.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import splitTextAnimation from "../splitTextAnimation";
// import MediaParallax from "../ParalaxImage";
import Parallax from "../Paralax";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

const ContentSet = ({ heading, content, imageSrc, imageAlt }) => {
  const sectionsRef = useRef([]);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  splitTextAnimation(sectionsRef, "trigger_title");

  useEffect(() => {
    const containers = document.querySelectorAll(".image-container");

    containers.forEach((container) => {
      const mediaElement =
        container.querySelector("video") || container.querySelector("img");

      if (mediaElement) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          })
          .fromTo(
            mediaElement,
            { yPercent: -30 },
            { yPercent: 30, ease: "none" }
          );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section) => {
        const heading = section.querySelector("h2");

        if (heading) {
          const split = new SplitType(heading, { types: "words" });

          gsap.from(split.words, {
            x: 30,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            stagger: 0.05,
            scrollTrigger: {
              trigger: section,
              start: "top center",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.contents_set} ${inView ? styles.inview : ""} ${styles.pt_125} ${styles.pb_125}`}
    >
      <div
        className={styles.left_content}
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <h2 className="main_title trigger_title">{heading}</h2>
        <p>{content}</p>
      </div>
      <div className={styles.right_content}>
        <div className={`${styles.right_img}`}>
          <div className="image-container">
            <Parallax mediaSrc={imageSrc} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSet;
