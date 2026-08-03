export default function ProjectCard({ titulo, texto, imagen }) {
  return (
    <div className="flex flex-col gap-3">
      <img
        src={imagen}
        alt={titulo}
        className="w-full aspect-square rounded-xl object-cover"
      />
      <div>
        <h4 className="font-bold text-gray-900">{titulo}</h4>
        <p className="text-xs text-gray-600">{texto}</p>
      </div>
    </div>
  );
}