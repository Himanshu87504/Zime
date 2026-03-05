import React from "react";
import Image from "next/image";
import Ellipse from '../image/Ellipse.png'
import Groupcircular from '../image/Groupcircular.png'


const FirstPage = () => {
    return (
        <div className="min-h-screen bg-[#ffce31] font-sans overflow-hidden relative selection:bg-black selection:text-white flex">

            <div>
                <Image
                    src={Ellipse}
                    width={205}
                    height={20}
                />
            </div>
            <div>  i want thies image rotate circular to the first image add the animaatinon
                <div className="relative top-70 right-25">
                    <Image
                        src={Groupcircular}
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </div>
    );
};

export default FirstPage;