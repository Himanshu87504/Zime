"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Break() {
    const [startAnimation, setStartAnimation] = useState(false);

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const childVariants = {
        hidden: {
            x: -300,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.main
            className="relative h-screen w-full bg-[#F5F1E8] overflow-hidden font-sans"
            variants={containerVariants}
            initial="hidden"
            animate={startAnimation ? "visible" : "hidden"}
            onMouseEnter={() => setStartAnimation(true)}
        >
            {/* Background Grid (Always Visible) */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    backgroundImage: `
            linear-gradient(#E5D8BE 1px, transparent 1px),
            linear-gradient(90deg, #E5D8BE 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Middle Band (Always Visible) */}
            <div className="absolute top-1/2 left-0 w-full h-44 -translate-y-1/2 bg-[#F5F1E8]/80 backdrop-blur-sm">
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(229,216,190,0.5) 8px, transparent 8px),
              linear-gradient(90deg, rgba(229,216,190,0.5) 8px, transparent 8px)
            `,
                        backgroundSize: "30px 30px",
                    }}
                />
            </div>

            {/* TAGS */}

            <motion.div
                variants={childVariants}
                className="absolute top-[18%] left-[18%] bg-[#2563EB] text-white px-4 py-1 text-sm font-semibold uppercase"
            >
                PRODUCTS
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute top-[18%] left-[40%] -translate-x-1/2 bg-[#E65100] text-white px-4 py-1 text-sm font-semibold uppercase"
            >
                PRIMARY MARKETS
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute top-[18%] right-[45%] bg-[#00C853] text-white px-4 py-1 text-sm font-semibold uppercase"
            >
                PARTNERS
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute top-[45%] left-[40%] -translate-x-1/2 bg-[#F2C94C] text-black px-4 py-1 text-sm font-semibold uppercase"
            >
                BUYING
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute top-[42%] left-[5%] bg-[#E1BEE7] text-[#4A148C] px-4 py-1 text-sm font-semibold uppercase"
            >
                PARTNERS
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute top-[50%] left-[20%] bg-[#E53935] text-white px-4 py-1 text-sm font-semibold uppercase"
            >
                PRODUCTS
            </motion.div>

            <motion.div
                variants={childVariants}
                className="absolute bottom-[20%] left-1/3 -translate-x-1/2 bg-[#4A154B] text-white px-6 py-2 text-lg font-semibold tracking-widest"
            >
                CUSTOMER JOURNEY
            </motion.div>
        </motion.main>
    );
}