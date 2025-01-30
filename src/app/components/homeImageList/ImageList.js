"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./imageList.module.scss";
import Image from "next/image";

const ImageList = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Active section index (start from 1)
  const [totalCount, setTotalCount] = useState(0); // Total number of sections

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const cards = gsap.utils.toArray(".card");
    const spacer = 0;
    setTotalCount(cards.length);

    const distributor = gsap.utils.distribute({ base: 0.5, amount: 0.2 });

    // Loop through each card and apply animations
    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: `top-=${index * spacer} top+=0px`,
        endTrigger: ".pin-wrapper",
        end: `bottom+=${cards.length * spacer} bottom`,
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
        animation: gsap.to(card.querySelector(".pin-panel"), {
          opacity: 1,
          duration: 1,
        }),
        onUpdate: (self) => {
          if (self.isActive) {
            setActiveIndex(index + 1); // Update active index dynamically
          }
        },
      });
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="pin-wrapper">
      <div className={`cards ${styles.stacking_cards}`}>
        <div className={styles.inner_cards}>
          <div className={`section card ${styles.stacking_card}`}>
            <div className={styles.panel_img}>
              <img src="chennai.avif" width={1600} height={685} alt="img" />
              <div className={styles.counter}>
                <h5>
                  Chennai,
                  <span>Tamil Nadu</span>
                </h5>
              </div>
            </div>
          </div>
          <div className={`section card ${styles.stacking_card}`}>
            <div className={styles.panel_img}>
              <Image src="/valencia.webp" width={1600} height={685} alt="img" />
              <div className={styles.counter}>
                <h5>
                  Valencia,
                  <span>Manglore</span>
                </h5>
              </div>
            </div>
          </div>

          <div className={`section card ${styles.stacking_card}`}>
            <div className={styles.panel_img}>
              <img src="manipal.jpeg" width={1600} height={685} alt="img" />
              <div className={styles.counter}>
                <h5>
                  Manipal,
                  <span>Karnataka</span>
                </h5>
              </div>
            </div>
          </div>
          <div className={`section card ${styles.stacking_card}`}>
            <div className={styles.panel_img}>
              <img src="/nexus.jpg" width={1600} height={685} alt="img" />
              <div className={styles.counter}>
                <h5 style={{color:"black"}}>
                  Nexus,
                  <span style={{color:"black"}}>Manglore</span>
                </h5>
              </div>
            </div>
            {/* <div className={styles.counter}>
                            <h5>
                                {activeIndex.toString().padStart(2, "0")}
                                <span>/{totalCount.toString().padStart(2, "0")}</span>
                            </h5>
                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageList;
