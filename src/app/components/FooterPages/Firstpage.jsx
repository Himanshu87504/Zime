import React from 'react';
import { Search, Play, Settings, Clock, Database, CheckCircle2, MoreHorizontal, Maximize2 } from 'lucide-react';

const FirstPage = () => {
    return (
        <div className="min-h-screen bg-[#F5C747] font-sans overflow-hidden relative selection:bg-black selection:text-white flex">
            <div className="relative flex h-screen w-full items-center justify-center bg-[#FBC638] overflow-hidden">

                {/* 1. The Left-Anchored Half Circle Arc */}
                <svg
                    className="absolute left-0 h-full w-[50%] pointer-events-none"
                    viewBox="0 0 400 800"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* cx="0" anchors the center to the left edge.
            r="380" makes a large, sweeping arc.
        */}
                    <circle
                        cx="0"
                        cy="400"
                        r="380"
                        stroke="white"
                        strokeWidth="2"
                        strokeDasharray="15 25"
                        className="opacity-70"
                    />
                </svg>

                {/* 2. Center Graphic (The "Sun" element) */}
                {/* We move this container slightly left to sit 'on' the arc line */}
                <div className="relative flex items-center justify-center z-10 mr-[40%]">

                    {/* Soft Glow Background Circle */}
                    <div className="h-48 w-48 rounded-full bg-[#F3D372] opacity-90 shadow-sm" />

                    {/* 3. The Spiral and Star */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                            width="120"
                            height="120"
                            viewBox="0 0 100 100"
                            className="animate-[spin_40s_linear_infinite]"
                        >
                            <path
                                d="M50,50 
                 M50,50 c0-3,3-6,6-6 c7,0,13,7,13,15 c0,11-10,21-21,21 c-15,0-28-13-28-28 c0-20,17-36,37-36 c24,0,44,20,44,45"
                                stroke="black"
                                strokeWidth="1.2"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* 4. Center Four-Pointed Star */}
                        <div
                            className="absolute h-7 w-7 bg-black"
                            style={{
                                clipPath: 'polygon(50% 0%, 61% 39%, 100% 50%, 61% 61%, 50% 100%, 39% 61%, 0% 50%, 39% 39%)'
                            }}
                        />
                    </div>
                </div>

                {/* Placeholder for your Page Content */}
                <div className="absolute right-20 text-right">
                    <h1 className="text-4xl font-serif text-black/20 uppercase tracking-widest">
                        Content Layer
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default FirstPage;