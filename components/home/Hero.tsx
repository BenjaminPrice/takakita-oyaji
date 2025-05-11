"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 japanese-pattern z-0"></div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/30 z-10"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/8466776/pexels-photo-8466776.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
      ></div>

      <div className="container-section relative z-20">
        <div className="max-w-3xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-clip-text text-center text-transparent bg-gradient-to-r from-white to-primary">
              高北おやじの会
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            高洲北小学校
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/about" className="btn-primary">
              私たちについて
            </Link>
            <Link href="/activities" className="btn-secondary">
              活動を見る <ArrowRight className="inline ml-1 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
