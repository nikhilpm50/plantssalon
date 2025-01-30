import React from "react";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from "./fibestMob.module.scss";
import Image from "next/image";

const cardData = [
  {
    bigImage: "/images/finest_big_1.jpg",
    smallImage: "/images/finest_small_1.jpg",
    title: "Only the finest material",
    description:
      "From the finest materials to the most refined finishes, we bring the world’s best for your project. Each piece of marble, wood, glass and leather is chosen not only for its appearance but for its texture, durability, and its ability to elevate the experience of the space.",
  },
  {
    bigImage: "/images/finest_big_2.jpg",
    smallImage: "/images/finest_small_2.jpg",
    title: "No compromise when crafting luxury",
    description:
      "Every element and furniture piece we use is nothing less than impeccable. From Minotti to Henge, Poliform, and Giorgetti, we bring only the finest into your space, because masterpieces aren’t simply built—they’re thoughtfully curated.",
  },
  {
    bigImage: "/images/finest_big_3.jpg",
    smallImage: "/images/finest_small_3.jpg",
    title: "Delivering Perfection with the In-house Team",
    description:
      "Every element and furniture piece we use is nothing less than impeccable. From Minotti to Henge, Poliform, and Giorgetti, we bring only the finest into your space, because masterpieces aren’t simply built—they’re thoughtfully curated.",
  },
  {
    bigImage: "/images/finest_big_4.jpg",
    smallImage: "/images/finest_small_4.jpg",
    title: "Comprehensive Quality Assurance Process",
    description:
      "Every element and furniture piece we use is nothing less than impeccable. From Minotti to Henge, Poliform, and Giorgetti, we bring only the finest into your space, because masterpieces aren’t simply built—they’re thoughtfully curated.",
  },
  {
    bigImage: "/images/finest_big_5.jpg",
    smallImage: "/images/finest_small_5.jpg",
    title: "Immaculate Brands from across the Globe",
    description:
      "These are the cornerstones of everything we do. From costs and profits to potential risks, we ensure that every aspect of the project is shared transparently. This commitment to clarity fosters trust and collaboration, allowing us to build true partnership.",
  },
  {
    bigImage: "/images/finest_big_6.jpg",
    smallImage: "/images/finest_small_6.jpg",
    title: "Precision and Creativity in Manufacturing",
    description:
      "We are a dynamic in-house team of creative and analytic minds, including architects, designers, engineers, builders, researchers and visionaries. This cohesive approach ensures seamless communication, consistency, and full control over quality at every stage.",
  },
];

gsap.registerPlugin(ScrollTrigger);
const FinestMob = ({isFull = false,}) => {
    useEffect(() => {
        const hasParallax = gsap.utils.toArray('.has-parallax');
    
        hasParallax.forEach((hParallax) => {
          const bgMedia = hParallax.querySelector('img') || hParallax.querySelector('video');
    
          const parallax = gsap.fromTo(
            bgMedia,
            { y: '-30%', scale: 1.3 },
            { y: '30%', scale: 1.1, duration: 1, ease: 'none' }
          );
    
          ScrollTrigger.create({
            trigger: hParallax,
            start: 'top 100%',
            end: () => `+=${hParallax.offsetHeight + window.innerHeight}`,
            animation: parallax,
            scrub: true,
          });
        });
    
        return () => {
          ScrollTrigger.getAll().forEach((st) => st.kill());
        };
      }, []);
    
  return (
    <div className={styles.FineshMob}>
      <div className="container">
        <div className={styles.fn_list}>
          {cardData.map((card, index) => (
            <div key={index} className={styles.fn_set}>
              <div className={`${styles.fn_set_img} has-parallax ${isFull ? 'full' : ''}`}>
                <Image
                  src={card.bigImage}
                  width={579}
                  height={737}
                  alt={card.title}
                />
              </div>
              <div className={styles.fn_contents}>
                <h2 className={`${styles.main_title} main_title`}>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinestMob;
