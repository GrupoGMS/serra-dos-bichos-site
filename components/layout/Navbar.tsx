"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { useState } from "react";

const navLinks = [
  { label: "Banho & Tosa", href: "#banho-tosa" },
  { label: "Rações", href: "#racoes" },
  { label: "Táxi Dog", href: "#taxi-dog" },
  { label: "Contato", href: "#cta" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [mobileOpen, setMobileOpen] = useState(false);

  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(12,12,12,0)", "rgba(12,12,12,0.92)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.15]);

  return (
    <motion.nav
      style={{ backgroundColor: bg, backdropFilter: backdropBlur }}
      className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    >
      <motion.div
        style={{ borderBottomColor: `rgba(255,255,255,${borderOpacity.get()})` }}
        className="border-b border-transparent"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <Image
              src="/assets/images/logo-oficial.png"
              alt="Serra dos Bichos"
              width={48}
              height={48}
              className="rounded-xl object-contain"
            />
            <span className="hidden sm:block text-white font-semibold text-sm tracking-wide leading-tight">
              Serra dos Bichos<br />
              <span className="text-[#CC1F1F] text-xs font-normal tracking-widest uppercase">Petshop</span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <motion.a
              href={getWhatsAppLink("agendar")}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex items-center gap-2 bg-[#CC1F1F] hover:bg-[#A81A1A] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 shadow-lg"
            >
              Agendar
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white p-1"
              aria-label="Menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#0C0C0C]/95 backdrop-blur-xl border-t border-white/10 px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-white text-base font-medium py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href={getWhatsAppLink("agendar")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#CC1F1F] text-white text-center font-semibold px-5 py-3 rounded-full mt-2"
            >
              Agendar Agora
            </a>
          </motion.div>
        )}
      </motion.div>
    </motion.nav>
  );
}
