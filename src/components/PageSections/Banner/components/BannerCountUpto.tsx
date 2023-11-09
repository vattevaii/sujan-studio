import React, { useState, useEffect } from 'react';

type Props = {
    count: number;
    delay?: number;
    duration?: number;
    append?: string;
    prepend?: string;
    start?: number;
};

export default function BannerCountUpTo({ count: actual, start, delay = 0, duration = 2, append, prepend }: Props) {
    const [count, setCount] = useState(start ? start : 0);

    useEffect(() => {
        let animationFrameId: number;

        const startCounting = () => {
            const startTime = Date.now();

            const animateCount = () => {
                const elapsedTime = Date.now() - startTime;
                const progress = Math.min(1, elapsedTime / (duration * 1000));
                const newValue = (start?start:0) + Math.floor(progress * (actual - (start?start:0)));
                setCount(newValue);

                if (progress < 1) {
                    animationFrameId = requestAnimationFrame(animateCount);
                }
            };

            animationFrameId = requestAnimationFrame(animateCount);
        };

        const timeoutId = setTimeout(() => {
            startCounting();
        }, delay * 1000);

        return () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(animationFrameId);
        };
    }, [actual, delay, duration, start]);

    return <b className="leading-[1.2em]">{prepend}{count}{append}</b>;
}