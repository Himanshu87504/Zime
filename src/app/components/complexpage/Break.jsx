"use client";

import Image from "next/image";
import arrows from "../image/arows.png";
import card1 from "../image/card.png";
import card2 from "../image/card2.png";

export default function Break() {
    return (
        <main className="snap-y snap-mandatory h-screen overflow-y-scroll overflow-x-hidden bg-[#F5F1E8] font-serif">

            <section className="relative h-screen w-full flex items-center justify-center snap-start overflow-hidden border-t border-black/5 ">

                <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(#A69F92 1px, transparent 1px), linear-gradient(90deg, #A69F92 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />

                <div className="absolute inset-0 pointer-events-none z-10 pl-30 pb-20 opacity-60">
                    <Image
                        src={arrows}
                        alt="Arrows"
                        className="fill object-cover p1"
                    />
                </div>

                <div className="relative z-20 text-center select-none max-w-4xl px-4">
                    <h1 className="text-4xl md:text-[70px] leading-[1.1] text-[#1A1A1A] tracking-tight">
                        Execution <span className="text-[#E63946] italic">breaks</span> in the real world.
                    </h1>
                </div>

                <div className="absolute top-[-13%] right-[80%] w-64 h-40 bg-[#F2C94C] rounded-2xl rotate-12 z-0" />
                <div className="absolute top-[-8%] right-[1%]  w-48 h-32 bg-[#00E676] rounded-2xl rotate-0 z-0" />
                <div className="absolute bottom-[-35%] right-[1.5%] w-64 h-80 bg-[#E63946] rounded-3xl rotate-12 z-40 shadow-2xl" />
                <div className="absolute bottom-[35%] left-[92%] w-72 h-48 bg-pink-300 rounded-2xl rotate-19 z-40 shadow-2xl" />
                <div className="absolute top-[23%] right-[84%] w-64 h-40  rounded-2xl -rotate-1" ><Image
                    src={card2}
                    alt="Arrows"
                    className=""
                /></div>
                <div className="absolute top-[88%] right-[76%] w-94 h-60  rounded-2xl -rotate-2 " >
                    <Image
                        src={card1}
                        alt="Arrows"
                        className=""
                    />
                </div>


                <div className="absolute inset-0 z-30 pointer-events-none font-sans font-bold text-[10px] md:text-xs tracking-widest">
                    {[
                        { label: "CUSTOMER JOURNEY", color: "#361A3D", pos: "top-[33%] left-[25%]", t: "white" },
                        { label: "BUYING", color: "#F2C94C", pos: "top-[30%] right-[33%]", t: "black" },
                        { label: "PARTNERS", color: "#0B4D36", pos: "top-[35%] right-[25%]", t: "white" },
                        { label: "PARTNERS", color: "red", pos: "bottom-[20%] right-[15%]", t: "white" },
                        { label: "PRIMARY MARKETS", color: "#E65100", pos: "top-[75%] left-[40%]", t: "white" },
                        { label: "PRODUCTS", color: "green", pos: "top-[85%] left-[24%]", t: "white" },
                        { label: "PRODUCTS", color: "pink", pos: "bottom-[5%] left-[42%]", t: "white" },
                        { label: "PRODUCTS", color: "pink", pos: "bottom-[25%] right-[22%]", t: "white" },
                    ].map((tag, i) => (
                        <div
                            key={`tag2-${i}`}
                            className={`absolute ${tag.pos} px-4 py-1.5 shadow-xl`}
                            style={{ backgroundColor: tag.color, color: tag.t }}
                        >
                            {tag.label}
                        </div>
                    ))}
                </div>

            </section>
        </main>
    );
}