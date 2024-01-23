import React from "react";
import { motion } from "framer-motion";

const MyComponent = () => {
  const variants = {
    fadeIn: {
      notInView: {
        opacity: 0,
      },
      inView: {
        opacity: 1,
      },
    },
    fadeRight: {
      notInView: {
        opacity: 0,
        x: "50%",
      },
      inView: {
        opacity: 1,
        x: "0",
      },
    },
    fadeLeft: {
      notInView: {
        opacity: 0,
        x: "-50%",
      },
      inView: {
        opacity: 1,
        x: "0",
      },
    },
    fadeTop: {
      notInView: {
        opacity: 0,
        y: "-100%",
      },
      inView: {
        opacity: 1,
        y: "0",
      },
    },
    fadeDown: {
      notInView: {
        opacity: 0,
        y: "100%",
      },
      inView: {
        opacity: 1,
        y: "0",
      },
    },
    rotateY: {
      notInView: {
        opacity: 0,
        rotateY: 0,
        scale: 0.5,
      },
      inView: {
        opacity: 1,
        rotateY: 360,
        scale: 1,
      },
    },
    rotateX: {
      notInView: {
        opacity: 0,
        rotateX: 0,
        scale: 0.5,
      },
      inView: {
        opacity: 1,
        rotateX: 360,
        scale: 1,
      },
    },
    scale: {
      notInView: {
        opacity: 0,
        scale: 0.5,
      },
      inView: {
        opacity: 1,
        scale: 1,
      },
    },
    scaleDown: {
      notInView: {
        opacity: 0,
        scale: 1.5,
      },
      inView: {
        opacity: 1,
        scale: 1,
      },
    },
    scaleX: {
      notInView: {
        opacity: 0,
        scaleX: 0,
      },
      inView: {
        opacity: 1,
        scaleX: 1,
      },
    },
    scaleY: {
      notInView: {
        opacity: 0,
        scaleY: 0,
      },
      inView: {
        opacity: 1,
        scaleY: 1,
      },
    },
  };

  return (
    <div>
      <motion.div
        initial="notInView"
        animate="inView"
        exit="notInView"
        variants={variants.fadeIn}
      >
        This content fades in.
      </motion.div>

      <motion.div
        initial="notInView"
        animate="inView"
        exit="notInView"
        variants={variants.fadeRight}
      >
        This content fades in from the right.
      </motion.div>

      {/* Repeat the pattern for other animation types */}
    </div>
  );
};

export default MyComponent;
