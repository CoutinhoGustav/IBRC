import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ slides, interval = 5000, className = "", aspectRatio = "aspect-[4/3]" }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, interval);
        return () => clearInterval(timer);
    }, [slides.length, interval]);

    return (
        <div className={`relative ${aspectRatio} overflow-hidden ${className}`}>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
                        index === currentSlide
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-105'
                    }`}
                >
                    <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover select-none pointer-events-none"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                    />
                </div>
            ))}

            {/* Carousel Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`Slide ${index + 1}`}
                        className={`h-2 rounded-full transition-all duration-500 ${
                            index === currentSlide
                                ? 'bg-primary w-8'
                                : 'bg-white/50 w-2 hover:bg-white/80'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
