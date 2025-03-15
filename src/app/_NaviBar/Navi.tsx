import nextlogo from "../../../public/next.png";
import Image from "next/image";
import mango from "../../../public/mongo.png";
import React from "react";
import Link from "next/link";

interface NaviProps {
    page: string;
}

function Navi({ page }: NaviProps) {
    if (page === "home") {
        return (
            <nav className="fixed bottom-2 right-0 flex flex-row items-center justify-center p-4 ">
                <Link href={'./mongo'}>
                    <Image src={mango} width={80} height={80} alt="Next.js Logo" className="transition-transform duration-300 hover:scale-120" />
                </Link>
                <Link href={'/'}>
                    <Image src={nextlogo} width={40} height={40} alt="MongoDB Logo" className="transition-transform duration-300 hover:scale-110" />

                </Link>
            </nav>
        );
    } else if (page === "mongo") {
        return (
            <nav className="fixed bottom-2 right-0 flex flex-row items-center justify-center p-4 non">
                <Link href={'/'}>
                    <Image src={nextlogo} width={70} height={70} alt="Next.js Logo" className="transition-transform duration-300 hover:scale-120" />
                </Link>
                <Link href={'./mongo'}>
                    <Image src={mango} width={40} height={40} alt="MongoDB Logo" className="transition-transform duration-300 hover:scale-110" />

                </Link>
            </nav>
        );
    } else {
        return null; // Returns nothing if the page prop doesn't match
    }
}

export default Navi;
