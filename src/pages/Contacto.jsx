import { Mail, Instagram, Github, Phone } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import { contacto } from "../data/contenido.js";

export default function Contacto() {
  const items = [
    { icon: Mail, label: "Gmail", value: contacto.gmail },
    { icon: Instagram, label: "Instagram", value: contacto.instagram },
    { icon: Github, label: "Github", value: contacto.github },
    { icon: Phone, label: "Teléfono", value: contacto.telefono },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <PageHeader>C O N T A C T O</PageHeader>
      <div className="max-w-xl flex flex-col gap-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="bg-teal-600 text-white rounded px-5 py-4 flex items-center gap-3"
          >
            <item.icon size={18} />
            <span className="font-bold">{item.label}:</span>
            <span className="text-teal-50">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
