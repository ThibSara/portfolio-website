"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { TabButton } from "./TabButton";
import { motion, useDragControls } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>C#</li>
        <li>NoSQL</li>
        <li>blender</li>
        <li>figma</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Harvard - CS50 : Introduction to Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>ESILV - Paris Engineering School - 2025 </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("certification");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  const getImageSize = () => {
    const screenWidth = window.innerWidth;
    let imageSize = 125;
    if (screenWidth >= 1024) {
      imageSize = 300;
    }
    return imageSize;
  };
  const imageSize = getImageSize();
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-4">
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
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className=" text-base lg:text-lg">
            {" "}
            I'm a French AI and Data Science engineering student, graduating in
            2025. Recently, I discovered a passion for UX and web development,
            and I look forward to combining these skills to create impactful and
            user-friendly digital solutions.{" "}
          </p>
          <div className="flex flex-row mt-8 justify-start">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              certification
            </TabButton>
          </div>
          <div className={"mt-8"}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
