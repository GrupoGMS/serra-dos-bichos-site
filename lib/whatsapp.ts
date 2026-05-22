const WHATSAPP_PHONE = "5531987854898";

const MESSAGES = {
  geral:   "Olá! Vim pelo site da Serra dos Bichos e gostaria de mais informações.",
  banho:   "Olá! Vim pelo site e quero agendar um Banho e Tosa premium! 🐕",
  racao:   "Olá! Vim pelo site e tenho interesse nos produtos e rações premium! 🐾",
  taxidog: "Olá! Vim pelo site e gostaria de usar o serviço de Táxi Dog! 🏍️",
  agendar: "Olá! Vim pelo site da Serra dos Bichos e gostaria de agendar um serviço!",
};

export type WhatsAppType = keyof typeof MESSAGES;

export function getWhatsAppLink(type: WhatsAppType = "geral"): string {
  const message = encodeURIComponent(MESSAGES[type]);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;
}
