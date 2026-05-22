"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";

function Particle({ x, y, size, delay, duration }: { x: number; y: number; size: number; delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#CC1F1F] pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{
        y: [0, -30, 0],
        x: [0, Math.random() * 20 - 10, 0],
        opacity: [0, 0.6, 0],
        scale: [0.5, 1, 0.5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  delay: Math.random() * 4,
  duration: Math.random() * 3 + 3,
}));

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="cta" ref={ref} className="relative bg-[#0C0C0C] overflow-hidden py-36">
      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}
      </div>

      {/* Radial glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-[#CC1F1F]/8 blur-[120px]" />
      </div>

      {/* Top line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CC1F1F]/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
        >
          <Image
            src="/assets/images/logo-oficial.png"
            alt="Serra dos Bichos"
            width={180}
            height={180}
            className="rounded-2xl shadow-2xl object-contain drop-shadow-[0_0_40px_rgba(204,31,31,0.5)]"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#CC1F1F]/10 border border-[#CC1F1F]/25 text-[#CC1F1F] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#CC1F1F] animate-pulse" />
          Serra dos Bichos Petshop
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] tracking-[-0.03em]"
        >
          Seu pet merece o{" "}
          <span className="text-[#CC1F1F]">melhor</span>{" "}
          cuidado.
        </motion.h2>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-white/50 text-xl max-w-xl leading-relaxed"
        >
          Entre em contato agora mesmo e agende o serviço ideal para o seu companheiro.
        </motion.p>

        {/* CTA Button — Shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <motion.a
            href={getWhatsAppLink("geral")}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-3 px-10 py-5 rounded-full text-white font-bold text-lg tracking-wide overflow-hidden shadow-2xl shimmer-btn"
          >
            <svg viewBox="0 0 32 32" className="w-6 h-6 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.002 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.352.634 4.558 1.742 6.458L2.667 29.333l7.076-1.693A13.262 13.262 0 0 0 16.002 29.333c7.364 0 13.331-5.969 13.331-13.333 0-7.364-5.967-13.333-13.331-13.333zm6.047 16.035c-.332-.165-1.962-.966-2.265-1.079-.305-.11-.527-.165-.748.165-.22.33-.857 1.079-1.052 1.299-.193.22-.386.247-.716.082-.332-.165-1.4-.515-2.666-1.643-.985-.877-1.65-1.96-1.844-2.292-.193-.33-.021-.51.145-.673.15-.148.332-.385.498-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.748-1.804-1.024-2.469-.27-.648-.545-.56-.748-.57l-.637-.011c-.22 0-.578.082-.88.413-.302.33-1.155 1.13-1.155 2.754s1.183 3.194 1.348 3.414c.165.22 2.327 3.554 5.64 4.985.788.34 1.403.542 1.882.694.79.25 1.51.215 2.079.13.634-.094 1.96-.8 2.236-1.573.275-.773.275-1.436.193-1.573-.082-.138-.303-.22-.633-.385z"/>
            </svg>
            Falar no WhatsApp
            {/* Shine overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_3s_infinite]" />
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center gap-10 mt-8 pt-8 border-t border-white/5"
        >
          {[
            { value: "500+", label: "Pets atendidos" },
            { value: "100%", label: "Satisfação garantida" },
            { value: "5★", label: "Avaliação média" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-white/35 text-xs mt-0.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
