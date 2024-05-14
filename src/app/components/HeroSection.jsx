"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion, useDragControls } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const controls = useDragControls();

  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
      const handleResize = () => setScreenWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const getImageSize = () => {
    let imageSize = 115;
    if (screenWidth >= 1024) {
      imageSize = 300;
    }
    return imageSize;
  };

  const imageSize = getImageSize();
  return (
    <section className="lg:py-16">
      <motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-12 drag-area">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
          >
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200 mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
              <span className="text-white text-transparent bg-clip-text bg-gradient-to-r">
                Hello, I'm{" "}
              </span>
              <br></br>
              <TypeAnimation
                sequence={[
                  "Sara",
                  1000,
                  "a web developer",
                  1000,
                  "an UX designer",
                  1000,
                ]}
                wrapper="span"
                speed={25}
                repeat={Infinity}
              />
            </h1>
            <p className="text-subtitle  text-base sm:text-lg mb-6 lg:text-xl">
              I'm a full-stack developer and an engineer who's deeply passionate
              about UX and crafting delightful web experiences.{" "}
            </p>
            <div>
              <Link
                href="/#contact"
                className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-600 to-primary-400 hover:bg-slate-200 text-white"
              >
                Contact Me
              </Link>
              <Link
                href="/"
                className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-600 to-primary-400 hover:bg-slate-100 text-white mt-3"
              >
                <span className="block text-white bg-background hover:bg-slate-900 rounded-full px-5 py-2 ">
                  Download CV
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 place-self-center mt-4 lg:mt-0"
          >
            <div className="rounded-full bg-[#101010]  w-[150px] h-[150px] lg:w-[400px] lg:h-[400px] relative">
              <div style={{ position: "relative", top: "15%", left: "15%" }}>
                <Image
                  src="/images/placeholder-2.png"
                  className="bg"
                  width={imageSize + 5}
                  height={imageSize + 5}
                  style={{ position: "absolute", top: 0, left: 0 }}
                />
                <motion.div
                  drag
                  dragControls={controls}
                  dragElastic={0.1}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ position: "absolute", top: 0, left: 0 }}
                >
                  <Image
                    src="/images/dino-2.png"
                    width={imageSize}
                    height={imageSize}
                    style={{
                      pointerEvents: "none",
                      objectFit: "fill",
                    }}
                    className="dino"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
