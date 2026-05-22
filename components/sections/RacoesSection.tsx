"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { Award, Leaf, Heart } from "lucide-react";

const cards = [
  {
    icon: Award,
    title: "Marcas Premium",
    desc: "As melhores marcas do mercado, selecionadas com critério para a saúde do seu pet.",
    border: "border-[#CC1F1F]/20",
    glow: "hover:border-[#CC1F1F]/50",
  },
  {
    icon: Leaf,
    title: "Nutrição Natural",
    desc: "Opções naturais e orgânicas para pets que merecem o melhor em alimentação.",
    border: "border-white/10",
    glow: "hover:border-white/30",
  },
  {
    icon: Heart,
    title: "Petiscos & Snacks",
    desc: "Variedade de petiscos saudáveis para premiar seu companheiro com carinho.",
    border: "border-white/10",
    glow: "hover:border-white/30",
  },
];

function GlassCard({
  icon: Icon,
  title,
  desc,
  border,
  glow,
  delay,
}: {
  icon: React.ElementType;
  title: string;
  desc: string;
  border: string;
  glow: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay }}
      className={`relative bg-white/5 backdrop-blur-md border ${border} ${glow} rounded-2xl p-6 flex flex-col gap-4 transition-all duration-500 group cursor-default`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="w-12 h-12 rounded-xl bg-[#CC1F1F]/10 border border-[#CC1F1F]/20 flex items-center justify-center group-hover:bg-[#CC1F1F]/20 transition-colors duration-300">
        <Icon className="w-6 h-6 text-[#CC1F1F]" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-base mb-1.5">{title}</h3>
        <p className="text-white/45 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

export default function RacoesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1.0]);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="racoes" ref={sectionRef} className="relative bg-[#0C0C0C] overflow-hidden">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-[#CC1F1F] text-xs font-semibold tracking-widest uppercase"
        >
          Loja & Produtos
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-white mt-3 leading-[1.05] tracking-[-0.03em]"
        >
          Alimentação saudável e{" "}
          <span className="text-[#CC1F1F]">produtos selecionados</span>
        </motion.h2>
      </div>

      {/* Vídeo em destaque — igual ao cachorro */}
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
            <source src="/assets/videos/gato-racao.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Fade topo */}
        <div className="absolute top-0 left-0 right-0 h-12 lg:h-32 bg-gradient-to-b from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none" />
        {/* Fade base */}
        <div className="absolute bottom-0 left-0 right-0 h-12 lg:h-32 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none" />
      </motion.div>

      {/* Conteúdo abaixo do vídeo */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-white/50 text-lg max-w-2xl leading-relaxed mb-12"
        >
          As melhores marcas e produtos para saúde e bem-estar do seu pet.
          Qualidade premium que você encontra aqui com facilidade.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {cards.map((card, i) => (
            <GlassCard key={card.title} {...card} delay={0.3 + i * 0.12} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex justify-center"
        >
          <WhatsAppButton
            type="racao"
            label="Ver Produtos pelo WhatsApp"
            size="md"
            variant="outline"
          />
        </motion.div>
      </div>
    </section>
  );
}
