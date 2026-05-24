import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function Card({ title, stat, description, image, align = 'left', link, onClick }) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);
  const speed = 15;
  
  const animationDefaults = { duration: 0.6, ease: 'expo' };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY, 2);
    const bottomEdgeDist = Math.pow(mouseX - width / 2, 2) + Math.pow(mouseY - height, 2);
    return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee-part');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener('resize', calculateRepetitions);
    return () => window.removeEventListener('resize', calculateRepetitions);
  }, [title, image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;
      const marqueeContent = marqueeInnerRef.current.querySelector('.marquee-part');
      if (!marqueeContent) return;
      const contentWidth = marqueeContent.offsetWidth;
      if (contentWidth === 0) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: 'none',
        repeat: -1
      });
    };

    const timer = setTimeout(setupMarquee, 50);
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [title, image, repetitions, speed]);

  const handleMouseEnter = (ev) => {
    if (window.matchMedia && !window.matchMedia('(hover: hover)').matches) return;
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
  };

  const handleMouseLeave = (ev) => {
    if (window.matchMedia && !window.matchMedia('(hover: hover)').matches) return;
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const edge = findClosestEdge(ev.clientX - rect.left, ev.clientY - rect.top, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
      .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
  };

  const handleClick = (ev) => {
    if (onClick) {
      ev.preventDefault();
      onClick(ev);
    }
  };

  const content = (
    <div 
      className="border-b border-divider bg-surface flex flex-col sm:flex-row items-stretch relative z-10 transition-none w-full h-full overflow-hidden group cursor-pointer"
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="flex flex-col sm:flex-row w-full relative z-10 bg-surface [@media(hover:hover)]:group-hover:opacity-0 transition-opacity duration-300">
        {image && (
          <div className="w-full sm:w-1/3 border-b sm:border-r border-divider filter grayscale overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover aspect-square sm:aspect-auto" />
          </div>
        )}
        <div className={`p-8 flex flex-col justify-center flex-1 ${align === 'right' ? 'text-right' : 'text-left'}`}>
          <h3 className="font-display text-4xl tracking-tighter font-bold mb-4">{title}</h3>
          {stat && <p className="font-display text-xl text-outline mb-4">{stat}</p>}
          <p className="font-body text-primary leading-relaxed">{description}</p>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden translate-y-[101%] z-20 flex items-center bg-primary"
        ref={marqueeRef}
      >
        <div className="h-full w-fit flex items-center" ref={marqueeInnerRef}>
          {[...Array(repetitions)].map((_, idx) => (
            <div className="marquee-part flex items-center flex-shrink-0 text-on-primary" key={idx}>
              <span className="whitespace-nowrap uppercase font-bold font-display text-6xl leading-[1] px-8 py-8">{title}</span>
              {image && (
                <div
                  className="w-48 h-24 mx-4 rounded-full bg-cover bg-center filter grayscale"
                  style={{ backgroundImage: `url(${image})` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return link && !onClick ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full relative z-10 hover:z-20">
      {content}
    </a>
  ) : (
    <div onClick={handleClick} className="block w-full relative z-10 hover:z-20">
      {content}
    </div>
  );
}
