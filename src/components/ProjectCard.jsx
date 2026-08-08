export default function ProjectCard({ titulo, texto, imagen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-3 text-left w-full group"
    >
      <img
        src={imagen}
        alt={titulo}
        className="w-full aspect-square rounded-xl object-cover transition-transform group-hover:scale-[1.02]"
      />
      <div>
        <h4 className="font-bold text-gray-900">{titulo}</h4>
        <p className="text-xs text-gray-600">{texto}</p>
      </div>
    </button>
  );
}