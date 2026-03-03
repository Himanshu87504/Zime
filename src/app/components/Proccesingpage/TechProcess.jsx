"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function TechProcess() {
    const [startAnimation, setStartAnimation] = useState(false);

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const childVariants = {
        hidden: { x: -30, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const lineVariants = {
        hidden: { scaleX: 0, originX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 0.8, ease: "easeInOut" }
        }
    };

    return (
        <motion.main
            className="relative h-screen w-full bg-[#FCF6E8] overflow-hidden font-sans flex items-center justify-center cursor-pointer"
            variants={containerVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            onMouseEnter={() => setStartAnimation(true)}
        >

            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `
                        linear-gradient(#D9CDB8 1px, transparent 1px),
                        linear-gradient(90deg, #D9CDB8 1px, transparent 1px)
                    `,
                    backgroundSize: "40px 40px",
                }}
            />


            <div className="absolute w-full h-40 flex items-center justify-center pointer-events-none">
                <div
                    className="w-full h-32 opacity-20"
                    style={{
                        backgroundImage: `
                            linear-gradient(90deg, #B5A48B 8px, transparent 8px),
                            linear-gradient(#B5A48B 8px, transparent 8px)
                        `,
                        backgroundSize: "24px 24px",
                    }}
                />
            </div>


            <div className="absolute left-[7%] flex flex-col gap-5 z-20">

                <DataBar label="PRODUCTS" color="bg-[#3267FF]" segments={['bg-[#3267FF]', 'bg-[#3267FF]', 'bg-[#22C55E]']} />
                <DataBar label="PARTNERS" color="bg-[#F9DBF5] text-[#915082]" segments={['bg-[#F9DBF5]', 'bg-[#3D1D3D]', 'bg-[#E14A2E]']} />
                <div className="pr-8">
                    <DataBar label="WINNING BEHAVIOUR" color="bg-[#22C55E]" segments={['bg-[#F2CC6B]', 'bg-[#3D1D3D]', 'bg-[#22C55E]']} />
                </div>
                <DataBar label="ROLE PLAY" color="bg-[#3D1D3D]" segments={['bg-[#3267FF]', 'bg-[#E14A2E]', 'bg-[#22C55E]']} />
            </div>

            {/* 4. Central Hero Square */}
            <div className="relative z-10">
                <div className="w-[320px] h-[380px] bg-[#E14A2E] p-3 shadow-2xl">
                    <div className="w-full h-full bg-[#7D2D1E] border-[10px] border-[#893223] flex items-center justify-center p-8">
                        {/* You can place an SVG brain icon here */}
                        <div className="w-full h-full opacity-40 border border-dashed border-white/20 rounded-lg" />
                    </div>
                </div>
            </div>


            <div className="absolute right-[10%] flex flex-col gap-12 z-20">
                <div className="w-[100px] h-[100px] bg-[#C9A2C9] p-2 flex flex-col gap-2">

                    {/* Top boxes */}
                    <div className="flex gap-2">
                        <div className="w-[36px] h-[28px] bg-[#E6D3E6]"></div>
                        <div className="w-[36px] h-[28px] bg-[#E6D3E6]"></div>
                    </div>

                    {/* Long rectangle */}
                    <div className="w-[70px] h-[10px] bg-[#E6D3E6]"></div>

                    {/* Small rectangle */}
                    <div className="w-[40px] h-[12px] bg-[#E6D3E6]"></div>

                </div>
                <div className="flex items-center gap-3">
                    <motion.div variants={lineVariants} className="w-20 h-[1px] bg-[#915082]" />
                    <motion.div variants={childVariants} className="bg-[#3D1D3D] text-white px-3 py-1 text-[10px] font-bold">
                        DISCOVERY
                    </motion.div>
                </div>

                {/* Evaluation */}
                <div className="flex items-center gap-3 translate-x-10">
                    <motion.div variants={lineVariants} className="w-32 h-[1px] bg-[#22C55E]" />
                    <motion.div variants={childVariants} className="bg-[#22C55E] text-white px-3 py-1 text-[10px] font-bold">
                        EVALUATION
                    </motion.div>
                </div>


                <div className="flex items-center gap-3">
                    <motion.div variants={lineVariants} className="w-24 h-[1px] bg-[#60A5FA]" />
                    <motion.div variants={childVariants} className="bg-[#60A5FA] text-white px-3 py-1 text-[10px] font-bold tracking-tighter uppercase">
                        Learn Decision Criteria
                    </motion.div>
                </div>
            </div>

        </motion.main>
    );
}


function DataBar({ label, color, segments }) {
    return (
        <div className="flex items-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`px-2 py-0.5 text-[10px] font-bold uppercase ${color}`}
            >
                {label}
            </motion.div>
            <div className="flex h-2 w-90 overflow-hidden">
                {segments.map((seg, i) => (
                    <motion.div
                        key={i}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className={`h-full flex-1 ${seg} origin-left`}
                    />
                ))}
            </div>
        </div>
    );
}