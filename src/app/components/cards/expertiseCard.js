import React from 'react';
import Image from 'next/image'; // Import Image from Next.js
import styles from './card.module.scss';
import Link from 'next/link';
import Parallax from "../Paralax";

const ExpertiseCard = ({ title, imageSrc, link }) => {
  return (
    <Link href={link} className={styles.expertise_card}>
      <div className={styles.img}>
        {/* <Image src={imageSrc} width={370} height={429} alt="image" /> */}
        <Parallax mediaSrc={imageSrc} />
      </div>
      <h3 className="h4">{title}</h3>
    </Link>
  );
};

export default ExpertiseCard;
