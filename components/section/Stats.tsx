"use client";

import {
  Briefcase,
  Smile,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const stats = [
  {
    icon: Briefcase,
    value: "120+",
    title: "Proyek Diselesaikan",
    desc: "Berbagai website dan aplikasi modern untuk berbagai kebutuhan bisnis.",
  },
  {
    icon: Smile,
    value: "98%",
    title: "Klien Puas",
    desc: "Kepuasan klien menjadi fokus utama dalam setiap pengerjaan proyek.",
  },
  {
    icon: Rocket,
    value: "5+ Tahun",
    title: "Pengalaman",
    desc: "Pengalaman dalam UI/UX dan pengembangan frontend modern.",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    title: "Aman & Terpercaya",
    desc: "Kode bersih, scalable, dan mudah dikembangkan di masa depan.",
  },
];

/* Animation Variants */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

export default function StatsSection() {
  return (
    <section className="relative -top-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="
                  group rounded-3xl
                  bg-white/60 backdrop-blur-xl
                  ring-1 ring-black/5
                  shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.25)]
                "
              >
                <div className="flex h-full flex-col gap-5 p-8">
                  
                  {/* Top Row */}
                  <div className="flex items-start gap-4">
                    
                    {/* Icon */}
                    <div
                      className="
                        flex h-14 w-14 shrink-0 items-center justify-center
                        rounded-2xl
                        bg-indigo-600/10 text-indigo-600
                      "
                    >
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Value + Title */}
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-gray-900">
                        {item.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-800">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
