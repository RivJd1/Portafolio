export default function TimelineStep({ titulo, texto, isLast }) {
  return (
    <div className="flex-1 relative pt-10 text-center px-2">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-900 z-10" />
      {!isLast && (
        <div className="absolute top-[18px] left-1/2 w-full h-0.5 bg-gray-900" />
      )}
      <h3 className="font-extrabold text-lg mb-2">{titulo}</h3>
      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line max-w-[220px] mx-auto">
        {texto}
      </p>
    </div>
  );
}
