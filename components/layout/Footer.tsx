import Image from "next/image";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MapPin, Phone } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/logo-oficial.png"
                alt="Serra dos Bichos"
                width={52}
                height={52}
                className="rounded-xl object-contain"
              />
              <div>
                <p className="text-white font-semibold text-sm">Serra dos Bichos</p>
                <p className="text-[#CC1F1F] text-xs tracking-widest uppercase">Petshop</p>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Cuidado premium para quem faz parte da sua família. Com amor, profissionalismo e dedicação.
            </p>
          </div>

          {/* Links rápidos */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">Serviços</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Banho & Tosa", href: "#banho-tosa" },
                { label: "Rações Premium", href: "#racoes" },
                { label: "Táxi Dog", href: "#taxi-dog" },
                { label: "Agendamento", href: getWhatsAppLink("agendar") },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-5">Contato</p>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={getWhatsAppLink("geral")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <span className="w-8 h-8 rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 flex items-center justify-center transition-colors">
                    <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  </span>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/serradosbichos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors duration-200 text-sm group"
                >
                  <span className="w-8 h-8 rounded-full bg-pink-500/10 group-hover:bg-pink-500/20 flex items-center justify-center transition-colors">
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                  </span>
                  Instagram
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/40 text-sm">
                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#CC1F1F]" />
                </span>
                <span>R. Capivari, 837 - Serra<br />Belo Horizonte - MG, 30220-400</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Serra dos Bichos Petshop. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Feito com ❤️ para os pets
          </p>
        </div>
      </div>
    </footer>
  );
}
