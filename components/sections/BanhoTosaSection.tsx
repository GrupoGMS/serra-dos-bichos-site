"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Shield, Star, Droplets } from "lucide-react";

const features = [
  { icon: Droplets, label: "Higiene Completa", desc: "Banho com produtos premium hipoalergênicos" },
  { icon: Shield, label: "100% Seguro", desc: "Ambiente controlado e tranquilo para seu pet" },
  { icon: Star, label: "Profissionais", desc: "Tosadores certificados com anos de experiência" },
];

function BlurFade({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function BanhoTosaSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1.0]);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="banho-tosa" ref={sectionRef} className="relative bg-[#0C0C0C] overflow-hidden">
      {/* Divider top */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#CC1F1F]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-0">
        {/* Header do topo */}
        <div className="mb-10">
          <BlurFade delay={0.0}>
            <span className="text-[#CC1F1F] text-xs font-semibold tracking-widest uppercase">
              Serviço Premium
            </span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-[1.05] tracking-[-0.03em] mt-3">
              Banho e Tosa{" "}
              <span className="text-[#CC1F1F]">Premium</span>
            </h2>
          </BlurFade>
        </div>
      </div>

      {/* Vídeo largo — frame completo, altura cinematográfica */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        className="relative w-full bg-[#0C0C0C] overflow-hidden"
      >
        <motion.div style={{ scale: videoScale }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto block"
            style={{ filter: "brightness(0.95) contrast(1.05)" }}
          >
            <source src="/assets/videos/banho-tosa.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Fade topo */}
        <div className="absolute top-0 left-0 right-0 h-12 lg:h-32 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none" />
        {/* Fade base */}
        <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-32 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none" />

        {/* Badge sobre o vídeo — oculto no mobile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="hidden sm:block absolute bottom-8 left-8 bg-[#0C0C0C]/80 backdrop-blur-md border border-white/10 rounded-2xl px-5 py-4"
        >
          <p className="text-white text-sm font-semibold">Banho & Tosa Premium</p>
          <p className="text-[#CC1F1F] text-xs mt-1">✓ Agendamento rápido pelo WhatsApp</p>
        </motion.div>
      </motion.div>

      {/* Conteúdo abaixo do vídeo */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Descrição */}
          <BlurFade delay={0.3}>
            <p className="text-white/55 text-lg leading-relaxed">
              Cuidado especializado para deixar seu pet limpo, confortável e feliz.
              Utilizamos produtos selecionados e técnicas profissionais para o melhor resultado.
            </p>
          </BlurFade>

          {/* Features + CTA */}
          <div className="flex flex-col gap-6">
            {features.map((feat, i) => (
              <BlurFade key={feat.label} delay={0.35 + i * 0.1}>
                <div className="flex items-start gap-4 group">
                  <div className="w-11 h-11 rounded-xl bg-[#CC1F1F]/10 border border-[#CC1F1F]/20 flex items-center justify-center shrink-0 group-hover:bg-[#CC1F1F]/20 transition-colors duration-300">
                    <feat.icon className="w-5 h-5 text-[#CC1F1F]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{feat.label}</p>
                    <p className="text-white/45 text-sm mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              </BlurFade>
            ))}

            <BlurFade delay={0.65}>
              <div className="pt-2">
                <WhatsAppButton
                  type="banho"
                  label="Agendar Banho & Tosa"
                  size="md"
                  variant="primary"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
