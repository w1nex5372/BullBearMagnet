"use client";

import { motion } from "framer-motion";

const orbTransition = {
  duration: 22,
  repeat: Number.POSITIVE_INFINITY,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

export function AnimatedBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(33,85,162,0.16),transparent_34%),linear-gradient(180deg,#03050a_0%,#07101a_42%,#04060a_100%)]" />

      <motion.div
        className="absolute left-1/2 top-[-10rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(59,146,255,0.18)_0%,rgba(59,146,255,0.08)_34%,transparent_72%)] blur-3xl"
        animate={{
          x: ["-8%", "6%", "-5%"],
          y: ["0%", "5%", "2%"],
          scale: [1, 1.08, 0.98],
        }}
        transition={{ ...orbTransition, duration: 28 }}
      />

      <motion.div
        className="absolute left-[-8rem] top-[24%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(46,120,247,0.12)_0%,rgba(46,120,247,0.05)_40%,transparent_74%)] blur-[120px]"
        animate={{
          x: ["0%", "12%", "4%"],
          y: ["-2%", "8%", "1%"],
          scale: [1, 0.96, 1.04],
        }}
        transition={{ ...orbTransition, duration: 30 }}
      />

      <motion.div
        className="absolute bottom-[-10rem] right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(54,205,177,0.08)_0%,rgba(54,205,177,0.035)_42%,transparent_76%)] blur-[120px]"
        animate={{
          x: ["0%", "-10%", "-4%"],
          y: ["0%", "-8%", "-2%"],
          scale: [1, 1.05, 0.97],
        }}
        transition={{ ...orbTransition, duration: 26 }}
      />

      <motion.div
        className="absolute left-[18%] top-[58%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.015)_42%,transparent_75%)] blur-[110px]"
        animate={{
          x: ["0%", "8%", "2%"],
          y: ["0%", "-6%", "-1%"],
          scale: [0.96, 1.02, 1],
        }}
        transition={{ ...orbTransition, duration: 24 }}
      />

      <div className="absolute inset-0 opacity-[0.12]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_24%,transparent_88%)]" />
      </div>

      <div className="absolute inset-0 opacity-[0.05] mix-blend-screen">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.22)_0%,transparent_26%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.12)_0%,transparent_22%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_0%,transparent_18%)] blur-2xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,10,0.02)_0%,rgba(3,5,10,0.12)_45%,rgba(3,5,10,0.24)_100%)]" />
    </div>
  );
}
