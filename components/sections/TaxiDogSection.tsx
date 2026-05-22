"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { MapPin, Clock, Shield } from "lucide-react";

const features = [
  { icon: MapPin, label: "Atendimento Local", desc: "Buscamos seu pet onde você estiver" },
  { icon: Clock, label: "Horários Flexíveis", desc: "Agendamento conforme sua rotina" },
  { icon: Shield, label: "Total Segurança", desc: "Pet transportado com máximo cuidado" },
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

export default function TaxiDogSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="taxi-dog" ref={sectionRef} className="relative bg-[#0C0C0C] overflow-hidden">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/*
        Grid de 3 itens:
        Mobile (1 col): título → vídeo → descrição+botão
        Desktop (2 col, 2 rows): [título | vídeo(row-span-2)]
                                  [descrição |              ]
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_1fr]">

        {/* ── 1º mobile / col-1 row-1 desktop: Badge + Título ── */}
        <div className="order-1 lg:col-start-1 lg:row-start-1 px-8 lg:px-14 pt-12 lg:pt-20 pb-6 lg:pb-8 flex flex-col justify-end">
          <BlurFade delay={0.15}>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-8 h-px bg-[#CC1F1F]" />
              <span className="text-[#CC1F1F] text-xs font-semibold tracking-widest uppercase">
                Táxi Dog
              </span>
            </div>
          </BlurFade>

          <BlurFade delay={0.25}>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white leading-[1.05] tracking-[-0.03em]">
              Táxi Dog com{" "}
              <span className="text-[#CC1F1F]">conforto</span>{" "}
              e segurança
            </h2>
          </BlurFade>
        </div>

        {/* ── 2º mobile / col-2 row-1+2 desktop: Vídeo ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative bg-[#0C0C0C] overflow-hidden"
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-auto block"
            style={{ filter: "brightness(0.95) contrast(1.05)" }}
          >
            <source src="/assets/videos/taxi-dog.mp4" type="video/mp4" />
          </video>

          {/* Fade topo */}
          <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/70 to-transparent pointer-events-none" />
          {/* Fade base */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/70 to-transparent pointer-events-none" />
          {/* Fade esquerdo (desktop) */}
          <div className="absolute top-0 left-0 bottom-0 w-28 bg-gradient-to-r from-[#0C0C0C] to-transparent pointer-events-none hidden lg:block" />
          {/* Fade direito — cobre borda/V03 */}
          <div className="absolute top-0 right-0 bottom-0 w-28 bg-gradient-to-l from-[#0C0C0C] to-transparent pointer-events-none" />
        </motion.div>

        {/* ── 3º mobile / col-1 row-2 desktop: Descrição + Features + CTA ── */}
        <div className="order-3 lg:col-start-1 lg:row-start-2 px-8 lg:px-14 pt-6 lg:pt-4 pb-16 lg:pb-20 flex flex-col justify-start">
          <BlurFade delay={0.35}>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              Buscamos e levamos seu pet com total cuidado e praticidade.
              Segurança e tranquilidade para você e para seu melhor amigo.
            </p>
          </BlurFade>

          <div className="flex flex-col gap-5 mb-12">
            {features.map((feat, i) => (
              <BlurFade key={feat.label} delay={0.42 + i * 0.1}>
                <div className="flex items-center gap-4 group">
                  <div className="w-11 h-11 rounded-xl border border-[#CC1F1F]/30 bg-[#CC1F1F]/10 flex items-center justify-center shrink-0 group-hover:bg-[#CC1F1F]/20 group-hover:border-[#CC1F1F]/60 transition-all duration-300">
                    <feat.icon className="w-5 h-5 text-[#CC1F1F]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{feat.label}</p>
                    <p className="text-white/40 text-sm">{feat.desc}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={0.72}>
            <WhatsAppButton
              type="taxidog"
              label="Agendar Táxi Dog"
              size="md"
              variant="primary"
            />
          </BlurFade>
        </div>

      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
