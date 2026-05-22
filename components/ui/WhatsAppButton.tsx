"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink, type WhatsAppType } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  type?: WhatsAppType;
  label?: string;
  variant?: "primary" | "outline" | "ghost" | "shimmer";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function WhatsAppButton({
  type = "geral",
  label = "Agendar Agora",
  variant = "primary",
  size = "md",
  className,
}: WhatsAppButtonProps) {
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const variants = {
    primary:
      "bg-[#CC1F1F] hover:bg-[#A81A1A] text-white border border-[#CC1F1F]/50",
    outline:
      "bg-transparent border border-[#CC1F1F] text-[#CC1F1F] hover:bg-[#CC1F1F]/10",
    ghost:
      "bg-white/5 hover:bg-white/10 text-white border border-white/10",
    shimmer:
      "shimmer-btn text-white border-0",
  };

  return (
    <motion.a
      href={getWhatsAppLink(type)}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 shadow-lg cursor-pointer",
        sizes[size],
        variants[variant],
        className
      )}
    >
      <svg viewBox="0 0 32 32" className="w-5 h-5 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.002 2.667C8.636 2.667 2.667 8.636 2.667 16c0 2.352.634 4.558 1.742 6.458L2.667 29.333l7.076-1.693A13.262 13.262 0 0 0 16.002 29.333c7.364 0 13.331-5.969 13.331-13.333 0-7.364-5.967-13.333-13.331-13.333zm6.047 16.035c-.332-.165-1.962-.966-2.265-1.079-.305-.11-.527-.165-.748.165-.22.33-.857 1.079-1.052 1.299-.193.22-.386.247-.716.082-.332-.165-1.4-.515-2.666-1.643-.985-.877-1.65-1.96-1.844-2.292-.193-.33-.021-.51.145-.673.15-.148.332-.385.498-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.748-1.804-1.024-2.469-.27-.648-.545-.56-.748-.57l-.637-.011c-.22 0-.578.082-.88.413-.302.33-1.155 1.13-1.155 2.754s1.183 3.194 1.348 3.414c.165.22 2.327 3.554 5.64 4.985.788.34 1.403.542 1.882.694.79.25 1.51.215 2.079.13.634-.094 1.96-.8 2.236-1.573.275-.773.275-1.436.193-1.573-.082-.138-.303-.22-.633-.385z"/>
      </svg>
      {label}
    </motion.a>
  );
}
