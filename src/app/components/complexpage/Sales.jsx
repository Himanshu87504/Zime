"use client";
import Image from "next/image";
import arrow from "../image/arrows.png";
import { motion } from "framer-motion";

export default function Sales() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#F5F1E8]">

            {/* GRID BACKGROUND */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(#A69F92 1px, transparent 1px), linear-gradient(90deg, #A69F92 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* 1. ARROW ANIMATION: COMES FROM TOP */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 0.8 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 pointer-events-none z-10"
            >
                <Image
                    src={arrow}
                    alt="Arrow Scribbles"
                    fill
                    priority
                    className="object-cover"
                />
            </motion.div>

            {/* 2. CENTER TEXT: FADE & SLIGHT UPWARD MOVE */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-20 text-center select-none w-full"
            >
                <h1 className="text-6xl md:text-8xl font-serif text-[#1A1A1A] tracking-tight">
                    Sales is complex.
                </h1>
                <p className="text-5xl md:text-8xl font-serif mt-2 text-[#1A1A1A] opacity-20 tracking-tight italic">
                    Playbooks flatten it.
                </p>
            </motion.div>

            {/* 3. LABELS: BIG TO SMALL ANIMATION (Staggered) */}
            <div className="absolute inset-0 z-30 font-sans font-bold text-sm tracking-widest">
                {[
                    { label: "Customer Journey", color: "#361A3D", pos: "top-[18%] left-[12%]", text: "white" },
                    { label: "Products", color: "#0B4D36", pos: "bottom-[10%] left-[12%]", text: "white" },
                    { label: "Buying", color: "#F2C94C", pos: "top-[10%] right-[30%]", text: "#333" },
                    { label: "Partners", color: "#27AE60", pos: "top-[25%] right-[15%]", text: "white" },
                    { label: "Partners", color: "#E0BBE4", pos: "bottom-[28%] right-[12%]", text: "#361A3D" },
                    { label: "Primary Markets", color: "#E65100", pos: "bottom-[20%] left-[42%]", text: "white" },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 + (i * 0.1) }}
                        className={`absolute ${item.pos} px-4 py-2 uppercase`}
                        style={{ backgroundColor: item.color, color: item.text }}
                    >
                        {item.label}
                    </motion.div>
                ))}
            </div>

            {/* 4. LEFT CARD: SLIDE FROM LEFT */}
            <motion.div
                initial={{ x: -200, rotate: -12 }}
                animate={{ x: 0, rotate: -12 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-24 h-96 bg-[#361A3D] rounded-3xl flex flex-col justify-center items-center gap-12 text-white/40 text-[10px] z-40"
            >
                {["Feb 23", "Feb 22", "Feb 21", "Feb 20"].map((date) => (
                    <span key={date} className="rotate-90 whitespace-nowrap">{date}</span>
                ))}
            </motion.div>

            {/* 5. RIGHT CARD: SLIDE FROM RIGHT */}
            <motion.div
                initial={{ x: 200, rotate: 12 }}
                animate={{ x: 0, rotate: 12 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-32 h-[500px] bg-[#F2D1F3] rounded-[40px] border border-black/5 z-40"
            />

        </section>
    );
}