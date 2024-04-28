// components/HorizontalScrollSection.js
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = ({ children }: any) => {
  const sectionRef = useRef<any>();

  useEffect(() => {
    const section = sectionRef.current;
    const container = section.querySelector('.container');
    const content = section.querySelector('.content');

    const width = content.offsetWidth - container.offsetWidth;

    gsap.to(content, {
      x: -width,
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className='horizontal-scroll-section'>
      <div className='container'>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;
