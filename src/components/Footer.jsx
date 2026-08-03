import { Mail, Instagram, Github, Phone } from "lucide-react";
import { contacto } from "../data/contenido.js";

export default function Footer() {
  const items = [
    { icon: Mail, label: "Gmail", value: contacto.gmail },
    { icon: Instagram, label: "Instagram", value: contacto.instagram },
    { icon: Github, label: "Github", value: contacto.github },
    { icon: Phone, label: "Teléfono", value: contacto.telefono },
  ];

  return (
    <footer className="bg-teal-600 text-white mt-auto">
      <div className="max-w-6xl mx-auto flex flex-wrap gap-x-10 gap-y-2 px-6 py-4">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm">
            <item.icon size={16} />
            <span className="font-bold">{item.label}:</span>
            <span className="text-teal-50">{item.value}</span>
          </div>
        ))}
      </div>
    </footer>
  );
}
