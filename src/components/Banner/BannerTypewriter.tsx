import { useTypewriter } from '@/modules/react-simple-typewriter/hooks/useTypeWriter';
import React, { useEffect, useMemo, useRef, useState } from 'react'

// const words = ["Image", "Video", "Audience"];
// function measureText(string: string) {
//     const widths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.503334045410156, 0.6566665649414063, 0.7066665649414062, 0.7066665649414062, 1.033332824707031, 0.825, 0.4633331298828125, 0.5166671752929688, 0.5166671752929688, 0.628334045410156, 0.7066665649414062, 0.4633331298828125, 0.5199996948242187, 0.4633331298828125, 0.548333740234375, 0.7066665649414062, 0.7066665649414062, 0.7066665649414062, 0.7066665649414062, 0.7066665649414062, 0.7066665649414062, 0.7066665649414062, 0.7066665649414062, 0.7066665649414062, 0.7066665649414062, 0.4633331298828125, 0.4633331298828125, 0.7066665649414062, 0.7066665649414062, 0.7066665649414062, 0.6350006103515625, 1.0633331298828126, 0.753334045410156, 0.7916671752929687, 0.773333740234375, 0.8199996948242188, 0.731666564941406, 0.7033340454101562, 0.825, 0.856666564941406, 0.475, 0.6883331298828125, 0.7883331298828125, 0.6949996948242188, 0.9383331298828125, 0.8550003051757813, 0.8699996948242188, 0.773333740234375, 0.8699996948242188, 0.7816665649414063, 0.7383331298828125, 0.7416671752929688, 0.85, 0.7350006103515625, 0.9949996948242188, 0.7283340454101562, 0.698333740234375, 0.7416671752929688, 0.5166671752929688, 0.548333740234375, 0.5166671752929688, 0.7066665649414062, 0.7, 0.748333740234375, 0.7100006103515625, 0.7600006103515625, 0.6600006103515625, 0.7600006103515625, 0.7033340454101562, 0.5350006103515625, 0.7133331298828125, 0.753334045410156, 0.45333404541015626, 0.504998779296875, 0.7100006103515625, 0.46666717529296875, 1.0383331298828125, 0.753334045410156, 0.748333740234375, 0.7600006103515625, 0.7600006103515625, 0.5666671752929687, 0.625, 0.55, 0.75, 0.6816665649414062, 0.9366668701171875, 0.6633331298828125, 0.6816665649414062, 0.6350006103515625, 0.5166671752929688, 0.45, 0.5166671752929688, 0.7066665649414062]
//     const avg = 0.6925001428482378
//     return string
//     .split('')
//     .map(c => c.charCodeAt(0) < widths.length ? widths[c.charCodeAt(0)] : avg)
//     .reduce((cur, acc) => acc + cur) * avg
// }

type Props = {items: string[], itemsWidth: number[]}
export default function BannerTypewriter({ items,itemsWidth }: Props) {
    const measuredLength = itemsWidth;
    const [currentWordIdx, setCurrentWordIdx] = useState(0);
    const typewriter = useRef<HTMLElement | null>(null);
    const [text, helpers] = useTypewriter({
        words: items,
        loop: 0,
        delaySpeed: 2000,
        typeSpeed: 200,
        strategy: "start_from_full"
    })
    const { isDelete } = helpers;
    useEffect(() => {
        if (isDelete === true) {
            setCurrentWordIdx((curr) => {
                if (curr >= items.length - 1) return 0;
                return curr + 1;
            });
        }
    }, [isDelete, items.length]);

    useEffect(() => {
        console.log("Updating current word " + items[currentWordIdx]);
        if (typewriter.current) {
            typewriter.current.style.width = measuredLength[currentWordIdx] + 0.5 + "em";
        }
    }, [currentWordIdx, measuredLength, items]);
    return (
        
        <b ref={typewriter} className='transition-[width] duration-700 inline-block'>
            {text}<span className='animate animate-cursor'>|</span>
        </b>
        
    )
}