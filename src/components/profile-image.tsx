'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

interface ProfileImageProps {
  src: any;
  alt: string;
}

export default function ProfileImage({ src, alt }: ProfileImageProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2); // range: -1 to 1
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // range: -1 to 1
    setMouseOffset({ x: x * 6, y: y * 6 }); // reduced to max 6px movement
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  // Parallax scroll: image moves slightly slower than the page scroll (softer multiplier)
  const parallaxY = scrollY * 0.05;

  return (
    <div className="md:col-span-5 flex justify-center items-center">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative w-[320px] h-[400px] sm:w-[400px] sm:h-[500px] flex items-center justify-center transition-transform duration-700 ease-out"
        style={{
          transform: `translateY(${parallaxY}px)`,
        }}
      >
        {/* Soft background glow that scales and shifts on hover */}
        <div
          className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full bg-slate-200/50 dark:bg-zinc-800/40 blur-3xl -z-10 transition-all duration-700 ease-out"
          style={{
            transform: `translate(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px) scale(${mouseOffset.x !== 0 ? 1.08 : 1})`,
          }}
        ></div>

        {/* 3D tilt container for the silhouette (with native transparency mask at the bottom) */}
        <div
          className="w-full h-full relative transition-transform duration-700 ease-out"
          style={{
            transform: `translate(${mouseOffset.x}px, ${mouseOffset.y}px) rotateX(${-mouseOffset.y * 0.2}deg) rotateY(${mouseOffset.x * 0.2}deg)`,
            perspective: '1000px',
            WebkitMaskImage: 'linear-gradient(to top, transparent, black 80px)',
            maskImage: 'linear-gradient(to top, transparent, black 80px)',
          }}
        >
          <Image
            src={src}
            alt={alt}
            priority
            placeholder="blur"
            className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)] dark:drop-shadow-[0_15px_30px_rgba(255,255,255,0.06)]"
          />
        </div>
      </div>
    </div>
  );
}
