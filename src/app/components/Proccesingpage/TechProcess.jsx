"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import central from "../image/central.png"

export default function TechProcess() {
    const [startAnimation, setStartAnimation] = useState(false);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
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
            transition: { duration: 0.8, ease: "easeInOut" },
        },
    };

    const boxFromCenter = {
        hidden: {
            x: -220,
            y: 0,
            scale: 0.6,
            opacity: 0
        },
        visible: (i) => ({
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                delay: i * 0.25,
                duration: 0.7,
                ease: "easeOut"
            }
        })
    };

    return (
        <motion.main
            className="relative h-screen w-full bg-[#FCF6E8] overflow-hidden font-sans flex items-center justify-center cursor-pointer"
            variants={containerVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            onMouseEnter={() => setStartAnimation(true)}
        >

            {/* Background Grid */}
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

            {/* Middle Pattern Strip */}
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

            {/* Center Box */}
            <div className="relative z-10 w-[320px] h-[380px] bg-[#E14A2E] p-3 shadow-2xl">
                <div className="w-full h-full bg-[#7D2D1E] border-[10px] border-[#893223] flex items-center justify-center p-8">
                    <div className="w-full h-full  rounded-lg pt-9" >
                        <Image
                            src={central}
                            width={400}
                            height={200}
                        /></div>
                </div>
            </div>

            {/* LEFT SIDE */}
            <div className="absolute left-[7%] flex flex-col gap-5 z-20">
                <DataBar label="PRODUCTS" color="bg-[#3267FF]" segments={['bg-[#3267FF]', 'bg-[#3267FF]', 'bg-[#22C55E]']} />
                <DataBar label="PARTNERS" color="bg-[#F9DBF5] text-[#915082]" segments={['bg-[#F9DBF5]', 'bg-[#3D1D3D]', 'bg-[#E14A2E]']} />
                <DataBar label="WINNING BEHAVIOUR" color="bg-[#22C55E]" segments={['bg-[#F2CC6B]', 'bg-[#3D1D3D]', 'bg-[#22C55E]']} />
                <DataBar label="ROLE PLAY" color="bg-[#3D1D3D]" segments={['bg-[#3267FF]', 'bg-[#E14A2E]', 'bg-[#22C55E]']} />
            </div>

            {/* RIGHT SIDE BOXES */}
            <div className="absolute right-[10%] flex flex-col gap-12 z-20">

                <motion.div custom={0} variants={boxFromCenter}>
                    <div className="relative -top-6.5 right-56 w-[100px] h-[100px] bg-[#C9A2C9] p-2 flex flex-col gap-2">
                        <div className="flex gap-2">
                            <div className="w-[36px] h-[28px] bg-[#E6D3E6]" />
                            <div className="w-[36px] h-[28px] bg-[#E6D3E6]" />
                        </div>
                        <div className="w-[70px] h-[10px] bg-[#E6D3E6]" />
                        <div className="w-[40px] h-[12px] bg-[#E6D3E6]" />
                    </div>
                </motion.div>

                <motion.div custom={1} variants={boxFromCenter}>
                    <div className="relative -left-4 bottom-22 right-23 h-[100px] w-[100px] bg-green-600 flex items-center justify-center overflow-hidden">
                        <div className="w-[90px] space-y-2">
                            <div className="flex justify-between">
                                <div className="w-[45px] h-[30px] bg-green-400 rounded-sm" />
                                <div className="w-[30px] h-[15px] bg-green-400 rounded-sm" />
                            </div>
                            <div className="h-[6px] bg-green-400 rounded w-full" />
                            <div className="h-[6px] bg-green-400 rounded w-[70%]" />
                            <div className="h-[6px] bg-green-400 rounded w-[80%]" />
                        </div>
                    </div>
                </motion.div>

                <motion.div custom={2} variants={boxFromCenter}>
                    <div className="relative -left-20.5 bottom-22 w-[100px] h-[100px] bg-[#3F63D8] overflow-hidden">
                        <div className="absolute left-[10px] top-[15px] w-[6px] h-[70px] bg-white/20" />
                        <div className="absolute left-[25px] top-[18px] w-[60px] h-[12px] bg-white/20" />
                        <div className="absolute left-[25px] top-[38px] w-[40px] h-[8px] bg-white/20" />
                        <div className="absolute right-[10px] bottom-[10px] w-[30px] h-[30px] bg-white/20" />
                        <div className="absolute top-0 right-0 w-0 h-0 
                            border-l-[30px] border-l-transparent
                            border-b-[30px] border-b-[#E5DDCF]" />
                    </div>
                </motion.div>

            </div>


            <div className="absolute right-[15%] bottom-[40%] flex flex-col gap-15 z-20">

                <div className="flex items-center gap-3">
                    <motion.div variants={lineVariants} className="w-40 h-[2px] bg-[#915082]" />
                    <motion.div variants={childVariants} className="bg-[#3D1D3D] text-white px-3 py-1 text-[10px] font-bold">
                        DISCOVERY
                    </motion.div>
                </div>

                <div className="flex items-center gap-3 translate-x-10">
                    <motion.div variants={lineVariants} className="w-80 h-[2px] bg-[#22C55E]" />
                    <motion.div variants={childVariants} className="bg-[#22C55E] text-white px-3 py-1 text-[10px] font-bold">
                        EVALUATION
                    </motion.div>
                </div>

                <div className="relative top-16 flex items-center">
                    <motion.div variants={lineVariants} className="w-50 h-[2px] bg-[#60A5FA]" />
                    <motion.div variants={childVariants} className="bg-[#60A5FA] text-white px-3 py-1 text-[10px] font-bold uppercase">
                        Learn Decision Criteria
                    </motion.div>
                </div>

            </div>

        </motion.main>
    );
}

function DataBar({ label, color, segments }) {
    return (
        <motion.div
            className="flex items-center"
            variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            <div className={`px-2 py-0.5 text-[10px] font-bold uppercase ${color}`}>
                {label}
            </div>

            <div className="flex h-2 w-52 overflow-hidden">
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
        </motion.div>
    );
}