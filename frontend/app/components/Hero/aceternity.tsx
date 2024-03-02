"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImagesSlider } from "@/app/ui/images-slider";

export default function Hero() {
    const images = [
        "/images/hero/hero_1.webp",
        "/images/hero/hero_2.webp",
        "/images/hero/hero_3.webp"
    ];

    return (
        <ImagesSlider className="h-[30rem]" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center text-center"
            >
                <h1 className="max-w-screen-lg text-7xl text-white font-bold">
                    K Ježkovi na dobrý mok, cigáro i vepřový bok
                </h1>
            </motion.div>
        </ImagesSlider>
    );
}
