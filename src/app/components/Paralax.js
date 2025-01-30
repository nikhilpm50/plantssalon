import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Parallax = ({ mediaSrc, altText = 'Image', isFull = false, isVideo = false, isBorder = true }) => {
  useEffect(() => {
    const hasParallax = gsap.utils.toArray('.has-parallax');

    hasParallax.forEach((hParallax) => {
      const bgMedia = hParallax.querySelector('img') || hParallax.querySelector('video');

      const parallax = gsap.fromTo(
        bgMedia,
        { y: '-14%', scale: 1.2 },
        { y: ' 14%', scale: 1.1, duration: 1, ease: 'none' }
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
    <>
      <figure className={`has-parallax ${isFull ? 'full' : ''} ${isBorder == false ? 'zero_border' : ''} `}>
        <style jsx>{`
    .has-parallax {
      overflow: hidden;
      border-radius: 6px;  
      }
   
    .full.has-parallax {
      overflow: hidden;
      height: 100vh;
      position: relative;
      border-radius: 6px;  
    }
 .zero_border.has-parallax {

        
      border-radius:0px ;  

        }
    .has-parallax img, 
    .has-parallax video {
      max-width: 100%;
    }

    .has-parallax-content > .img,
    .has-parallax-content > video,
    .has-parallax > img,
    .has-parallax > video {
      width: 100%;
      height: 100%;
      // position: absolute;
      display: block;
      object-position: center;
      object-fit: cover;
      will-change: transform;  
    }
  `}</style>
        {isVideo ? (
          <video src={mediaSrc} autoPlay muted loop playsInline />
        ) : (
          <img className='img' src={mediaSrc} alt={altText} />
        )}
      </figure>

    </>
  );
};

export default Parallax;
