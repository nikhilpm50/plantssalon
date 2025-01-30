"use client";  // This makes the component a client-side component

import React, { useEffect } from 'react'; import styles from './card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Parallax from '../Paralax';

const ProjectCard = ({ href, mediaType, mediaSrc, title, subtitle }) => {
    

    return (
        <Link href={`${href}`} className={styles.project_card}>
            {/* <div className={styles.project_media}> */}
            <div className={`${styles.project_media} image-container `}>


                {mediaType === 'image' ? (
                    // <figure>
                    //     <Image src={mediaSrc} fill alt={title || 'Project image'} />
                    // </figure>

                    <Parallax

                        mediaSrc={mediaSrc}
                    />

                ) : mediaType === 'video' ? (
                    <div className={styles.video}>
                        {/* <video autoPlay muted loop playsInline> */}
                        {/* <source src={mediaSrc} type="video/mp4" />
                            Your browser does not support the video tag. */}
                        <Parallax
                            isVideo={true}
                            mediaSrc={mediaSrc}
                        />
                        {/* </video> */}

                    </div>
                ) : null}
            </div>
            <div className={styles.project_desc}>
                <h5>{subtitle}</h5>
                <h3>{title}</h3>
            </div>
        </Link>
    );
};


export default ProjectCard;
