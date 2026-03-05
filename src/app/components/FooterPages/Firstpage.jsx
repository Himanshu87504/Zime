"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Ellipse from '../image/Ellipse.png';
import Groupcircular from '../image/Groupcircular.png';

const FirstPage = () => {
    return (
        <div className="h-screen bg-[#ffce31] font-sans overflow-hidden relative selection:bg-black selection:text-white flex flex-col items-start justify-start ">
            <div className="mb-4">
                <Image
                    src={Ellipse}
                    alt="Ellipse"
                    width={205}
                    height={20}
                />
            </div>
            <div className="relative -top-140 left-26"> {/* Curve position: up-left from Groupcircular */}
                <motion.div
                    className="relative"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <Image
                        src={Groupcircular}
                        alt="Group circular"
                        width={200}
                        height={200}
                    />
                </motion.div>
            </div>


        </div>
    );
};

export default FirstPage;
