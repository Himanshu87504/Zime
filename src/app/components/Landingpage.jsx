"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, ArrowUpRight } from "lucide-react";

import rating from "../image/rating.png";
import Redbutton from "../image/Redbutton.png";
import Vector from "../image/Vector.png";

import companylogo1 from "../image/Company logo (1).png";
import companylogo2 from "../image/Company logo (2).png";
import companylogo3 from "../image/Company logo (3).png";
import companylogo4 from "../image/Company logo (4).png";
import companylogo5 from "../image/Company logo (5).png";
import companylogo6 from "../image/Company logo (6).png";
import companylogo7 from "../image/Company logo (7).png";

import CardCollection from "./CardCollection";

export default function Landingpage() {


    const [show, setShow] = useState(false);


    const [pageComplete, setPageComplete] = useState(false);

    useEffect(() => {
        setTimeout(() => setShow(true), 200);

        // AFTER FULL HERO ANIMATION
        setTimeout(() => setPageComplete(true), 2200);
    }, []);

    const logos = [
        companylogo1,
        companylogo2,
        companylogo3,
        companylogo4,
        companylogo5,
        companylogo6,
        companylogo7,
    ];

    return (
        <main className="h-full bg-[#F5F1E8] relative overflow-hidden">


            <div className="absolute inset-0 bg-[linear-gradient(#e7dfcf_1px,transparent_1px),linear-gradient(90deg,#e7dfcf_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />

            {/* ================= NAVBAR ================= */}
            <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                <div className="flex bg-white w-full justify-between p-1 rounded-4xl items-center border-b-5">

                    <h1 className="text-3xl font-semibold">
                        <span className="text-orange-500">◎</span> zime.
                    </h1>

                    <div className="hidden md:flex gap-8 text-gray-700">
                        <p>Product</p>
                        <p>Resources</p>
                        <p>Pricing</p>
                        <p>About Us</p>
                    </div>

                    <div className="flex items-center gap-5">
                        <button className="text-gray-700">Login</button>

                        <button className="flex items-center">
                            <div className="flex items-center gap-2 bg-[#1B1B07] text-white px-6 py-3 rounded-full shadow-md">
                                <Calendar size={18} />
                                <span className="font-medium">Book a demo</span>
                            </div>

                            <div className="bg-[#1B1B07] text-white w-12 h-12 flex items-center justify-center rounded-full -ml-2 shadow-md">
                                <ArrowUpRight size={18} />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* ================= HERO ================= */}
            <section className="relative z-10 text-center max-w-5xl mx-auto pt-3 px-6">

                {/* Rating */}
                <div className={`flex justify-center mb-3 transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <Image src={rating} alt="rating" width={100} height={100} />
                </div>

                {/* HEADING */}
                <h1 className={`text-4xl md:text-5xl font-serif leading-tight text-black transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    Make winning{" "}

                    <span className="inline-block">
                        <div className="flex justify-center items-center gap-2">

                            <Image
                                src={Vector}
                                alt="left"
                                width={14}
                                height={28}
                                className={`transition-all duration-700 ${show ? "scale-100" : "scale-0"}`}
                            />

                            <span className={`relative inline-block text-orange-500 font-medium px-3 py-1 bg-[#f8e5d8] rounded-md transition-all duration-700 delay-200 ${show ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}>
                                Repeatable
                                <span className="absolute left-2 right-2 bottom-0 h-[2px] bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full"></span>
                            </span>

                            <Image
                                src={Vector}
                                alt="right"
                                width={14}
                                height={28}
                                className={`rotate-180 transition-all duration-700 ${show ? "scale-100" : "scale-0"}`}
                            />
                        </div>
                    </span>

                    <br />
                    without playbooks.
                </h1>

                {/* TEXT */}
                <p className={`mt-6 text-gray-600 text-sm max-w-2xl mx-auto transition-all duration-700 delay-300 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    Zime learns how your best deals close and embeds winning
                    behaviors directly into your team’s daily workflow.
                </p>

                {/* BUTTONS */}
                <div className={`flex flex-wrap justify-center gap-4 mt-6 transition-all duration-700 delay-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
                    <button className="transition-all duration-150 active:translate-y-2 active:scale-95 px-4 py-3 rounded-full border-b-4 border-black bg-white shadow-md">
                        Run a custom pilot
                    </button>

                    <button className="transition-all duration-150 active:translate-y-2 active:scale-95">
                        <Image src={Redbutton} alt="Book demo" width={200} height={100} />
                    </button>
                </div>

                {/* LOGOS */}
                <div className={`flex items-center justify-center gap-12 py-10 transition-all duration-1000 delay-700 ${show ? "opacity-100" : "opacity-0"}`}>
                    {logos.map((logo, index) => (
                        <Image
                            key={index}
                            src={logo}
                            alt={`company-${index}`}
                            width={120}
                            height={40}
                            className={`object-contain transition-all duration-300 ${index === 0 || index === logos.length - 1
                                ? "opacity-40 grayscale"
                                : "opacity-100"
                                }`}
                        />
                    ))}
                </div>

                {/* ✅ APPEARS AFTER PAGE COMPLETE */}
                <div
                    className={`transition-all duration-1000 ${pageComplete
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-16"
                        }`}
                >
                    <CardCollection />
                </div>


            </section>
        </main>
    );
}