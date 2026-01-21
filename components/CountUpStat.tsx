// components/UniformCountUp.jsx
'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface UniformCountUpProps {
    icon: React.ReactNode;
    endValue: number;
    label: string;
    suffix?: string;
    prefix?: string;
    duration?: number;
    steps?: number; // Số bước (frame) cố định
}

const UniformCountUp = ({
    icon,
    endValue,
    label,
    suffix = '',
    prefix = '',
    duration = 3,
    steps = 60 // 60 steps trong 3 giây = 20fps
}: UniformCountUpProps) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Tính toán để mỗi component đều có cùng số frame
    const formatAsNumber = (value: number) => {
        const formatter = new Intl.NumberFormat('en-US');
        return formatter.format(value);
    };

    return (
        <div
            ref={ref}
            className="flex flex-col items-center justify-center p-4 text-center"
        >
            <div className="mb-2">{icon}</div>
            <p className="text-4xl font-bold tracking-tight text-white mb-1">
                {isClient && inView ? (
                    <CountUp
                        end={endValue}
                        duration={duration}
                        separator=","
                        prefix={prefix}
                        suffix={suffix}
                        // Quan trọng: dùng useEasing = false để tăng tuyến tính
                        useEasing={false}
                        // Tùy chỉnh easing function để tăng đều
                        easingFn={(t, b, c, d) => {
                            // Linear easing - tăng đều
                            return c * (t / d) + b;
                        }}
                    />
                ) : (
                    <span className="opacity-50">{prefix}0{suffix}</span>
                )}
            </p>
            <p className="text-blue-200 text-sm font-medium uppercase tracking-wider mt-2">{label}</p>
        </div>
    );
};

export default UniformCountUp;