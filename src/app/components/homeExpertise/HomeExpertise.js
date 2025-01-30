'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './homeExpertise.module.scss';
import ExpertiseCard from '../cards/expertiseCard';

const HomeExpertise = () => {
  const cardRef = useRef(null); // Ref to measure card width
  const [cardWidth, setCardWidth] = useState(0);

  useEffect(() => {
    // Update the card width after mounting
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.home_expertise}>
      <div
        className={styles.home_expert_list}
        style={{ '--card-width': `${cardWidth}px` }} // Pass card width as a CSS variable
      >
        <div className={styles.expert_set}>
          <div className={styles.single_set} ref={cardRef}>
            <ExpertiseCard
              title="Hair Treatments"
              imageSrc="hair.avif"
              link="#"
            />
          </div>
        </div>
        <div className={styles.expert_set}>
          <div className={styles.expert_column_left}>
              <ExpertiseCard
                title="Skin Care"
                imageSrc="skin.jpg"
                link="#"
              />
          </div>
          <div className={styles.expert_column_right}>
            <div className={styles.expert_item}>
              <ExpertiseCard
                title="Relaxing Massages"
                imageSrc="/massages.jpg"
                link="#"
              />
            </div>
            <div className={styles.expert_item}>
              <ExpertiseCard
                title="Nails"
                imageSrc="/nails.webp"
                link="#"
              />
            </div>
          </div>
        </div>
        <div className={styles.expert_set}>
          <div className={styles.single_set}>
            <ExpertiseCard
              title="Manicures & Pedicures"
              imageSrc="/manicure.webp"
              link="#"
            />
          </div>
        </div>
        <div className={styles.expert_set}>
          <div className={styles.expert_column_left}>
              <ExpertiseCard
                title="Haircuts & Styling"
                imageSrc="/hairStyle.webp"
                link="#"
              />
          </div>
          <div className={styles.expert_column_right}>
            <div className={styles.expert_item}>
              <ExpertiseCard
                title="Hair Coloring"
                imageSrc="/hairColor.jpg"
                link="#"
              />
            </div>
            <div className={styles.expert_item}>
              <ExpertiseCard
                title="Bridal"
                imageSrc="/bridal.webp"
                link="#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeExpertise;
