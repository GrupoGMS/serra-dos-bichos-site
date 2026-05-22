"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

function SpotlightEffect() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(204,31,31,0.08), transparent 50%)`;
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={ref} className="absolute inset-0 z-10 pointer-events-none transition-none" />;
}

function ScrollIndicator() {
  return (
    <div className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2">
      <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
      <div className="w-px h-8 relative overflow-hidden">
        <motion.div
          animate={{ y: ["0%", "100%"] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#CC1F1F] to-transparent"
        />
      </div>
    </div>
  );
}

const words = [
  "Banho e tosa, alimentação e transporte",
  "com conforto, segurança e carinho.",
];

const shadowTitle =
  "0 2px 6px rgba(0,0,0,0.95), 0 4px 16px rgba(0,0,0,0.85), 0 8px 32px rgba(0,0,0,0.7)";
const shadowText =
  "0 1px 4px rgba(0,0,0,0.99), 0 4px 12px rgba(0,0,0,0.9)";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full bg-[#0C0C0C] overflow-hidden sm:h-screen"
    >

      {/* ══ MOBILE ══
          Imagem em proporção natural → mostra tudo (cachorro, moto, logo).
          Conteúdo absolutamente ancorado na base da imagem.
      */}
      <div className="sm:hidden relative w-full">
        {/* Imagem natural — sem corte */}
        <img
          src="/assets/images/logo.jpeg"
          alt="Serra dos Bichos"
          fetchPriority="high"
          className="w-full h-auto block"
          style={{ filter: "brightness(0.82)" }}
        />
        {/* Overlay levíssimo */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>

      {/* Conteúdo mobile — flui abaixo da imagem */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="sm:hidden relative z-20 px-5 pt-6 pb-10 flex flex-col items-center text-center"
      >
        <h1
          className="font-extrabold text-white leading-[1.08] tracking-[-0.03em] mb-2"
          style={{ fontSize: "clamp(1.5rem, 5vw, 2rem)", textShadow: shadowTitle }}
        >
          Cuidado premium para quem faz parte{" "}
          <span className="text-[#CC1F1F]">da sua família.</span>
        </h1>
        <p
          className="text-white/75 text-sm max-w-xs mx-auto leading-snug mb-5"
          style={{ textShadow: shadowText }}
        >
          {words.join(" ")}
        </p>
        <div className="relative p-[2px] rounded-full">
          <div className="absolute inset-0 rounded-full moving-border-gradient" />
          <WhatsAppButton
            type="agendar"
            label="Chamar no WhatsApp"
            size="lg"
            variant="primary"
            className="relative rounded-full bg-[#CC1F1F] hover:bg-[#A81A1A] border-0 shadow-none"
          />
        </div>
        <a
          href="#banho-tosa"
          className="mt-3 text-white/45 text-xs font-medium tracking-wide transition-colors duration-200 underline-offset-4 hover:underline hover:text-white"
        >
          Conhecer serviços
        </a>

        {/* Scroll indicator mobile */}
        <div className="mt-5 flex flex-col items-center gap-2">
          <span className="text-white/25 text-[10px] tracking-widest uppercase">Scroll</span>
          <div className="w-px h-6 relative overflow-hidden">
            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#CC1F1F] to-transparent"
            />
          </div>
        </div>
      </motion.div>


      {/* ══ DESKTOP ══
          Imagem fill com parallax, conteúdo centrado.
      */}
      <motion.div style={{ y: videoY }} className="hidden sm:block absolute inset-0 scale-110">
        <Image
          src="/assets/images/logo.jpeg"
          alt="Serra dos Bichos"
          fill
          priority
          className="object-cover object-center"
          style={{ filter: "brightness(0.70)" }}
        />
      </motion.div>
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-b from-[#0C0C0C]/60 via-transparent to-[#0C0C0C] z-[1]" />
      <div className="hidden sm:block absolute inset-0 bg-gradient-to-r from-[#0C0C0C]/40 via-transparent to-[#0C0C0C]/20 z-[1]" />

      <SpotlightEffect />

      <motion.div
        style={{ y: contentY, opacity }}
        className="hidden sm:flex absolute inset-0 z-20 flex-col items-center justify-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="max-w-4xl w-full mb-10 px-4"
        >
          <h1
            className="text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-[-0.03em] mb-5"
            style={{ textShadow: shadowTitle }}
          >
            Cuidado premium para quem faz parte{" "}
            <span className="text-[#CC1F1F]">da sua família.</span>
          </h1>
          <p
            className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed"
            style={{ textShadow: shadowText }}
          >
            {words.join(" ")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center gap-4"
        >
          <div className="relative p-[2px] rounded-full">
            <div className="absolute inset-0 rounded-full moving-border-gradient" />
            <WhatsAppButton
              type="agendar"
              label="Chamar no WhatsApp"
              size="lg"
              variant="primary"
              className="relative rounded-full bg-[#CC1F1F] hover:bg-[#A81A1A] border-0 shadow-none"
            />
          </div>
          <a
            href="#banho-tosa"
            className="text-white/50 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Conhecer serviços
          </a>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
