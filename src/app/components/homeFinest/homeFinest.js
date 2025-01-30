"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./homeFinest.module.scss";
import FinestCard from "../cards/finestCard";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    bigImage: "/valencia.webp",
    smallImage: "/valencia.webp",
    title: "Only the finest material",
    description:
      "From the finest materials to the most refined finishes, we bring the world’s best for your project. Each piece of marble, wood, glass and leather is chosen not only for its appearance but for its texture, durability, and its ability to elevate the experience of the space.",
  },
  {
    bigImage: "/nexus.avif",
    smallImage: "/nexus.avif",
    title: "No compromise when crafting luxury",
    description:
      "Every element and furniture piece we use is nothing less than impeccable. From Minotti to Henge, Poliform, and Giorgetti, we bring only the finest into your space, because masterpieces aren’t simply built—they’re thoughtfully curated.",
  },
  {
    bigImage: "/manipal.jpeg",
    smallImage: "/manipal.jpeg",
    title: "Delivering Perfection with the In-house Team",
    description:
      "Every element and furniture piece we use is nothing less than impeccable. From Minotti to Henge, Poliform, and Giorgetti, we bring only the finest into your space, because masterpieces aren’t simply built—they’re thoughtfully curated.",
  },
  {
    bigImage: "/chennai.avif",
    smallImage: "/chennai.avif",
    title: "Comprehensive Quality Assurance Process",
    description:
      "Every element and furniture piece we use is nothing less than impeccable. From Minotti to Henge, Poliform, and Giorgetti, we bring only the finest into your space, because masterpieces aren’t simply built—they’re thoughtfully curated.",
  },
];

const HomeFinest = () => {
  const pinSec = useRef();

  useGSAP(
    (self) => {
      const contents = self.selector(".contents"); 
      const largeImages = self.selector(".large-img figure");
      const smallImages = self.selector(".small-img figure");
      const scrollEnd = 3000;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isSmall: "(max-width: 1600px)",
          isLarge: "(min-width: 769px)",
        },
        (context) => {
          const { isSmall, isLarge } = context.conditions;

          contents.forEach((element, i) => {
            if (i > 0) {
              gsap.set(element, {
                yPercent: isSmall ? i * 100 : i * 200,
                opacity: 0,
              });
            }
          });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: pinSec.current,
              start: "top top",
              end: `${scrollEnd} top`,
              pin: true,
              scrub: 1,
              onUpdate: (self) => {
                const progress = self.progress;
                const currentIndex = Math.floor(progress * contents.length);

                contents.forEach((element, i) => {
                  if (i === currentIndex) {
                    element.classList.add("active");
                    gsap.to(element, { opacity: 1, duration: 0.5 });
                  } else {
                    element.classList.remove("active");
                    gsap.to(element, { opacity: 0, duration: 0.5 }); // Hide previous sections
                  }
                });
              },
            },
          });

          largeImages.forEach((element, i) => {
            if (i > 0) {
              tl.to(element, { clipPath: "inset(0% 0% 0% 0%)" });
              tl.to(
                contents[i],
                { opacity: 1, yPercent: isSmall ? i * 30 : i * 40 },
                "<"
              );
              tl.to(
                smallImages[i],
                { clipPath: "inset(0% 0% 0% 0%)" },
                "<"
              );
            }
          });
        }
      );

      return () => mm.revert();
    },
    { scope: pinSec }
  );

  return (
    <div className="pin-wrap" ref={pinSec}>
      <div className={`pin_cards ${styles.stacking_cards}`}>
        <div className={styles.inner_cards}>
          <div className={`section pin_card ${styles.stacking_card}`}>
            <FinestCard data={cardData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFinest;
