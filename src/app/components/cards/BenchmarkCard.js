import React from 'react';
import styles from './card.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Parallax from '../Paralax';

const BenchmarkCard = ({ data }) => {
  const {
    imageSrc,
    videoSrc,
    imageAlt = 'image',
    link,
    title,
    description = '',
    location,
  } = data;

  // Function to check if videoSrc is an Instagram Reel
  const isInstagramReel = (url) => {
    return url.includes('instagram.com/reel') || url.includes('instagram.com/p');
  };

  return (
    <Link href={link} className={styles.bench_card}>
      <div className={styles.benchmark_media}>
        {videoSrc ? (
          <div className={styles.video}>
            {isInstagramReel(videoSrc) ? (
              // Instagram Reel Embed
              <div className={styles.iframeContainer}>
                <iframe
                  src={`${videoSrc}`}
                  className={styles.instagramEmbed}
                  width="100%"
                  height="600px"
                  frameBorder="0"
                  allowFullScreen
                  scrolling="no" // Disable scrolling
                  style={{ border: 'none', overflow: 'hidden' }} // Extra safety
                ></iframe>
              </div>
            ) : (
              // Render normal video with Parallax
              <Parallax mediaSrc={videoSrc} isVideo={true} />
            )}
          </div>
        ) : imageSrc ? (
          <div className={styles.image}>
            <Parallax mediaSrc={imageSrc} />
          </div>
        ) : null}

        {/* {link ? (
          <div className={`${styles.arw_btn} arw_btn`}>
            <Image src="/images/btn_arw.png" width={28} height={28} alt="Arrow Button" />
          </div>
        ) : null} */}
      </div>
      {/* <div className={styles.bench_card_details}>
        <div className={styles.bech_detail_top}>
          <h3>{title}</h3>
          <h4>{location}</h4>
        </div>
        {description && <p>{description}</p>}
      </div> */}
    </Link>
  );
};

export default BenchmarkCard;
