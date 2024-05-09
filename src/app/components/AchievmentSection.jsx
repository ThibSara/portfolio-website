"use client";
import React, { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useDragControls } from "framer-motion";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "50",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Years",
    value: "3",
  },
];

const AchievementsSection = () => {
  const controls = useDragControls();

  return (
    <>
      <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
          {achievementsList.map((achievement, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              >
                <h2 className="text-white text-4xl font-bold flex flex-row">
                  {achievement.prefix}
                  <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-white text-4xl font-bold"
                    configs={(_, index) => {
                      return {
                        mass: 1,
                        friction: 100,
                        tensions: 140 * (index + 1),
                      };
                    }}
                  />
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="row flex  items-center justify-center justify-lg-between xl:gap-24">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-0">
          <Image
            src="/images/placeholder-4.png"
            width={100}
            height={100}
            style={{
              pointerEvents: "none",
              objectFit: "fill",
              position: "absolute",
            }}
            className="dino"
          />
          <motion.div
            drag
            dragControls={controls}
            dragElastic={0.1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ position: "relative", top: 0, left: 0 }}
            className="dino-container"
          >
            <Image
              src="/images/dino-3.png"
              width={150}
              height={150}
              style={{
                pointerEvents: "none",
                width: "100%",
                height: "100%",
              }}
              className="dino"
            />
          </motion.div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-0">
          <Image
            src="/images/placeholder-4.png"
            width={100}
            height={100}
            style={{
              pointerEvents: "none",
              objectFit: "fill",
              position: "absolute",
            }}
            className="dino"
          />
          <motion.div
            drag
            dragControls={controls}
            dragElastic={0.1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ position: "relative", top: 0, left: 0 }}
            className="dino-container"
          >
            <Image
              src="/images/dino-3.png"
              width={150}
              height={150}
              style={{
                pointerEvents: "none",
                width: "100%",
                height: "100%",
              }}
              className="dino"
            />
          </motion.div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-lg-0">
          <Image
            src="/images/placeholder-4.png"
            width={100}
            height={100}
            style={{
              pointerEvents: "none",
              objectFit: "fill",
              position: "absolute",
            }}
            className="dino"
          />
          <motion.div
            drag
            dragControls={controls}
            dragElastic={0.1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ position: "relative", top: 0, left: 0 }}
            className="dino-container"
          >
            <Image
              src="/images/dino-4.png"
              width={150}
              height={150}
              style={{
                pointerEvents: "none",
                width: "100%",
                height: "100%",
              }}
              className="dino"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AchievementsSection;
