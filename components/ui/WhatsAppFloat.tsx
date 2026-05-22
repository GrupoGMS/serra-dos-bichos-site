"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    const onScroll = () => { if (window.scrollY > 200) setVisible(true); };
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(timer); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-[#1C1C1C] text-white text-sm px-3 py-2 rounded-lg border border-white/10 whitespace-nowrap shadow-xl"
              >
                Falar no WhatsApp
              </motion.span>
            )}
          </AnimatePresence>

          {/* Button */}
          <a
            href={getWhatsAppLink("geral")}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-[60px] h-[60px] rounded-full shadow-2xl"
            aria-label="Falar no WhatsApp"
          >
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] wapp-pulse-ring" />
            {/* Second ring */}
            <span
              className="absolute inset-0 rounded-full bg-[#25D366] wapp-pulse-ring"
              style={{ animationDelay: "1s" }}
            />
            {/* Icon button */}
            <motion.div
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full h-full rounded-full bg-[#25D366] flex items-center justify-center shadow-lg"
            >
              <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.002 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.352.634 4.558 1.742 6.458L2.667 29.333l7.076-1.693A13.262 13.262 0 0 0 16.002 29.333c7.364 0 13.331-5.969 13.331-13.333 0-7.364-5.967-13.333-13.331-13.333zm0 24.267a11 11 0 0 1-5.605-1.535l-.402-.24-4.198 1.005 1.033-4.082-.263-.417A10.975 10.975 0 0 1 5 16c0-6.065 4.937-11 11.002-11C22.065 5 27 9.935 27 16c0 6.065-4.935 11-10.998 11zm6.047-8.232c-.332-.165-1.962-.966-2.265-1.079-.305-.11-.527-.165-.748.165-.22.33-.857 1.079-1.052 1.299-.193.22-.386.247-.716.082-.332-.165-1.4-.515-2.666-1.643-.985-.877-1.65-1.96-1.844-2.292-.193-.33-.021-.51.145-.673.15-.148.332-.385.498-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.748-1.804-1.024-2.469-.27-.648-.545-.56-.748-.57l-.637-.011c-.22 0-.578.082-.88.413-.302.33-1.155 1.13-1.155 2.754s1.183 3.194 1.348 3.414c.165.22 2.327 3.554 5.64 4.985.788.34 1.403.542 1.882.694.79.25 1.51.215 2.079.13.634-.094 1.96-.8 2.236-1.573.275-.773.275-1.436.193-1.573-.082-.138-.303-.22-.633-.385z"/>
              </svg>
            </motion.div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
