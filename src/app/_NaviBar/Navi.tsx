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
            <nav className="fixed bottom-2 right-0 flex flex-row items-center justify-center p-4">
                <Link href={'/'}>
                    <Image src={nextlogo} width={80} height={80} alt="Next.js Logo" />
                </Link>
                <Link href={'./mongo'}>
                    <Image src={mango} width={40} height={40} alt="MongoDB Logo" />

                </Link>
            </nav>
        );
    } else if (page === "mongo") {
        return (
            <nav className="fixed bottom-2 right-0 flex flex-row items-center justify-center p-4">
                <Link href={'./mongo'}>
                    <Image src={mango} width={70} height={70} alt="Next.js Logo" />
                </Link>
                <Link href={'/'}>
                    <Image src={nextlogo} width={40} height={40} alt="MongoDB Logo" />

                </Link>
            </nav>
        );
    } else {
        return null; // Returns nothing if the page prop doesn't match
    }
}

export default Navi;
