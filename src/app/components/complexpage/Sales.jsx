"use client";
import Image from "next/image";
import arrow from "../image/arrows.png";

export default function Sales() {
    return (
        <section className="relative h-screen w-full overflow-hidden  flex items-center justify-center">

            {/* 1. Grid Background Overlay */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    // backgroundImage:
                    //     // "linear-gradient(#A69F92 1px, transparent 1px), linear-gradient(90deg, #A69F92 1px, transparent 1px)",
                    // backgroundSize: "60px 60px",
                }}
            />


            <div className="absolute inset-0 pointer-events-none z-10">
                <Image
                    src={arrow}
                    alt="Arrow Scribbles"
                    fill
                    priority
                    className="object-cover opacity-80"
                />
            </div>


            <div className="relative z-20 text-center select-none w-full">
                <h1 className="text-7xl md:text-8xl font-serif text-[#1A1A1A] tracking-tight">
                    Sales is complex.
                </h1>
                <p className="text-7xl md:text-8xl font-serif mt-2 text-[#1A1A1A] opacity-20 tracking-tight italic">
                    Playbooks flatten it.
                </p>
            </div>


            <div className="absolute inset-0 z-30 font-sans font-bold text-sm tracking-widest">


                <div className="absolute top-[18%] left-[12%] bg-[#361A3D] text-white px-4 py-2 uppercase">
                    Customer Journey
                </div>


                <div className="absolute bottom-[10%] left-[12%] bg-[#0B4D36] text-white px-4 py-2 uppercase">
                    Products
                </div>

                {/* BUYING */}
                <div className="absolute top-[10%] right-[30%] bg-[#F2C94C] text-[#333] px-4 py-2 uppercase">
                    Buying
                </div>

                {/* PARTNERS (Top Green) */}
                <div className="absolute top-[25%] right-[15%] bg-[#27AE60] text-white px-4 py-2 uppercase">
                    Partners
                </div>

                {/* PARTNERS (Bottom Purple) */}
                <div className="absolute bottom-[28%] right-[12%] bg-[#E0BBE4] text-[#361A3D] px-4 py-2 uppercase">
                    Partners
                </div>

                {/* PRIMARY MARKETS */}
                <div className="absolute bottom-[20%] left-[42%] bg-[#E65100] text-white px-4 py-2 uppercase">
                    Primary Markets
                </div>

            </div>

        </section>
    );
}