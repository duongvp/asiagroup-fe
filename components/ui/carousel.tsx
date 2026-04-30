'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
    items: any[];
    renderItem: (item: any, index: number) => React.ReactNode;
    className?: string;
    autoPlay?: boolean;
    interval?: number;
    showControls?: boolean;
    index?: number;
    onChange?: (index: number) => void;
    minHeight?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
    items,
    renderItem,
    className = "",
    autoPlay = false,
    interval = 5000,
    showControls = false,
    index,
    onChange,
    minHeight = "400px"
}) => {
    const [internalIndex, setInternalIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const currentIndex = index !== undefined ? index : internalIndex;

    const next = useCallback(() => {
        setDirection(1);
        const nextIndex = (currentIndex + 1) % items.length;
        if (onChange) {
            onChange(nextIndex);
        } else {
            setInternalIndex(nextIndex);
        }
    }, [currentIndex, items.length, onChange]);

    const prev = useCallback(() => {
        setDirection(-1);
        const prevIndex = (currentIndex - 1 + items.length) % items.length;
        if (onChange) {
            onChange(prevIndex);
        } else {
            setInternalIndex(prevIndex);
        }
    }, [currentIndex, items.length, onChange]);

    useEffect(() => {
        if (autoPlay) {
            const timer = setInterval(next, interval);
            return () => clearInterval(timer);
        }
    }, [autoPlay, interval, next]);

    // Expose controls to parent if needed via ref or just rely on items length change if shared outside
    // For this specific task, we'll try to integrate with the existing buttons in page.tsx

    // We can use a trick: if externalControls is provided, we use its functions? 
    // No, better just export the component and let the user handle state if they want, 
    // but the request is "add slide carousel", so I'll make it self-contained but controllable.

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <div className={`relative w-full overflow-hidden ${className}`}>
            <div className="relative flex justify-center items-center w-full" style={{ minHeight }}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute w-full"
                    >
                        {renderItem(items[currentIndex], currentIndex)}
                    </motion.div>
                </AnimatePresence>
            </div>

            {showControls && (
                <>
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#111811]/10 hover:bg-[#111811]/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md transition-colors z-20 group"
                    >
                        <ChevronLeft className="text-[#111811] dark:text-white group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#111811]/10 hover:bg-[#111811]/20 dark:bg-white/10 dark:hover:bg-white/20 backdrop-blur-md transition-colors z-20 group"
                    >
                        <ChevronRight className="text-[#111811] dark:text-white group-hover:scale-110 transition-transform" />
                    </button>
                </>
            )}

            <div className="flex justify-center gap-2 mt-4 z-20 relative">
                {items.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            setDirection(idx > currentIndex ? 1 : -1);
                            if (onChange) {
                                onChange(idx);
                            } else {
                                setInternalIndex(idx);
                            }
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-primary w-6' : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};
