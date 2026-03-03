"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DataProcess() {
    const [startAnimation, setStartAnimation] = useState(false);

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const childVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <motion.main
            className="relative h-screen w-full bg-[#FCF6E8] overflow-hidden font-sans flex items-center justify-center cursor-pointer"
            variants={containerVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            onMouseEnter={() => setStartAnimation(true)}
        >
            {/* 1. Background Grid (Always Visible) */}
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

            {/* 2. Middle Dotted Band (Small Squares) */}
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

            {/* 3. Central Hero Square */}
            <div className="relative z-10">
                <div className="w-[320px] h-[380px] bg-[#E14A2E] p-3 shadow-2xl">
                    <div className="w-full h-full bg-[#7D2D1E] border-[10px] border-[#893223] flex items-center justify-center">
                        {/* Centered content if needed */}
                    </div>
                </div>
            </div>

            {/* 4. Labels (TAGS) */}

            <motion.div
                variants={childVariants}
                className="absolute top-[18%] left-[15%] bg-[#3267FF] text-white px-3 py-1 text-[11px] font-bold tracking-wider"
            >
                PRODUCTS
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute top-[26%] left-[22%] bg-[#E14A2E] text-white px-3 py-1 text-[11px] font-bold tracking-wider"
            >
                PRIMARY MARKETS
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute top-[35%] left-[28%] bg-[#F2CC6B] text-[#5C4D24] px-3 py-1 text-[11px] font-bold tracking-wider"
            >
                BUYING
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute top-[42%] left-[4%] bg-[#F9DBF5] text-[#915082] px-3 py-1 text-[11px] font-bold tracking-wider shadow-sm"
            >
                PARTNERS
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute top-[49%] left-[15%] bg-[#E14A2E] text-white px-3 py-1 text-[11px] font-bold tracking-wider"
            >
                PRODUCTS
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute top-[66%] left-[15%] bg-[#3D1D3D] text-white px-4 py-2 text-[12px] font-bold tracking-widest"
            >
                CUSTOMER JOURNEY
            </motion.div>

        </motion.main>
    );
}