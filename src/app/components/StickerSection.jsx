"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useDragControls } from "framer-motion";

function StickerSection() {
  const controls = useDragControls();
  const constraintsRef = useRef(null);
  return (
    <div>
      <motion.div
        style={{
          height: "1000px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
        className="drag-area w-full h-full"
        ref={constraintsRef}
      >
        <motion.div
          drag
          dragControls={controls}
          dragElastic={0.1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ position: "absolute", top: 0, left: 0 }}
          className="dino-container"
        >
          <Image
            src="/images/dino-1.png"
            width={250}
            height={250}
            style={{
              pointerEvents: "none",
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
            className="dino"
          />
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragControls={controls} // Apply drag controls here
          dragElastic={0.1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{ position: "absolute", top: 0, left: 0 }}
          className="dino-container"
        >
          <Image
            src="/images/dino-2.png"
            width={190}
            height={190}
            style={{
              pointerEvents: "none",
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
            className="dino"
          />
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragControls={controls} // Apply drag controls here
          dragElastic={0.1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ position: "absolute", top: 0, left: 0 }}
          className="dino-container"
        >
          <Image
            src="/images/dino-3.png"
            width={220}
            height={220}
            style={{
              pointerEvents: "none",
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
            className="dino"
          />
        </motion.div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          dragControls={controls} // Apply drag controls here
          dragElastic={0.1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ position: "absolute", top: 0, left: 0 }}
          className="dino-container"
        >
          <Image
            src="/images/dino-4.png"
            width={220}
            height={220}
            style={{
              pointerEvents: "none",
              width: "100%",
              height: "100%",
              objectFit: "fill",
            }}
            className="dino"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default StickerSection;
