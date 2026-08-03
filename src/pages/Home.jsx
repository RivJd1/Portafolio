import FlashCard from "../components/FlashCard.jsx";
import { perfil, flashCards } from "../data/contenido.js";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <img
          src={perfil.foto}
          alt={perfil.nombre}
          className="w-[220px] h-[220px] rounded-full object-cover shrink-0"
        />
        <h2 className="text-3xl font-extrabold">{perfil.nombre}</h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {perfil.bio}
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-extrabold mb-4">FLASH CARDS</h2>
        <div className="flex flex-col gap-4">
          {flashCards.map((card) => (
            <FlashCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
}