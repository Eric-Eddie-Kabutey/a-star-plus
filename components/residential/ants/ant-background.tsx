'use client'

import { motion } from "@/components/module/framer-motion";

export const AntBackground = () => {
  const ants = [
    { top: '10%', left: '10%', rotate: '15deg', scale: 0.8 },
    { top: '15%', left: '85%', rotate: '-25deg', scale: 1.0 },
    { top: '25%', left: '5%', rotate: '5deg', scale: 1.2 },
    { top: '30%', left: '90%', rotate: '10deg', scale: 0.7 },
    { top: '50%', left: '20%', rotate: '-10deg', scale: 1.1 },
    { top: '60%', left: '80%', rotate: '30deg', scale: 1.3 },
  ];

  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden"
      initial="initial"
      animate="animate"
      variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
    >
      {ants.map((ant, i) => (
        <motion.img
          key={i}
          src="https://i.imgur.com/gK9y9Qy.png"
          alt=""
          className="absolute w-16 h-auto md:w-24"
          style={{ top: ant.top, left: ant.left, rotate: ant.rotate }}
          variants={{
            initial: { opacity: 0, scale: 0.5 },
            animate: { opacity: 1, scale: ant.scale },
          }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 + i * 0.1 }}
        />
      ))}
    </motion.div>
  );
};