"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import card1 from "../image/card1.png";
import card2 from "../image/card2.png";
import card3 from "../image/card3.png";
import card4 from "../image/card4.png";
import card5 from "../image/card5.png";
import card6 from "../image/card6.png";
import Sales from "./complexpage/Sales";

export default function CardCollection() {
    const [scrollY, setScrollY] = useState(0);
    const [showNextPage, setShowNextPage] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            // Trigger next page when scroll passes threshold
            if (window.scrollY > 400) { // adjust threshold as needed
                setShowNextPage(true);
            } else {
                setShowNextPage(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const spread = scrollY * 0.15;


    const scaleFactor = 1 + Math.min(scrollY * 0.005, 0.5); // max 3x
    const opacityFactor = Math.max(0, 1 - scrollY * 0.0025); // fade out

    if (showNextPage) {

        return (
            <Sales />
        );
    }


    return (
        <section className="relative w-full flex justify-center items-center py-2 h-screen">
            <div className="relative -top-60 h-[260px] w-full max-w-7xl flex items-center pb-6">

                {/* CARD 1 */}
                <div
                    className="absolute transition-all duration-300"
                    style={{
                        transform: `translateX(${-210 - spread}px) translateY(16px) rotate(-10deg) scale(${scaleFactor})`,
                        opacity: opacityFactor,
                    }}
                >
                    <Image src={card1} alt="card1" width={420} height={320} className="rounded-2xl shadow-2xl" />
                </div>

                {/* CARD 2 */}
                <div
                    className="absolute z-20 transition-all duration-300"
                    style={{
                        transform: `translateX(${-spread * 0.5}px) translateY(48px) rotate(-1deg) scale(${scaleFactor})`,
                        opacity: opacityFactor,
                    }}
                >
                    <Image src={card2} alt="card2" width={420} height={320} className="rounded-2xl shadow-2xl" />
                </div>

                {/* CARD 3 */}
                <div
                    className="absolute z-40 transition-all duration-300"
                    style={{
                        transform: `translateX(${160}px) translateY(${16 - spread * 0.1}px) scale(${scaleFactor})`,
                        opacity: opacityFactor,
                    }}
                >
                    <Image src={card3} alt="card3" width={420} height={220} className="rounded-2xl shadow-2xl" />
                </div>

                {/* CARD 4 */}
                <div
                    className="absolute z-40 transition-all duration-300"
                    style={{
                        transform: `translateX(${360 + spread}px) translateY(40px) scale(${scaleFactor})`,
                        opacity: opacityFactor,
                    }}
                >
                    <Image src={card4} alt="card4" width={420} height={220} className="rounded-2xl shadow-2xl" />
                </div>

                {/* CARD 5 */}
                <div
                    className="absolute z-20 transition-all duration-300"
                    style={{
                        transform: `translateX(${560 + spread * 1.3}px) translateY(24px) rotate(6deg) scale(${scaleFactor})`,
                        opacity: opacityFactor,
                    }}
                >
                    <Image src={card5} alt="card5" width={420} height={220} className="rounded-2xl shadow-2xl" />
                </div>

                {/* CARD 6 */}
                <div
                    className="absolute z-40 transition-all duration-300"
                    style={{
                        transform: `translateX(${760 + spread * 1.6}px) translateY(40px) scale(${scaleFactor})`,
                        opacity: opacityFactor,
                    }}
                >
                    <Image src={card6} alt="card6" width={420} height={220} className="rounded-2xl shadow-2xl" />
                </div>

            </div>
        </section>
    );
}