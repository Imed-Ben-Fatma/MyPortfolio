'use client';

import * as React from 'react';
import { X } from 'lucide-react';

interface Screenshot {
  src: string;
  title: string;
  desc?: string;
  isTall?: boolean;
}

interface ScreenshotGalleryProps {
  galleryTitle: string;
  mobileTitle: string;
  screenshots: Screenshot[];
  mobileShots: Screenshot[];
}

export function ScreenshotGallery({
  galleryTitle,
  mobileTitle,
  screenshots,
  mobileShots,
}: ScreenshotGalleryProps) {
  const [activeImage, setActiveImage] = React.useState<string | null>(null);

  // Close lightbox on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Back-Office Screenshot Gallery Grid */}
      {screenshots && screenshots.length > 0 && (
        <div className="space-y-8 pt-6 border-t border-border/40">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{galleryTitle}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {screenshots.map((shot, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveImage(shot.src)}
                className="group rounded-2xl border border-border/80 bg-card overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Scrollable mockup browser window */}
                {shot.isTall ? (
                  /* Scrollable mockup browser window for tall/vertical screenshots */
                  <div className="relative h-[400px] w-full overflow-y-auto bg-muted border-b border-border/40 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground/20">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot.src}
                      alt={shot.title}
                      className="w-full h-auto object-cover object-top"
                    />
                  </div>
                ) : (
                  /* Standard fixed aspect-video preview window for normal height screenshots (e.g. Login Page) */
                  <div className="relative aspect-video w-full bg-muted border-b border-border/40 overflow-hidden flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shot.src}
                      alt={shot.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-5 space-y-1.5">
                  <h3 className="text-base font-bold text-foreground flex items-center justify-between">
                    {shot.title}
                    <span className="text-xs font-normal text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to expand
                    </span>
                  </h3>
                  {shot.desc && <p className="text-xs font-light text-muted-foreground leading-relaxed">{shot.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile App Showcase */}
      {mobileShots && mobileShots.length > 0 && (
        <div className="space-y-8 pt-6 border-t border-border/40">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">{mobileTitle}</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {mobileShots.map((shot, idx) => (
              <div 
                key={idx} 
                onClick={() => setActiveImage(shot.src)}
                className="group rounded-2xl border border-border/80 bg-card overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-full overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={shot.src}
                    alt={shot.title}
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {activeImage && (
        <div 
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 transition-all duration-300"
        >
          <button 
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 rounded-full bg-white/10 p-2.5 text-white hover:bg-white/20 transition-all duration-200"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-full max-h-[92vh] overflow-auto rounded-xl shadow-2xl bg-zinc-900 border border-white/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={activeImage} 
              alt="Expanded Preview" 
              className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg block"
            />
          </div>
        </div>
      )}
    </>
  );
}
